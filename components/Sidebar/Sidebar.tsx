import { Box, useTheme, List } from '@mui/material'
import { SidebarEntry } from '../../types/SidebarEntry'
import SidebarSubmenu from './SidebarSubmenu'

const exampleFoodPlacesArray: SidebarEntry[] = [
  { city: 'Garching', foodPlaces: ['Mensa', 'StuCafe in der Mensa', 'IPP Bistro', 'FMI Bistro'] },
  { city: 'Munich', foodPlaces: ['Mensa', 'StuCafe in der Mensa', 'IPP Bistro', 'FMI Bistro'] },
  { city: 'Straubing', foodPlaces: ['Mensa', 'StuCafe in der Mensa', 'IPP Bistro', 'FMI Bistro'] },
  {
    city: 'Weihenstephan',
    foodPlaces: ['Mensa', 'StuCafe in der Mensa', 'IPP Bistro', 'FMI Bistro'],
  },
  { city: 'Rosenheim', foodPlaces: ['Mensa', 'StuCafe in der Mensa', 'IPP Bistro', 'FMI Bistro'] },
]

export default function Sidebar() {
  const theme = useTheme()
  return (
    <Box
      sx={{
        position: 'absolute' as 'absolute',
        height: '100%',
        width: theme.spacing(30),
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        bgcolor: theme.palette.primary.light,
        color: theme.palette.primary.main,
      }}>
      <List component="nav">
        {exampleFoodPlacesArray.map((foodPlace) => (
          <SidebarSubmenu foodPlace={foodPlace} key={foodPlace.city} />
        ))}
      </List>
    </Box>
  )
}
