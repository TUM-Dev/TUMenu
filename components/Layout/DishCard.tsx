import { Box, Typography, Grid, useTheme } from '@mui/material'

import Label from '../Label'

export default function DishCard() {
  const theme = useTheme()
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.main,
      }}>
      <Typography variant="h5">Dish Name</Typography>
      <Grid container alignItems="center" justifyContent="center" spacing={1}>
        <Label bgColor="#240aed" text="Vegetarianisch" />
        <Label bgColor="#240aed" text="Vegetarianisch" />
        <Label bgColor="#240aed" text="Vegetarianisch" />
      </Grid>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          alignSelf: 'end',
        }}>
        <Typography variant="subtitle1">Price:</Typography>
        <Typography variant="subtitle1">$20.00</Typography>
      </Box>
    </Box>
  )
}
