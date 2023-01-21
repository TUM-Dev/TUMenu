import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from '../common/theme'
import createEmotionCache from '../common/createEmotionCache'
import '../styles/global.css'

interface ExtendedAppProps extends AppProps {
  // eslint-disable-next-line react/require-default-props
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: ExtendedAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default appWithTranslation(MyApp)
