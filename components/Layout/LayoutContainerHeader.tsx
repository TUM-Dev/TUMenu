import { Grid } from '@mui/material'
import dayjs from 'dayjs'
import { FoodPlace } from '../../types/FoodPlace'
import { Queue } from '../../types/Queue'
import HeaderDatePicker from './DatePicker'
import FoodPlaceTitleContainer from './FoodPlaceTitleContainer'

export interface LayoutHeaderProps {
  foodPlaceData: FoodPlace
  datePickerValue: dayjs.Dayjs | null
  datePickerSetValue: React.Dispatch<React.SetStateAction<dayjs.Dayjs | null>>
  minDate: dayjs.Dayjs
  maxDate: dayjs.Dayjs
  queueData: Queue

}

export default function LayoutContainerHeader({
  foodPlaceData,
  datePickerValue,
  datePickerSetValue,
  minDate,
  maxDate,
  queueData
}: LayoutHeaderProps) {
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item xs={9}>
        <FoodPlaceTitleContainer foodPlaceData={foodPlaceData} datePickerValue={datePickerValue} queueData={queueData} />
      </Grid>
      <Grid item xs={3}>
        <HeaderDatePicker
          datePickerValue={datePickerValue}
          datePickerSetValue={datePickerSetValue}
          minDate={minDate}
          maxDate={maxDate}
        />
      </Grid>
    </Grid>
  )
}
