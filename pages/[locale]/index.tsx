// import { useTranslation } from 'next-i18next'
import Banner from '../../components/Banner'
import Sidebar from '../../components/Sidebar/Sidebar'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

export default function Home() {
  // const { t } = useTranslation('common')

  return (
    <>
      <Banner />
      <Sidebar />
    </>
  )
}

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }
