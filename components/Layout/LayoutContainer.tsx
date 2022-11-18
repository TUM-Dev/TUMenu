import { Box, useTheme } from '@mui/material'
import LayoutContainerHeader from './LayoutContainerHeader'

export default function LayoutContainer() {
  const theme = useTheme()
  return (
    <Box
      sx={{
        ml: theme.spacing(30),
        minHeight: '100%',
        padding: theme.spacing(4),
      }}>
      <LayoutContainerHeader />
    </Box>
  )
}
