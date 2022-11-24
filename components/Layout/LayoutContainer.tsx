import { useState } from 'react'
import { Box, useTheme } from '@mui/material'
import dayjs from 'dayjs'
import { FoodPlace } from '../../types/FoodPlace'
import { FoodPlaceMenu } from '../../types/FoodPlaceMenu'
import LayoutContainerHeader from './LayoutContainerHeader'

export interface LayoutContainerProps {
  foodPlaceMenu: FoodPlaceMenu
  foodPlaceData: FoodPlace
}

export default function LayoutContainer({ foodPlaceMenu, foodPlaceData }: LayoutContainerProps) {
  const today = new Date()

  const [value, setValue] = useState<dayjs.Dayjs | null>(dayjs(today))
  const theme = useTheme()
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
    </Box>
  )
}
