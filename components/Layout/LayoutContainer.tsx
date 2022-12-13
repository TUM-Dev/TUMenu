import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
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

export interface LayoutContainerProps {
  foodPlaceMenu: FoodPlaceMenu
  foodPlaceData: FoodPlace
  labels: Labels[]
  height: number
  queueData: Queue
}

dayjs.extend(weekOfYear)
dayjs.extend(minMax)

export default function LayoutContainer({
  foodPlaceMenu,
  foodPlaceData,
  labels,
  height,
  queueData,
}: LayoutContainerProps) {
  const theme = useTheme()
  const { t } = useTranslation('common')
  const router = useRouter()

  const [value, setValue] = useState<dayjs.Dayjs | null>(dayjs())
  const [maxDate, setMaxDate] = useState<dayjs.Dayjs>(dayjs())
  const [minDate, setMinDate] = useState<dayjs.Dayjs>(dayjs())
  const [mealsShown, setMealsShown] = useState<Dishes[]>([])
  const [initialMeals, setInitialMeals] = useState<Dishes[]>([])
  const [filteredValue, setFilteredValue] = useState<string>('All')
  const [showMenu, setShowMenu] = useState<boolean>(false)
  // to initate the rerender of the GenerateMenu component
  const [rerender, setRerender] = useState<number>(Math.random())
  const disableButtons = initialMeals.length === 0
  const matches = useMediaQuery('(min-width:28.125em)')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    if (newValue !== 'All') {
      const filteredMeals = initialMeals.filter((meal) => meal.dish_type === newValue)
      setMealsShown(filteredMeals)
    } else {
      setMealsShown(initialMeals)
    }
    setShowMenu(false)
    setFilteredValue(newValue)
  }

  const handleGenerateMenu = () => {
    setShowMenu(true)
    setRerender(Math.random())
  }

  useEffect(() => {
    if (foodPlaceMenu.weeks.length !== 0) {
      const dailyMeals = foodPlaceMenu.weeks
        .filter((week) => week.year === value?.year() && week.number === value.week() - 1)
        .map((week) => week.days.filter((day) => dayjs(day.date).isSame(value, 'day')))
        .flat(1)
        .map((dailyMenu) => dailyMenu.dishes.map((dish) => dish))
        .flat(1)

      setMealsShown(dailyMeals)
      setInitialMeals(dailyMeals)

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
  }, [value, foodPlaceMenu])

  useEffect(() => {
    setFilteredValue('All')
    setShowMenu(false)
  }, [value, router.pathname])

  return (
    <Box
      sx={{
        ml: { lg: theme.spacing(30), md: 0 },
        minHeight: '100%',
        px: theme.spacing(4),
        py: theme.spacing(2),
        backgroundColor: `${theme.palette.primary.main} !important`,
      }}>
      <LayoutContainerHeader
        foodPlaceData={foodPlaceData}
        datePickerValue={value}
        datePickerSetValue={setValue}
        minDate={minDate}
        maxDate={maxDate}
        queueData={queueData}
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
            sx={{
              backgroundColor: theme.palette.primary.light,
              color: theme.palette.primary.main,
            }}>
            {t('labelFilter')}
          </Button>
        </Box>
      </Box>
      {mealsShown.length !== 0 && !showMenu ? (
        <CardGrid dailyMeals={mealsShown} labels={labels} height={height} />
      ) : (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
          {!showMenu && (
            <NotFound height={height} translationString="notFound" imageSource="/not_found.svg" />
          )}
        </>
      )}
      {showMenu && (
        <GeneratedMenu
          height={height}
          setFilteredValue={setFilteredValue}
          setShowMenu={setShowMenu}
          meals={initialMeals}
          labels={labels}
          rerender={rerender}
        />
      )}
    </Box>
  )
}
