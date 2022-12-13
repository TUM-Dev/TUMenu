import { useTheme } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LinkComponent({
  children,
  skipLocaleHandling,
  setTriggerSidebarMobile,
  ...rest
}) {
  const theme = useTheme()
  const router = useRouter()
  const locale = rest.locale || router.query.locale || ''

  let href = rest.href || router.asPath
  if (href.indexOf('http') === 0) skipLocaleHandling = true
  if (locale && !skipLocaleHandling) {
    href = href ? `/${locale}${href}` : router.pathname.replace('[locale]', locale)
  }

  return (
    <Link href={href} legacyBehavior scroll={false}>
      <a
        {...rest}
        style={{ textDecoration: 'none', color: theme.palette.primary.main }}
        onClick={() => setTriggerSidebarMobile(false)}>
        {children}
      </a>
    </Link>
  )
}
