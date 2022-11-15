import { createTheme, responsiveFontSizes, Theme, ThemeOptions, } from '@mui/material/styles'
import { Roboto } from '@next/font/google'

const fontFamily = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'] })
const fontFamilyName = fontFamily.style.fontFamily

export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#ffffff',
            light: "#24A0ED",
            dark: '#000000',
        },
        secondary: {
            main: '#D9D9D9',
            dark: '#1976D2',
        },
        background: {
            default: '#ffffff',
        },
    },
    components: {
        MuiLink: {
            defaultProps: {
                underline: 'none',
            },
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    lineHeight: 2,
                    borderWidth: 4,
                },
                textPrimary: {
                    color: '#ffffff',
                },
            },
        },
    },
    typography: {
        h1: { fontFamilyName },
        h2: { fontFamilyName },
        h3: { fontFamilyName },
        h4: { fontFamilyName },
        h5: { fontFamilyName },
        h6: { fontFamilyName },
        subtitle1: { fontFamilyName },
        subtitle2: { fontFamilyName },
        body1: {
            fontSize: '0.875rem',
            lineHeight: '1.43',
            letterSpacing: '0.01071em',
            fontFamilyName,
        },
        body2: { fontFamilyName },
        button: { fontFamilyName, textTransform: 'initial' },
    },
}
// https://material-ui.com/customization/default-theme/#default-theme
const theme: Theme = createTheme(themeOptions)
const materialTheme = responsiveFontSizes(theme)

export default materialTheme