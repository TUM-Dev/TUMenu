import { useTheme } from '@mui/material'
import { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SidebarContext from './SidebarContext'

export default function LinkComponent({ children, skipLocaleHandling, ...rest }) {
  const { setTriggerSidebarMobile } = useContext(SidebarContext)
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
