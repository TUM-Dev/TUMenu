import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { Box, Typography, useTheme, Button } from '@mui/material'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import { FoodPlace } from '../../types/FoodPlace'
import { FoodPlaceMenu } from '../../types/FoodPlaceMenu'
import LayoutContainerHeader from './LayoutContainerHeader'
import FilterTabs from './Tabs'
import CardGrid from './CardGrid'

export interface LayoutContainerProps {
  foodPlaceMenu: FoodPlaceMenu
  foodPlaceData: FoodPlace
}

dayjs.extend(weekOfYear)

export default function LayoutContainer({ foodPlaceMenu, foodPlaceData }: LayoutContainerProps) {
  const today = new Date()
  const [value, setValue] = useState<dayjs.Dayjs | null>(dayjs(today))
  const filters = foodPlaceMenu.weeks
    .filter((week) => week.year === value?.year() && week.number === value.week() - 1)
    .map((week) => week.days.filter((day) => dayjs(day.date).isSame(value, 'day')))
    .flat(1)
    .map((dailyMenu) => dailyMenu.dishes.map((dish) => dish.dish_type))
    .flat(1)
  const tabFilters = [...new Set(filters)]

  console.log(tabFilters)

  const theme = useTheme()
  const { t } = useTranslation('common')
  return (
    <Box
      sx={{
        ml: theme.spacing(30),
        minHeight: '100%',
        padding: theme.spacing(4),
      }}>
      <LayoutContainerHeader
        foodPlaceData={foodPlaceData}
        datePickerValue={value}
        datePickerSetValue={setValue}
      />
      <FilterTabs />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
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
            size="medium"
            sx={{
              backgroundColor: theme.palette.primary.light,
              color: theme.palette.primary.main,
            }}>
            {t('generateMenu')}
          </Button>
          <Button
            startIcon={<FilterAltIcon />}
            variant="contained"
            size="medium"
            sx={{
              backgroundColor: theme.palette.primary.light,
              color: theme.palette.primary.main,
            }}>
            {t('labelFilter')}
          </Button>
        </Box>
      </Box>
      <CardGrid />
    </Box>
  )
}
