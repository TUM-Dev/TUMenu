import { useContext } from 'react'
import { useTranslation } from 'next-i18next'
import { Box, useTheme, Button, Grid } from '@mui/material'
import Banner from '../../components/Banner'
import { getStaticPaths, getI18nProps } from '../../lib/getStatic'
import { FoodPlace } from '../../types/FoodPlace'
import NotFound from '../../components/NotFound'
import Sidebar from '../../components/Sidebar/Sidebar'
import SidebarContext from '../../components/SidebarContext'

interface HomeProps {
  foodPlaces: FoodPlace[]
}

export default function Home({ foodPlaces }: HomeProps) {
  const theme = useTheme()
  const { t } = useTranslation()
  const { triggerSidebarMobile, setTriggerSidebarMobile } = useContext(SidebarContext)

  return (
    <>
      <Banner />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            lg: `${theme.spacing(30)} calc(100% - ${theme.spacing(30)})`,
            xs: `100%`,
          },
        }}>
        <Sidebar foodPlaces={foodPlaces} />
        <Box sx={{ p: theme.spacing(4) }}>
          <Grid item lg={0} md={3} sm={4} xs={6} sx={{ display: { lg: 'none', xs: 'block' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
              <Button
                variant="contained"
                onClick={() => setTriggerSidebarMobile(!triggerSidebarMobile)}
                size="medium"
                sx={{
                  backgroundColor: theme.palette.primary.light,
                  color: theme.palette.primary.main,
                }}>
                {t('selectCanteen')}
              </Button>
            </Box>
          </Grid>
          <NotFound translationString="startBrowsing" imageSource="/start_browsing.svg" />
        </Box>
      </Box>
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
