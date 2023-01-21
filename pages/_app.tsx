import type { AppProps } from 'next/app'
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
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <SidebarContext.Provider value={contextValue}>
          <CssBaseline />
          <Component {...pageProps} />
        </SidebarContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default appWithTranslation(MyApp)
