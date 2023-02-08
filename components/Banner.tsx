import { Typography, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import { useTranslation } from 'next-i18next'
import Image from 'next/legacy/image'
import { useRouter } from 'next/router'
import LanguageSwitchLink from './LanguageSwitcher'
import nextI18nextConfig from '../next-i18next.config'

const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Banner() {
  const router = useRouter()
  const theme = useTheme()
  const { t } = useTranslation('common')
  const currentLocale = router.query.locale || nextI18nextConfig.i18n.defaultLocale

  return (
    <Box
      sx={{
        position: 'relative' as 'relative',
        width: '100%',
        height: theme.spacing(44),
        zIndex: theme.zIndex.drawer + 1,
      }}>
      <Image
        src={`${assetPrefix}/MGA-8.jpg`}
        objectFit="cover"
        layout="fill"
        quality={100}
        objectPosition="bottom"
        style={{ filter: 'brightness(60%)' }}
        priority
        alt="Mensa Garching"
      />
      <Box
        sx={{
          position: 'absolute' as 'absolute',
          left: { sm: theme.spacing(7), xs: '50%' },
          top: { sm: theme.spacing(7), xs: '50%' },
          color: theme.palette.primary.main,
          maxWidth: theme.spacing(80),
          width: { xs: '90%', sm: 'unset' },
          textAlign: { sm: 'left', xs: 'center' },
          transform: { xs: 'translate(-50%,-50%)', sm: 'unset' },
        }}>
        <Typography variant="h2" sx={{ color: theme.palette.primary.light, fontWeight: 600 }}>
          TUM<span style={{ color: theme.palette.primary.main }}>enu</span>
        </Typography>
        <Typography variant="h5" sx={{ paddingLeft: theme.spacing(1) }}>
          {t('subtitleBanner')}
        </Typography>
      </Box>
      <Typography
        variant="body2"
        sx={{
          position: 'absolute' as 'absolute',
          right: '5px',
          bottom: '5px',
          color: theme.palette.primary.main,
          fontSize: theme.spacing(0.85),
        }}>
        Copyright: https://www.meck-architekten.de/projekte/id/2019-mensa-campus-garching/
      </Typography>
      {nextI18nextConfig.i18n.locales.map((locale) => {
        if (locale === currentLocale) return null
        return <LanguageSwitchLink locale={locale} key={locale} />
      })}
    </Box>
  )
}
