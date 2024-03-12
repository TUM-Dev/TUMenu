import React, { useState, useContext } from 'react'
import dynamic from 'next/dynamic'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded'
import { useTranslation } from 'next-i18next'
import { Box, useTheme, List, Button, Typography } from '@mui/material'
import MapIcon from '@mui/icons-material/Map'
import { FoodPlace } from '../../types/FoodPlace'
import { SidebarEntry } from '../../types/SidebarEntry'
import SidebarSubmenu from './SidebarSubmenu'
import SidebarContext from '../SidebarContext'

interface SidebarProps {
  foodPlaces: FoodPlace[]
}

const DynamicMap = dynamic(() => import('../Layout/Map'), {
  ssr: false,
})

export default function Sidebar({ foodPlaces }: SidebarProps) {
  const [openMap, setOpenMap] = useState<boolean>(false)
  const { triggerSidebarMobile, setTriggerSidebarMobile } = useContext(SidebarContext)

  const { t } = useTranslation('common')

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
    { city: 'Heilbronn', foodPlaces: [] },
  ]

  const handleOpenMap = () => {
    setOpenMap(true)
    setTriggerSidebarMobile(false)
  }
  foodPlaces.forEach((foodPlace) => {
    const { address } = foodPlace.location
    if (address.includes('Garching'))
      foodPlacesSorted.find((item) => item.city === 'Garching')?.foodPlaces.push(foodPlace)
    else if (
      address.includes('München') ||
      address.includes('Planegg') ||
      address.includes('Planegg-Martinsried')
    )
      foodPlacesSorted.find((item) => item.city === 'Munich')?.foodPlaces.push(foodPlace)
    else if (address.includes('Freising'))
      foodPlacesSorted.find((item) => item.city === 'Weihenstephan')?.foodPlaces.push(foodPlace)
    else if (address.includes('Rosenheim'))
      foodPlacesSorted.find((item) => item.city === 'Rosenheim')?.foodPlaces.push(foodPlace)
    else if (address.includes('Straubing'))
      foodPlacesSorted.find((item) => item.city === 'Straubing')?.foodPlaces.push(foodPlace)
    else if (address.includes('Heilbronn'))
      foodPlacesSorted.find((item) => item.city === 'Heilbronn')?.foodPlaces.push(foodPlace)
  })
  const theme = useTheme()
  return (
    <>
      <Box
        sx={{
          display: { lg: 'flex', xs: triggerSidebarMobile ? 'flex' : 'none' },
          position: { lg: 'relative' as 'relative', xs: 'absolute' as 'absolute' },
          minHeight: { lg: 'auto', xs: '100%' },
          width: theme.spacing(30),
          flexDirection: 'column',
          bgcolor: theme.palette.primary.light,
          color: theme.palette.primary.main,
          borderBottomRightRadius: '12px',
          zIndex: 9999,
          backgroundColor: theme.palette.primary.light,
        }}>
        <Box
          sx={{
            display: { lg: 'none', xs: 'flex' },
            justifyContent: 'flex-end',
            backgroundColor: theme.palette.primary.light,
            height: theme.spacing(3),
            pt: theme.spacing(0.5),
            px: theme.spacing(0.5),
          }}>
          <CancelRoundedIcon
            fontSize="small"
            sx={{ color: theme.palette.primary.main, cursor: 'pointer' }}
            onClick={() => setTriggerSidebarMobile(false)}
          />
        </Box>
        <Button
          onClick={handleOpenMap}
          variant="text"
          endIcon={<MapIcon />}
          sx={{ justifyContent: 'flex-start', pl: theme.spacing(2) }}>
          <Typography variant="h6">{t('showAllCanteens')}</Typography>
        </Button>
        <List component="nav">
          {foodPlacesSorted.map((foodPlace) => (
            <SidebarSubmenu foodPlace={foodPlace} key={foodPlace.city} />
          ))}
        </List>
      </Box>
      <DynamicMap
        open={openMap}
        setOpen={setOpenMap}
        foodPlaces={foodPlaces}
        mapOpenCoordinates={[48.132264, 11.57743]}
        zoom={11}
      />
    </>
  )
}
