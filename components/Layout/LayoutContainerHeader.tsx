import { Grid } from '@mui/material'
import dayjs from 'dayjs'
import { FoodPlace } from '../../types/FoodPlace'
import FoodPlaceTitleContainer from './FoodPlaceTitleContainer'
import HeaderDatePicker from './DatePicker'

export interface LayoutHeaderProps {
  foodPlaceData: FoodPlace
  datePickerValue: dayjs.Dayjs | null
  datePickerSetValue: React.Dispatch<React.SetStateAction<dayjs.Dayjs | null>>
}

export default function LayoutContainerHeader({
  foodPlaceData,
  datePickerValue,
  datePickerSetValue,
}: LayoutHeaderProps) {
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item xs={9}>
        <FoodPlaceTitleContainer foodPlaceData={foodPlaceData} datePickerValue={datePickerValue} />
      </Grid>
      <Grid item xs={3}>
        <HeaderDatePicker
          datePickerValue={datePickerValue}
          datePickerSetValue={datePickerSetValue}
        />
      </Grid>
    </Grid>
  )
}
