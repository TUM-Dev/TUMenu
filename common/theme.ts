import { createTheme, responsiveFontSizes, Theme, ThemeOptions, } from '@mui/material/styles'
import { Roboto } from '@next/font/google'

const fontFamily = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'] })
const fontFamilyName = fontFamily.style.fontFamily

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: true;
        xm: true;
        sm: true;
        sd: true;
        md: true;
        lg: true;
        xl: true;
    }
}

export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#ffffff',
            light: "#3070B3",
            dark: '#000000',
        },
        secondary: {
            main: '#D9D9D9',
            dark: '#14519A',
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
                    "&.Mui-disabled": {
                        color: "#83a9d1 !important",
                        cursor: 'not-allowed',
                        pointerEvents: 'all !important'
                    },
                    fontSize: '1.2rem',
                    color: '#3070B3 !important'
                }
            }
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: '#3070B3'
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
                    "&.Mui-disabled": {
                        backgroundColor: "#598dc2 !important",
                        cursor: 'not-allowed',
                        pointerEvents: 'all !important',
                        color: '#fff'
                    },
                },
                textPrimary: {
                    color: '#ffffff',
                },
                contained: {
                    "&:hover": {
                        backgroundColor: '#14519A'
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
    breakpoints: {
        values: {
            xs: 0,
            xm: 450,
            sm: 600,
            sd: 800,
            md: 900,
            lg: 1100,
            xl: 1536,
        },
    },
}

const theme: Theme = createTheme(themeOptions)
const materialTheme = responsiveFontSizes(theme)

export default materialTheme