import { Box, Tabs, Tab, useTheme } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'

export default function FilterTabs() {
  const [filteredValue, setFilteredValue] = useState('All')
  const theme = useTheme()
  const { t } = useTranslation('common')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setFilteredValue(newValue)
  }

  return (
    <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
      <Tabs value={filteredValue} onChange={handleChange} sx={{ mt: theme.spacing(3) }} centered>
        <Tab value="All" label={t('all')} />
        <Tab value="Fleisch" label={t('meat')} />
        <Tab value="Vegetarisch" label={t('vegetarian')} />
        <Tab value="Wok" label="Wok" />
        <Tab value="Grill" label="Grill" />
        <Tab value="Pasta" label="Pasta" />
        <Tab value="Pizza" label="Pizza" />
        <Tab value="Studitopf" label={t('studyPot')} />
        <Tab value="Beilagen" label={t('sideDish')} />
        <Tab value="Süßspeise" label={t('dessert')} />
      </Tabs>
    </Box>
  )
}
