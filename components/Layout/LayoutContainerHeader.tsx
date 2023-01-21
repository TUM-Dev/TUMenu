import { useContext } from 'react'
import { Button, Grid, useTheme, Box } from '@mui/material'
import dayjs from 'dayjs'
import { useTranslation } from 'next-i18next'
import SidebarContext from '../SidebarContext'
import HeaderDatePicker from './DatePicker'
import FoodPlaceTitleContainer from './FoodPlaceTitleContainer'

export interface LayoutHeaderProps {
  datePickerValue: dayjs.Dayjs | null
  datePickerSetValue: React.Dispatch<React.SetStateAction<dayjs.Dayjs | null>>
  minDate: dayjs.Dayjs
  maxDate: dayjs.Dayjs
}

export default function LayoutContainerHeader({
  datePickerValue,
  datePickerSetValue,
  minDate,
  maxDate,
}: LayoutHeaderProps) {
  const { triggerSidebarMobile, setTriggerSidebarMobile } = useContext(SidebarContext)
  const theme = useTheme()
  const { t } = useTranslation('common')
  
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item lg={9} xs={12}>
        <FoodPlaceTitleContainer datePickerValue={datePickerValue} />
      </Grid>
      <Grid item lg={0} md={3} sm={4} xs={6} sx={{ display: { lg: 'none', xs: 'block' } }}>
        <Box sx={{ display: 'center', alignItems: 'center', justifyContent: 'center' }}>
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
      <Grid item lg={3} md={3} sm={4} xs={6}>
        <Box sx={{ display: 'center', alignItems: 'center', justifyContent: 'center' }}>
          <HeaderDatePicker
            datePickerValue={datePickerValue}
            datePickerSetValue={datePickerSetValue}
            minDate={minDate}
            maxDate={maxDate}
          />
        </Box>
      </Grid>
    </Grid>
  )
}
