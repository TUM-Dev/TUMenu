import type { AppProps } from 'next/app'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from '@mui/material/styles'
import { useState, useMemo } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import SidebarContext from '../components/SidebarContext'
import theme from '../common/theme'
import createEmotionCache from '../common/createEmotionCache'
import '../styles/global.css'

interface ExtendedAppProps extends AppProps {
  // eslint-disable-next-line react/require-default-props
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: ExtendedAppProps) {
  const [triggerSidebarMobile, setTriggerSidebarMobile] = useState(false)

  const contextValue = useMemo(
    () => ({
      triggerSidebarMobile,
      setTriggerSidebarMobile,
    }),
    [triggerSidebarMobile, setTriggerSidebarMobile],
  )

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href={`${assetPrefix}/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${assetPrefix}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${assetPrefix}/favicon-16x16.png`} />
        <link rel="manifest" href={`${assetPrefix}/site.webmanifest`} />
        <link rel="mask-icon" href={`${assetPrefix}/safari-pinned-tab.svg`} color="#3070b3" />
        <meta name="msapplication-TileColor" content="#3070b3" />
        <meta name="theme-color" content="#ffffff" />
        <meta http-equiv="Permissions-Policy" content="interest-cohort=()" />
      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <SidebarContext.Provider value={contextValue}>
            <CssBaseline />
            <Component {...pageProps} />
          </SidebarContext.Provider>
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}

export default appWithTranslation(MyApp)
