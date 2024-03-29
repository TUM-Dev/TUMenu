import { Box, Typography, Grid, useTheme } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { Dishes, Price } from '../../types/FoodPlaceMenu'
import { LabelColors } from '../../types/LabelColors'
import { Labels } from '../../types/Labels'
import Label from '../Label'

interface DishCardProps {
  meal: Dishes
  labels: Labels[]
}

export default function DishCard({ meal, labels }: DishCardProps) {
  const theme = useTheme()
  const { i18n, t } = useTranslation('common')

  const getLabelText = (mealLabel: string, locale: string) => {
    const foundLabel = labels.find((label) => label.enum_name === mealLabel)
    if (foundLabel) {
      if (locale === 'de') {
        return foundLabel?.text.DE.toUpperCase()
      }
      return foundLabel?.text.EN.toUpperCase()
    }
    return ''
  }

  const formatPrice = (price: Price) => {
    if (price == null) return t('unknown')
    if (price.base_price !== 0) {
      if (price.price_per_unit !== 0 && price.price_per_unit != null) {
        return `${price.base_price.toFixed(2)}€ + ${price.price_per_unit.toFixed(2)}€/${price.unit}`
      }
      return `${price.base_price.toFixed(2)}€`
    }
    return price.price_per_unit !== null
      ? `${price.price_per_unit.toFixed(2)}€/${price.unit}`
      : t('unknown')
  }

  return (
    <motion.div
      variants={{
        present: { scale: 1, opacity: 1 },
        exit: { scale: 0.8, opacity: 0 },
      }}
      initial="exit"
      animate="present"
      exit="exit"
      layout
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.main,
        padding: theme.spacing(2),
        borderRadius: '12px',
        width: theme.spacing(45),
        height: theme.spacing(45),
      }}>
      <Typography variant="h5">{meal.name}</Typography>
      <Grid container alignItems="center" justifyContent="flex-start" spacing={1}>
        {meal.labels.map((label: string, index: number) => (
          <Grid key={index.toLocaleString()} item xs={4}>
            <Label
              key={label}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              bgColor={(LabelColors as any)[label]}
              text={getLabelText(label, i18n.language)}
            />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mt: 'auto',
        }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {t('price')}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {formatPrice(meal.prices.students)}
        </Typography>
      </Box>
    </motion.div>
  )
}
