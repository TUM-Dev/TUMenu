import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

interface NotFoundProps {
  translationString: string
  imageSource: string
}

export default function NotFound({ imageSource, translationString }: NotFoundProps) {
  const theme = useTheme()
  const { t } = useTranslation('common')
  const matches = useMediaQuery('(min-width:37.5em)')
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        columnGap: theme.spacing(4),
        rowGap: theme.spacing(4),
        flexWrap: 'wrap',
        my: theme.spacing(4),
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: theme.spacing(2),
        }}>
        <Typography variant="h4" sx={{ color: theme.palette.primary.dark, fontWeight: 600 }}>
          {t(translationString)}
        </Typography>
        <Image
          src={imageSource}
          quality={100}
          height={matches ? 400 : 300}
          width={matches ? 400 : 300}
          priority
          alt="Not Found"
        />
      </Box>
    </Box>
  )
}
