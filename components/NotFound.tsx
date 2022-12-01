import { Box, Typography, useTheme } from '@mui/material'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

interface NotFoundProps {
  height: number
}

export default function NotFound({ height }: NotFoundProps) {
  const theme = useTheme()
  const { t } = useTranslation('common')
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
        minHeight: height,
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Typography variant="h4" sx={{ color: theme.palette.primary.dark, fontWeight: 600 }}>
          {t('notFound')}
        </Typography>
        <Image
          src="/not_found.svg"
          quality={100}
          height={400}
          width={400}
          priority
          alt="Not Found"
        />
      </Box>
    </Box>
  )
}
