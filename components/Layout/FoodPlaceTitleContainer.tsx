import { useState } from 'react'
import dayjs from 'dayjs'
import { Grid, Typography, useTheme, LinearProgress, Button, Box } from '@mui/material'
import { LocationOn } from '@mui/icons-material'
import { useTranslation } from 'next-i18next'
import { FoodPlace, daysArr, OpeningHoursType } from '../../types/FoodPlace'
import OpeningHours from './OpeningHours'

export interface FoodPlaceTitleContainerProps {
  foodPlaceData: FoodPlace
  datePickerValue: dayjs.Dayjs | null
}

export default function FoodPlaceTitleContainer({
  foodPlaceData,
  datePickerValue,
}: FoodPlaceTitleContainerProps) {
  const [open, setOpen] = useState<boolean>(false)
  const { t } = useTranslation('common')
  const theme = useTheme()
  const weekend = datePickerValue?.get('day') === 6 || datePickerValue?.get('day') === 0
  return (
    <>
      <Grid
        container
        rowSpacing={2}
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
        sx={{ width: '100%', position: 'relative' as 'relative' }}>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 600, textAlign: 'right' }}>
              {foodPlaceData.name}
            </Typography>
            <LocationOn
              sx={{
                fontSize: theme.spacing(6),
                color: theme.palette.secondary.dark,
                cursor: 'pointer',
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={1}
            flexDirection="row">
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
                {!weekend
                  ? `${t('intlDateTimeOpen', {
                      val: datePickerValue,
                      formatParams: {
                        val: { weekday: 'long' },
                      },
                    })} ${
                      foodPlaceData.open_hours[
                        `${daysArr[datePickerValue?.get('day')! - 1]}` as keyof OpeningHoursType
                      ].start
                    } - ${
                      foodPlaceData.open_hours[
                        `${daysArr[datePickerValue?.get('day')! - 1]}` as keyof OpeningHoursType
                      ].end
                    }`
                  : t('intlDateTimeClosed', {
                      val: datePickerValue,
                      formatParams: {
                        val: { weekday: 'long' },
                      },
                    })}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Button
                onClick={() => setOpen(true)}
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
      <OpeningHours foodPlaceData={foodPlaceData} open={open} setOpen={setOpen} />
    </>
  )
}
