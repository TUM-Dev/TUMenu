import { Typography, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import { useTranslation } from 'next-i18next'
import Image from 'next/legacy/image'

export default function Banner() {
  const theme = useTheme()
  const { t } = useTranslation('common')

  return (
    <Box
      sx={{
        position: 'relative' as 'relative',
        width: '100%',
        height: theme.spacing(44),
        zIndex: theme.zIndex.drawer + 1,
      }}>
      <Image
        src="/MGA-8.jpg"
        objectFit="cover"
        layout="fill"
        quality={100}
        objectPosition="bottom"
        style={{ filter: 'brightness(60%)' }}
        priority
      />
      <Box
        sx={{
          position: 'absolute' as 'absolute',
          left: theme.spacing(7),
          top: theme.spacing(7),
          color: theme.palette.primary.main,
          maxWidth: theme.spacing(80),
        }}>
        <Typography variant="h2">TUM-HUNGER</Typography>
        <Typography variant="h5" sx={{ paddingLeft: theme.spacing(1) }}>
          {t('subtitleBanner')}
        </Typography>
      </Box>
    </Box>
  )
}
