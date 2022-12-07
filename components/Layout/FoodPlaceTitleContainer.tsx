import dynamic from 'next/dynamic'
import { useState } from 'react'
import dayjs from 'dayjs'
import { Grid, Typography, useTheme, LinearProgress, Button, Box, Tooltip } from '@mui/material'
import { linearProgressClasses } from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles'
import { LocationOn } from '@mui/icons-material'
import { useTranslation } from 'next-i18next'
import { FoodPlace, daysArr, OpeningHoursType } from '../../types/FoodPlace'
import OpeningHours from './OpeningHours'
import { Queue } from '../../types/Queue'

const DynamicMap = dynamic(() => import('./Map'), {
  ssr: false,
})

export interface FoodPlaceTitleContainerProps {
  foodPlaceData: FoodPlace
  datePickerValue: dayjs.Dayjs | null
  queueData: Queue
}

export default function FoodPlaceTitleContainer({
  foodPlaceData,
  datePickerValue,
  queueData,
}: FoodPlaceTitleContainerProps) {
  const [open, setOpen] = useState<boolean>(false)
  const [mapIsOpen, setMapIsOpen] = useState(false)
  const theme = useTheme()
  const { t } = useTranslation('common')
  const weekend = datePickerValue?.get('day') === 6 || datePickerValue?.get('day') === 0

  const BorderLinearProgress = styled(LinearProgress)(() => ({
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.secondary.main,
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }))

  return (
    <>
      <Grid
        container
        rowSpacing={1}
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
              onClick={() => setMapIsOpen(true)}
              sx={{
                fontSize: theme.spacing(6),
                color: theme.palette.secondary.dark,
                cursor: 'pointer',
              }}
            />
          </Box>
        </Grid>
        {queueData !== null ? (
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
                <Tooltip
                  title={`${t('people')}: ${queueData.current}, ${t(
                    'percent',
                  )}: ${queueData.percent.toFixed(2)}`}
                  arrow
                  placement="bottom-end">
                  <BorderLinearProgress
                    variant="determinate"
                    value={queueData.percent}
                    sx={{
                      borderRadius: '12px',
                      height: theme.spacing(2.75),
                      backgroundColor: theme.palette.primary.light,
                    }}
                  />
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          ''
        )}
        <Grid item xs={9}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: theme.spacing(1),
            }}>
            <Typography variant="subtitle1" sx={{ textAlign: 'right' }}>
              {!weekend
                ? `${t('intlDateTimeOpen', {
                    val: datePickerValue,
                    formatParams: {
                      val: { weekday: 'long' },
                    },
                  })} ${
                    foodPlaceData.open_hours[
                      // eslint-disable-next-line no-unsafe-optional-chaining
                      `${daysArr[datePickerValue?.get('day')! - 1]}` as keyof OpeningHoursType
                    ].start
                  } - ${
                    foodPlaceData.open_hours[
                      // eslint-disable-next-line no-unsafe-optional-chaining
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
          </Box>
        </Grid>
      </Grid>
      <OpeningHours foodPlaceData={foodPlaceData} open={open} setOpen={setOpen} />
      <DynamicMap
        open={mapIsOpen}
        setOpen={setMapIsOpen}
        location={foodPlaceData.location}
        canteenName={foodPlaceData.name}
      />
    </>
  )
}
