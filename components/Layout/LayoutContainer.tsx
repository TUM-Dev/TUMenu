import React, { useEffect, useState, useRef } from 'react'
import { useTranslation } from 'next-i18next'
import { Box, Typography, useTheme, Button, Tabs, Tab, useMediaQuery } from '@mui/material'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import minMax from 'dayjs/plugin/minMax'
import { FoodPlace } from '../../types/FoodPlace'
import { Dishes, FoodPlaceMenu } from '../../types/FoodPlaceMenu'
import LayoutContainerHeader from './LayoutContainerHeader'
import CardGrid from './CardGrid'
import NotFound from '../NotFound'
import { Labels } from '../../types/Labels'
import { Queue } from '../../types/Queue'
import GeneratedMenu from './GeneratedMenu'
import FilterDropdown from './FilterDropdown'

export interface LayoutContainerProps {
  foodPlaceMenu: FoodPlaceMenu
  foodPlaceData: FoodPlace
  labels: Labels[]
  queueData: Queue
  triggerSidebarMobile: boolean
  setTriggerSidebarMobile: React.Dispatch<React.SetStateAction<boolean>>
}

dayjs.extend(weekOfYear)
dayjs.extend(minMax)

export default function LayoutContainer({
  foodPlaceMenu,
  foodPlaceData,
  labels,
  queueData,
  triggerSidebarMobile,
  setTriggerSidebarMobile,
}: LayoutContainerProps) {
  const theme = useTheme()
  const { t } = useTranslation('common')

  const [value, setValue] = useState<dayjs.Dayjs | null>(dayjs())
  const [maxDate, setMaxDate] = useState<dayjs.Dayjs>(dayjs())
  const [minDate, setMinDate] = useState<dayjs.Dayjs>(dayjs())

  const [mealsShown, setMealsShown] = useState<Dishes[]>([])
  const [initialMeals, setInitialMeals] = useState<Dishes[]>([])
  const [filteredMeals, setFilteredMeals] = useState<Dishes[]>([])
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  const [filteredValue, setFilteredValue] = useState<string>('All')

  const [showMenu, setShowMenu] = useState<boolean>(false)
  // to initate the rerender of the GenerateMenu component
  const [rerender, setRerender] = useState<number>(Math.random())
  const [open, setOpen] = useState(false)

  const anchorRef = useRef<HTMLButtonElement>(null)
  const disableButtons = initialMeals.length === 0
  const matches = useMediaQuery('(min-width:28.125em)')

  const handleCheck = (name: string) => {
    if (selectedLabels.includes(name)) {
      setSelectedLabels(selectedLabels.filter((item) => item !== name))
    } else {
      setSelectedLabels([...selectedLabels, name])
    }
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }
    setOpen(false)
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open)
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus()
    }
    prevOpen.current = open
  }, [open])

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    if (newValue !== 'All' && newValue !== 'Disable') {
      const filteredMealsByCategory = filteredMeals.filter((meal) => meal.dish_type === newValue)
      setMealsShown(filteredMealsByCategory)
      setShowMenu(false)
    } else if (!showMenu || newValue === 'All') {
      setMealsShown(filteredMeals)
      setShowMenu(false)
    } else {
      setRerender(Math.random())
    }
    setFilteredValue(newValue)
  }

  const handleGenerateMenu = () => {
    setShowMenu(true)
    setRerender(Math.random())
  }

  useEffect(() => {
    if (foodPlaceMenu.weeks.length !== 0) {
      let dailyMeals = foodPlaceMenu.weeks
        .filter((week) => week.year === value?.year() && week.number === value.week())
        .map((week) => week.days.filter((day) => dayjs(day.date).isSame(value, 'day')))
        .flat(1)
        .map((dailyMenu) => dailyMenu.dishes.map((dish) => dish))
        .flat(1)

      setInitialMeals(dailyMeals)
      if (selectedLabels.length !== 0) {
        dailyMeals = dailyMeals.filter((meal) =>
          meal.labels.every((label) => !selectedLabels.includes(label)),
        )
      }
      setFilteredMeals(dailyMeals)
      setMealsShown(dailyMeals)

      const latestWeek = Math.max(...foodPlaceMenu.weeks.map((week) => week.number))
      const firstWeek = Math.min(...foodPlaceMenu.weeks.map((week) => week.number))
      const lastDay = dayjs.max(
        foodPlaceMenu.weeks
          .filter((week) => week.number === latestWeek)[0]
          .days.map((day) => dayjs(day.date)),
      )
      const firstDay = dayjs.min(
        foodPlaceMenu.weeks
          .filter((week) => week.number === firstWeek)[0]
          .days.map((day) => dayjs(day.date)),
      )
      setMinDate(firstDay)
      setMaxDate(lastDay)
    } else {
      setMealsShown([])
      setInitialMeals([])
    }
    setFilteredValue('All')
    setShowMenu(false)
  }, [value, foodPlaceMenu])

  useEffect(() => {
    const filteredMealsByLabel = initialMeals.filter((meal) =>
      meal.labels.every((label) => !selectedLabels.includes(label)),
    )
    setFilteredMeals(filteredMealsByLabel)
  }, [selectedLabels])

  useEffect(() => {
    handleChange({} as React.SyntheticEvent, filteredValue)
  }, [filteredMeals])

  return (
    <Box
      sx={{
        minHeight: '100%',
        px: theme.spacing(4),
        py: theme.spacing(2),
        backgroundColor: `${theme.palette.primary.main} !important`,
        zoom: 1,
      }}>
      <LayoutContainerHeader
        foodPlaceData={foodPlaceData}
        datePickerValue={value}
        datePickerSetValue={setValue}
        minDate={minDate}
        maxDate={maxDate}
        queueData={queueData}
        triggerSidebarMobile={triggerSidebarMobile}
        setTriggerSidebarMobile={setTriggerSidebarMobile}
      />
      <Box
        sx={{ borderBottom: 2, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
        <Tabs
          value={filteredValue}
          onChange={handleChange}
          sx={{ mt: theme.spacing(1) }}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile>
          <Tab value="All" label={t('all')} disabled={disableButtons} />
          <Tab value="Fleisch" label={t('meat')} disabled={disableButtons} />
          <Tab value="Vegetarisch" label={t('vegetarian')} disabled={disableButtons} />
          <Tab value="Wok" label="Wok" disabled={disableButtons} />
          <Tab value="Grill" label="Grill" disabled={disableButtons} />
          <Tab value="Pasta" label="Pasta" disabled={disableButtons} />
          <Tab value="Pizza" label="Pizza" disabled={disableButtons} />
          <Tab value="Studitopf" label={t('studyPot')} disabled={disableButtons} />
          <Tab value="Beilagen" label={t('sideDish')} disabled={disableButtons} />
          <Tab value="Süßspeise" label={t('dessert')} disabled={disableButtons} />
          <Tab value="Disable" label="Disabled" sx={{ display: 'none', pointerEvents: 'none' }} />
        </Tabs>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: { xs: 'center', sd: 'space-between' },
          gap: { xs: theme.spacing(1), sd: '0' },
          mt: theme.spacing(2),
        }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          {t('cardGridHeading')}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: theme.spacing(2),
          }}>
          <Button
            variant="contained"
            size={matches ? 'medium' : 'small'}
            disabled={disableButtons}
            onClick={handleGenerateMenu}
            sx={{
              backgroundColor: theme.palette.primary.light,
              color: theme.palette.primary.main,
            }}>
            {t('generateMenu')}
          </Button>
          <Button
            startIcon={<FilterAltIcon />}
            variant="contained"
            size={matches ? 'medium' : 'small'}
            disabled={disableButtons}
            ref={anchorRef}
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            sx={{
              backgroundColor: theme.palette.primary.light,
              color: theme.palette.primary.main,
            }}>
            {`${t('labelFilter')}(${selectedLabels.length})`}
          </Button>
        </Box>
      </Box>
      {mealsShown.length !== 0 && !showMenu ? (
        <CardGrid dailyMeals={mealsShown} labels={labels} />
      ) : (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>{!showMenu && <NotFound translationString="notFound" imageSource="/not_found.svg" />}</>
      )}
      {showMenu && (
        <GeneratedMenu
          setFilteredValue={setFilteredValue}
          setShowMenu={setShowMenu}
          meals={filteredMeals}
          labels={labels}
          rerender={rerender}
        />
      )}
      {open && (
        <FilterDropdown
          open={open}
          anchorRef={anchorRef}
          handleClose={handleClose}
          handleCheck={handleCheck}
          labels={labels}
          selectedLabels={selectedLabels}
        />
      )}
    </Box>
  )
}
