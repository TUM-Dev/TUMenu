import { useState } from 'react'
import dynamic from 'next/dynamic'
import Banner from '../../components/Banner'
import { getStaticPaths, getI18nProps } from '../../lib/getStatic'
import { FoodPlace } from '../../types/FoodPlace'

const DynamicSidebar = dynamic(() => import('../../components/Sidebar/Sidebar'), {
  ssr: false,
})

interface HomeProps {
  foodPlaces: FoodPlace[]
}

console.log('here')

export default function Home({ foodPlaces }: HomeProps) {
  const [height, setHeight] = useState(0)

  return (
    <>
      <Banner />
      <DynamicSidebar foodPlaces={foodPlaces} height={height} setHeight={setHeight} />
      <h1>Please choose a foodPlace to start browsing</h1>
    </>
  )
}

export const getStaticProps = async (ctx: unknown) => {
  const foodPlaces = await (
    await fetch('https://tum-dev.github.io/eat-api/enums/canteens.json')
  ).json()

  return {
    props: {
      ...(await getI18nProps(ctx, ['common'])),
      foodPlaces,
    },
  }
}
export { getStaticPaths }
