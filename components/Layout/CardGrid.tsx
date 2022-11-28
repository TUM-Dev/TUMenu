import { Grid, useTheme } from '@mui/material'
import DishCard from './DishCard'

export default function CardGrid() {
  const theme = useTheme()
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      spacing={2}
      sx={{ my: theme.spacing(3) }}>
      <Grid item xs={12} lg={4}>
        <DishCard />
      </Grid>
      <Grid item xs={12} lg={4}>
        <DishCard />
      </Grid>
      <Grid item xs={12} lg={4}>
        <DishCard />
      </Grid>
    </Grid>
  )
}
