import { useTranslation } from 'next-i18next'
import { Typography } from '@mui/material'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

export default function Home() {
  const { t } = useTranslation('common')

  return <Typography>{t('title')}</Typography>
}

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }
