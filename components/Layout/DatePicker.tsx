import dayjs, { Dayjs } from 'dayjs'
import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { useTheme } from '@mui/material'

interface HeaderDatePickerProps {
  datePickerValue: dayjs.Dayjs | null
  datePickerSetValue: React.Dispatch<React.SetStateAction<dayjs.Dayjs | null>>
  minDate: dayjs.Dayjs
  maxDate: dayjs.Dayjs
}

function disableWeekends(date: Dayjs) {
  return date.get('day') === 0 || date.get('day') === 6
}

export default function HeaderDatePicker({
  datePickerValue,
  datePickerSetValue,
  minDate,
  maxDate,
}: HeaderDatePickerProps) {
  const theme = useTheme()

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        minDate={minDate}
        maxDate={maxDate}
        shouldDisableDate={disableWeekends}
        value={datePickerValue}
        onChange={(newValue) => {
          if (dayjs(newValue).isValid()) datePickerSetValue(newValue)
        }}
        renderInput={(params) => (
          <TextField
            sx={{
              backgroundColor: theme.palette.secondary.main,
            }}
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  )
}
