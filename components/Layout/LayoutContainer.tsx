import { Box, useTheme } from '@mui/material'
import { FoodPlace } from '../../types/FoodPlace'
import { FoodPlaceMenu } from '../../types/FoodPlaceMenu'
import LayoutContainerHeader from './LayoutContainerHeader'

export interface LayoutContainerProps {
  foodPlaceMenu: FoodPlaceMenu
  foodPlaceData: FoodPlace
}

export default function LayoutContainer({ foodPlaceMenu, foodPlaceData }: LayoutContainerProps) {
  console.log(foodPlaceMenu)
  const theme = useTheme()
  return (
    <Box
      sx={{
        ml: theme.spacing(30),
        minHeight: '100%',
        padding: theme.spacing(4),
      }}>
      <LayoutContainerHeader foodPlaceData={foodPlaceData} />
    </Box>
  )
}
