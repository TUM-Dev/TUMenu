import React from 'react'
import { Dialog, Typography, useTheme, Box } from '@mui/material'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L, { LatLngExpression } from 'leaflet'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { MensaLocation } from '../../types/FoodPlace'
import 'leaflet/dist/leaflet.css'

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
})

interface MensaMapProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  location: MensaLocation
  canteenName: string
}

export default function MensaMap({ open, setOpen, location, canteenName }: MensaMapProps) {
  const coordinates: LatLngExpression = [location.latitude, location.longitude]
  const theme = useTheme()

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      disableScrollLock
      PaperProps={{
        style: { borderRadius: '12px' },
      }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          backgroundColor: theme.palette.primary.main,
          height: theme.spacing(3),
          pt: theme.spacing(0.5),
          px: theme.spacing(0.5),
        }}>
        <CancelRoundedIcon
          fontSize="small"
          sx={{ color: theme.palette.primary.dark, cursor: 'pointer' }}
          onClick={() => setOpen(false)}
        />
      </Box>
      <MapContainer center={coordinates} zoom={15} style={{ width: 600, height: 500 }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates}>
          <Popup>
            <a
              href={`https://maps.google.com/?q=${location.latitude},${location.longitude}`}
              target="_blank"
              style={{ fontWeight: 600, color: theme.palette.primary.light }}
              rel="noreferrer">
              {canteenName}
            </a>
            <Typography variant="body2" sx={{ margin: '0 !important' }}>
              {location.address}
            </Typography>
          </Popup>
        </Marker>
      </MapContainer>
    </Dialog>
  )
}
