import React, { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded'
import { useTranslation } from 'next-i18next'
import { Box, useTheme, List, Button, Typography } from '@mui/material'
import MapIcon from '@mui/icons-material/Map'
import { FoodPlace } from '../../types/FoodPlace'
import { SidebarEntry } from '../../types/SidebarEntry'
import SidebarSubmenu from './SidebarSubmenu'

interface SidebarProps {
  foodPlaces: FoodPlace[]
  height: number
  setHeight: React.Dispatch<React.SetStateAction<number>>
  triggerSidebarMobile: boolean
  setTriggerSidebarMobile: React.Dispatch<React.SetStateAction<boolean>>
}

const DynamicMap = dynamic(() => import('../Layout/Map'), {
  ssr: false,
})

export default function Sidebar({
  foodPlaces,
  height,
  setHeight,
  triggerSidebarMobile,
  setTriggerSidebarMobile,
}: SidebarProps) {
  // useRef allows us to "store" the div in a constant,
  // and to access it via observedDiv.current
  const observedDiv = useRef<HTMLDivElement>(null)
  const [openMap, setOpenMap] = useState<boolean>(false)

  const { t } = useTranslation('common')

  // we also instantiate the resizeObserver and we pass
  const handleElementResized = () => {
    if (observedDiv !== null && observedDiv.current) {
      if (observedDiv.current.offsetHeight !== height) {
        setHeight(observedDiv.current.offsetHeight)
      }
    }
  }
  // the event handler to the constructor
  const resizeObserver = new ResizeObserver(handleElementResized)

  useEffect(() => {
    // the code in useEffect will be executed when the component
    // has mounted, so we are certain observedDiv.current will contain
    // the div we want to observe
    resizeObserver.observe(observedDiv.current!)
    return function cleanup() {
      resizeObserver.disconnect()
    }
  })

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

  const handleOpenMap = () => {
    setOpenMap(true)
    setTriggerSidebarMobile(false)
  }
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
    <>
      <Box
        sx={{
          display: { lg: 'flex', xs: triggerSidebarMobile ? 'flex' : 'none' },
          position: 'absolute' as 'absolute',
          minHeight: '100%',
          height: 'auto',
          width: theme.spacing(30),
          flexDirection: 'column',
          bgcolor: theme.palette.primary.light,
          color: theme.palette.primary.main,
          borderTopRightRadius: '12px',
          borderBottomRightRadius: '12px',
          zIndex: 9999,
        }}
        ref={observedDiv}>
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
            <SidebarSubmenu foodPlace={foodPlace} key={foodPlace.city} setTriggerSidebarMobile={setTriggerSidebarMobile} />
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
