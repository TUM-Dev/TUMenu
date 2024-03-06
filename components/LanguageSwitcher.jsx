import languageDetector from '../lib/languageDetector'
import { useRouter } from 'next/router'
import { Grid, Typography, useTheme } from '@mui/material'
import Link from 'next/link'
import ReactCountryFlag from 'react-country-flag'
import { useTranslation } from 'next-i18next'

const LanguageSwitchLink = ({ locale, ...rest }) => {
  const router = useRouter()
  const theme = useTheme()
  const { t } = useTranslation('common')

  const handleLanguageChange = (newLocale) => {
    router.push(router.pathname, router.asPath, { locale: newLocale });
    const event = new CustomEvent('languageChange', { detail: { locale: newLocale } });
    window.dispatchEvent(event);
  };

  let href = rest.href || router.asPath
  let pName = router.pathname
  Object.keys(router.query).forEach((k) => {
    if (k === 'locale') {
      pName = pName.replace(`[${k}]`, locale)
      return
    }
    pName = pName.replace(`[${k}]`, router.query[k])
  })
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName
  }

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        position: 'absolute',
        top: theme.spacing(2),
        right: { xs: 0, sm: theme.spacing(4) },
        width: theme.spacing(28),
      }}>
      <Grid item xs={8}>
        <Typography variant="subtitle1" sx={{ color: theme.palette.primary.main }}>
          {t('language')}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Link href={href} onClick={() => handleLanguageChange(locale)}>
          <button
            style={{
              fontSize: theme.spacing(3),
              backgroundColor: 'transparent',
              cursor: 'pointer',
              border: 'none',
            }}>
            {locale === 'de' ? (
              <ReactCountryFlag countryCode="DE" svg />
            ) : (
              <ReactCountryFlag countryCode="GB" svg />
            )}
          </button>
        </Link>
      </Grid>
    </Grid>
  )
}

export default LanguageSwitchLink
