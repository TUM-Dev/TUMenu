import { Grid, Typography } from '@mui/material'
import { FoodPlace } from '../../types/FoodPlace'
import FoodPlaceTitleContainer from './FoodPlaceTitleContainer'

export interface LayoutHeaderProps {
  foodPlaceData: FoodPlace
}

export default function LayoutContainerHeader({ foodPlaceData }: LayoutHeaderProps) {
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item xs={8}>
        <FoodPlaceTitleContainer foodPlaceData={foodPlaceData} />
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h2">Some Item</Typography>
      </Grid>
    </Grid>
  )
}
