import { useState } from 'react'
import dynamic from 'next/dynamic'
import dayjs from 'dayjs'
import Banner from '../../components/Banner'
import LayoutContainer from '../../components/Layout/LayoutContainer'
import { getI18nPaths, getI18nProps } from '../../lib/getStatic'
import { FoodPlace, daysArr, OpeningHoursType } from '../../types/FoodPlace'
import getPathIds from '../../lib/getPathIds'
import { Context } from '../../types/Context'
import getFoodPlaces from '../../lib/getFoodPlaces'
import getFoodPlace from '../../lib/getFoodPlace'
import { FoodPlaceMenu } from '../../types/FoodPlaceMenu'
import getLabels from '../../lib/getLabels'
import { Labels } from '../../types/Labels'
import getQueueStatus from '../../lib/getQueueStatus'
import { Queue } from '../../types/Queue'

// important for the ResizeObserver api
const DynamicSidebar = dynamic(() => import('../../components/Sidebar/Sidebar'), {
  ssr: false,
})

interface CanteenPageProps {
  foodPlaces: FoodPlace[]
  foodPlaceMenu: FoodPlaceMenu
  labels: Labels[]
  queueData: Queue
}

export default function CanteenPage({
  foodPlaces,
  foodPlaceMenu,
  labels,
  queueData,
}: CanteenPageProps) {
  const [height, setHeight] = useState(0)
  const [triggerSidebarMobile, setTriggerSidebarMobile] = useState(false)
  const foodPlaceData = foodPlaces.find(
    (foodPlace) => foodPlace.canteen_id === foodPlaceMenu.canteen_id,
  )

  return (
    <>
      <Banner />
      <DynamicSidebar
        foodPlaces={foodPlaces}
        height={height}
        setHeight={setHeight}
        triggerSidebarMobile={triggerSidebarMobile}
        setTriggerSidebarMobile={setTriggerSidebarMobile}
      />
      {foodPlaceData && (
        <LayoutContainer
          foodPlaceMenu={foodPlaceMenu}
          foodPlaceData={foodPlaceData}
          labels={labels}
          height={height}
          queueData={queueData}
          triggerSidebarMobile={triggerSidebarMobile}
          setTriggerSidebarMobile={setTriggerSidebarMobile}
        />
      )}
    </>
  )
}

const isCanteenOpen = (foodPlaces: FoodPlace[], id: string) => {
  const now = dayjs()
  if (now.get('day') === 6 || now.get('day') === 0) return false
  const foodPlace = foodPlaces.find((canteen) => canteen.canteen_id === id)
  const foodPlaceOpeningHoursNow =
    // eslint-disable-next-line no-unsafe-optional-chaining
    foodPlace?.open_hours[`${daysArr[now?.get('day')! - 1]}` as keyof OpeningHoursType]
  const foodPlaceOpens = foodPlaceOpeningHoursNow?.start
  const foodPlaceCloses = foodPlaceOpeningHoursNow?.end
  if (now.format('HH:mm') >= foodPlaceOpens! && now.format('HH:mm') < foodPlaceCloses!) {
    return true
  }
  return false
}

export const getStaticProps = async (ctx: Context) => {
  const { id, locale } = ctx.params
  const foodPlaces = await getFoodPlaces()
  const foodPlaceMenu = await getFoodPlace(locale, id)
  const labels = await getLabels()
  let queueData = null
  if (isCanteenOpen(foodPlaces, id)) {
    queueData = await getQueueStatus(id)
    queueData = queueData.percent === -1 ? null : queueData
  }
  return {
    props: {
      ...(await getI18nProps(ctx, ['common'])),
      foodPlaces,
      foodPlaceMenu,
      labels,
      queueData,
    },
  }
}

export const getStaticPaths = async () => {
  let canteenIds = await getPathIds()
  canteenIds = canteenIds.filter((canteen) => canteen.id !== 'stucafe-weihenstephan-maximus')
  canteenIds = canteenIds.filter((canteen) => canteen.id !== 'stubistro-martinsried')
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
