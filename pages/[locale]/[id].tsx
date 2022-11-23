import Banner from '../../components/Banner'
import Sidebar from '../../components/Sidebar/Sidebar'
import LayoutContainer from '../../components/Layout/LayoutContainer'
import { getI18nPaths, getI18nProps } from '../../lib/getStatic'
import { FoodPlace } from '../../types/FoodPlace'
import getPathIds from '../../lib/getPathIds'
import { Context } from '../../types/Context'
import getFoodPlaces from '../../lib/getFoodPlaces'
import getFoodPlace from '../../lib/getFoodPlace'
import { FoodPlaceMenu } from '../../types/FoodPlaceMenu'

interface CanteenPageProps {
  foodPlaces: FoodPlace[]
  foodPlaceMenu: FoodPlaceMenu
}

export default function CanteenPage({ foodPlaces, foodPlaceMenu }: CanteenPageProps) {
  const foodPlaceData = foodPlaces.find(
    (foodPlace) => foodPlace.canteen_id === foodPlaceMenu.canteen_id,
  )

  return (
    <>
      <Banner />
      <Sidebar foodPlaces={foodPlaces} />
      {foodPlaceData && (
        <LayoutContainer foodPlaceMenu={foodPlaceMenu} foodPlaceData={foodPlaceData} />
      )}
    </>
  )
}

export const getStaticProps = async (ctx: Context) => {
  const { id, locale } = ctx.params
  const foodPlaces = await getFoodPlaces()
  const foodPlaceMenu = await getFoodPlace(locale, id)
  return {
    props: {
      ...(await getI18nProps(ctx, ['common'])),
      foodPlaces,
      foodPlaceMenu,
    },
  }
}

export const getStaticPaths = async () => {
  const canteenIds = await getPathIds()
  const i18Paths = getI18nPaths()
  const paths: { params: { locale: string; id: string } }[] = []
  i18Paths.forEach((locale) =>
    canteenIds.forEach((canteen) =>
      paths.push({ params: { locale: locale.params.locale, id: canteen.id } }),
    ),
  )
  return {
    fallback: false,
    paths,
  }
}
