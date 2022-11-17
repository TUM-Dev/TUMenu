import { Box, useTheme, List } from '@mui/material'
import { FoodPlace } from '../../types/FoodPlace'
import { SidebarEntry } from '../../types/SidebarEntry'
import SidebarSubmenu from './SidebarSubmenu'

interface SidebarProps {
  foodPlaces: FoodPlace[]
}

export default function Sidebar({ foodPlaces }: SidebarProps) {
  const foodPlacesSorted: SidebarEntry[] = [
    { city: 'Garching', foodPlaces: [] },
    {
      city: 'Munich',
      foodPlaces: [],
    },
    { city: 'Straubing', foodPlaces: [] },
    {
      city: 'Weihenstephan',
      foodPlaces: [],
    },
    { city: 'Rosenheim', foodPlaces: [] },
  ]

  foodPlaces.forEach((foodPlace) => {
    const { address } = foodPlace.location
    if (address.includes('Garching'))
      foodPlacesSorted.find((item) => item.city === 'Garching')?.foodPlaces.push(foodPlace)
    else if (address.includes('München') || address.includes('Plategg'))
      foodPlacesSorted.find((item) => item.city === 'Munich')?.foodPlaces.push(foodPlace)
    else if (address.includes('Freising'))
      foodPlacesSorted.find((item) => item.city === 'Weihenstephan')?.foodPlaces.push(foodPlace)
    else if (address.includes('Rosenheim'))
      foodPlacesSorted.find((item) => item.city === 'Rosenheim')?.foodPlaces.push(foodPlace)
    else if (address.includes('Straubing'))
      foodPlacesSorted.find((item) => item.city === 'Straubing')?.foodPlaces.push(foodPlace)
  })
  const theme = useTheme()
  return (
    <Box
      sx={{
        position: 'absolute' as 'absolute',
        minHeight: '100%',
        width: theme.spacing(30),
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        bgcolor: theme.palette.primary.light,
        color: theme.palette.primary.main,
        borderTopRightRadius: '12px',
        borderBottomRightRadius: '12px',
      }}>
      <List component="nav">
        {foodPlacesSorted.map((foodPlace) => (
          <SidebarSubmenu foodPlace={foodPlace} key={foodPlace.city} />
        ))}
      </List>
    </Box>
  )
}
