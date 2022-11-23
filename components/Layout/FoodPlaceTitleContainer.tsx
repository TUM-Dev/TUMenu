import { Grid, Typography, useTheme, LinearProgress, Button } from '@mui/material'
import { LocationOn } from '@mui/icons-material'
import { useTranslation } from 'next-i18next'
import { FoodPlace } from '../../types/FoodPlace'

export interface FoodPlaceTitleContainerProps {
  foodPlaceData: FoodPlace
}

export default function FoodPlaceTitleContainer({ foodPlaceData }: FoodPlaceTitleContainerProps) {
  const { t } = useTranslation('common')
  const theme = useTheme()
  return (
    <Grid container rowSpacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" alignItems="center" spacing={1}>
          <Grid item xs={8}>
            <Typography variant="h3" sx={{ fontWeight: 600, textAlign: 'right' }}>
              {foodPlaceData.name}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <LocationOn
              sx={{
                fontSize: theme.spacing(6),
                color: theme.palette.secondary.dark,
                cursor: 'pointer',
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="center" alignItems="center" spacing={1}>
          <Grid item xs={3}>
            <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
              {t('queueStatus')}
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <LinearProgress
              color="success"
              sx={{ borderRadius: '12px', height: theme.spacing(2.75) }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={9}>
        <Grid container justifyContent="center" alignItems="center" spacing={1}>
          <Grid item xs={8}>
            <Typography variant="subtitle1" sx={{ textAlign: 'right' }}>
              {`${t('intlDateTime', {
                val: new Date(),
                formatParams: {
                  val: { weekday: 'long' },
                },
              })}`}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              size="medium"
              sx={{
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.main,
              }}>
              {t('openingHours')}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
