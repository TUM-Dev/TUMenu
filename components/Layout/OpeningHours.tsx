import { Box, Typography, Grid, useTheme, Dialog } from '@mui/material'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded'
import { useTranslation } from 'next-i18next'
import { FoodPlace } from '../../types/FoodPlace'

interface OpeningHoursProps {
  foodPlaceData: FoodPlace
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function OpeningHours({ foodPlaceData, open, setOpen }: OpeningHoursProps) {
  const { t } = useTranslation('common')
  const theme = useTheme()
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      sx={{ borderRadius: '12px' }}
      disableScrollLock>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          backgroundColor: theme.palette.primary.light,
          height: theme.spacing(6),
          pt: theme.spacing(1),
          px: theme.spacing(2),
        }}>
        <CancelRoundedIcon
          fontSize="medium"
          sx={{ color: theme.palette.primary.main, cursor: 'pointer' }}
          onClick={() => setOpen(false)}
        />
      </Box>
      <Grid
        container
        rowSpacing={2}
        flexDirection="column"
        sx={{
          px: theme.spacing(5),
          pb: theme.spacing(5),
          width: theme.spacing(50),
          textAlign: 'center',
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.primary.main,
        }}>
        <Grid item xs={12} sx={{ borderBottom: '2px solid #fff' }}>
          <Typography variant="h4">{foodPlaceData.name}</Typography>
          <Typography variant="subtitle1" sx={{ mt: theme.spacing(1) }}>
            {t('openingHours')}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h6">{t('monday')}</Typography>
            <Typography variant="h6">{`${foodPlaceData.open_hours.mon.start} - ${foodPlaceData.open_hours.mon.end}`}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h6">{t('tuesday')}</Typography>
            <Typography variant="h6">{`${foodPlaceData.open_hours.tue.start} - ${foodPlaceData.open_hours.tue.end}`}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h6">{t('wednesday')}</Typography>
            <Typography variant="h6">{`${foodPlaceData.open_hours.wed.start} - ${foodPlaceData.open_hours.wed.end}`}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h6">{t('thursday')}</Typography>
            <Typography variant="h6">{`${foodPlaceData.open_hours.thu.start} - ${foodPlaceData.open_hours.thu.end}`}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h6">{t('friday')}</Typography>
            <Typography variant="h6">{`${foodPlaceData.open_hours.fri.start} - ${foodPlaceData.open_hours.fri.end}`}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  )
}
