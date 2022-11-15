import { useTranslation } from 'next-i18next'
import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

export default function Home() {
  const { t } = useTranslation('common')
  const theme = useTheme()

  return <Typography sx={{ color: theme.palette.primary.light }}>{t('title')}</Typography>
}

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }
