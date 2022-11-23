export type Context = {
    params: { locale: string, id: string },
    locales: string[] | undefined,
    locale: string | undefined,
    defaultLocale: string | undefined
} 