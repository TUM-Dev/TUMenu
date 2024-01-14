import React, {useEffect, useState} from 'react';
import dayjs, { Dayjs } from 'dayjs'
import 'dayjs/locale/de' // import German locale
import 'dayjs/locale/en' // import English locale
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
  const [locale, setLocale] = useState('en'); // default to English

    useEffect(() => {
      const handleLanguageChange = (event) => {
        const newLocale = event.detail.locale;
        setLocale(newLocale);
        dayjs.locale(newLocale);
      };

      window.addEventListener('languageChange', handleLanguageChange);

      // Initial locale setup
      const currentLocale = localStorage.getItem('appLocale') || 'en';
      setLocale(currentLocale);
      dayjs.locale(currentLocale);

      return () => {
        window.removeEventListener('languageChange', handleLanguageChange);
        };
      }, []);

      const getDateFormat = () => {
        switch (locale) {
          case 'de':
            return 'DD.MM.YYYY'; // German format
          case 'en':
          default:
            return 'DD/MM/YYYY'; // English format
        }
      }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} locale={locale}>
      <DatePicker
        closeOnSelect
        minDate={minDate}
        maxDate={maxDate}
        shouldDisableDate={disableWeekends}
        value={datePickerValue}
        onChange={(newValue) => {
          if (dayjs(newValue).isValid()) datePickerSetValue(newValue)
        }}
        inputFormat={getDateFormat()} // Moved inputFormat here
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              backgroundColor: theme.palette.secondary.main,
            }}
          />
        )}
      />
    </LocalizationProvider>
  )
}
