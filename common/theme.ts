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
            light: '#333333'
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
        MuiTab: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        backgroundColor: "#fff !important",
                    },
                    fontSize: '1.2rem',
                    color: '#24a0ed !important'
                }
            }
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: '#24a0ed'
                }
            }
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

                contained: {
                    "&:hover": {
                        backgroundColor: '#1976D2'
                    },
                    borderRadius: '12px'
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
    // use this approach for any spacing (padding,gap,width,height,) when you want to use rem(px) as measurment
    // spacing(1) means 0.5 rem = 8px
    spacing: (factor: number) => `${0.5 * factor}rem`,
}
// https://material-ui.com/customization/default-theme/#default-theme
const theme: Theme = createTheme(themeOptions)
const materialTheme = responsiveFontSizes(theme)

export default materialTheme