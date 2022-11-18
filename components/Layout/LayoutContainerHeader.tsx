import { Grid, Typography } from '@mui/material'
import FoodPlaceTitleContainer from './FoodPlaceTitleContainer'

export default function LayoutContainerHeader() {
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item xs={8}>
        <FoodPlaceTitleContainer />
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h2">Some Item</Typography>
      </Grid>
    </Grid>
  )
}
