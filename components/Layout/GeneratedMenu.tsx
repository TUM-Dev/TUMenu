import { Box, styled, Typography, useTheme } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'
import { Dishes } from '../../types/FoodPlaceMenu'
import { Labels } from '../../types/Labels'
import { Menu } from '../../types/Menu'
import DishCard from './DishCard'

interface GeneratedMenuProps {
  height: number
  setFilteredValue: React.Dispatch<React.SetStateAction<string>>
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
  meals: Dishes[]
  labels: Labels[]
}

const Circle = styled('div')(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.primary.light,
  borderRadius: '50%',
  width: theme.spacing(4),
  height: theme.spacing(4),
  textAlign: 'center',
}))

const CircleTitleContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  fontWeight: 600,
  color: theme.palette.primary.dark,
  backgroundColor: theme.palette.primary.main,
  width: 'fit-content',
}))

export default function GeneratedMenu({
  height,
  setFilteredValue,
  setShowMenu,
  meals,
  labels,
}: GeneratedMenuProps) {
  const [menu, setMenu] = useState<Menu>()
  const theme = useTheme()
  const { t } = useTranslation('common')

  const getDishSuggestions = (dishTypes: string[]): Dishes[] =>
    meals.filter((meal) => dishTypes.includes(meal.dish_type))

  const getRandomDish = (maxNumber: number, dishes: Dishes[]) => {
    const min = 0
    const max = Math.floor(maxNumber)
    if (max === 0) return null
    const randomIndex = Math.floor(Math.random() * (max - min) + min) // The maximum is inclusive and the minimum is inclusive
    return dishes[randomIndex]
  }

  const generateMenu = () => {
    setFilteredValue('Disable')
    setShowMenu(true)
    const firstDishSuggestions = getDishSuggestions(['Studitopf', 'Beilagen'])
    const secondDishSuggestions = getDishSuggestions([
      'Grill',
      'Vegetarisch',
      'Fleisch',
      'Wok',
      'Pasta',
      'Pizza',
    ])
    const thirdDishSuggestion = getDishSuggestions(['Süßspeise'])
    const newMenu: Menu = {
      firstDish: getRandomDish(firstDishSuggestions.length, firstDishSuggestions),
      secondDish: getRandomDish(secondDishSuggestions.length, secondDishSuggestions),
      thirdDish: getRandomDish(thirdDishSuggestion.length, thirdDishSuggestion),
    }
    setMenu(newMenu)
  }

  useEffect(() => {
    generateMenu()
  }, [setShowMenu])

  return (
    <Box
      sx={{
        minHeight: height,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: theme.spacing(4),
        mt: theme.spacing(4),
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: theme.spacing(5),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <CircleTitleContainer>
          <Circle>
            <Typography variant="h6">1</Typography>
          </Circle>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {t('firstDish')}
          </Typography>
        </CircleTitleContainer>
        {menu && <DishCard meal={menu.firstDish} labels={labels} />}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: theme.spacing(5),
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}>
        <CircleTitleContainer>
          <Circle>
            <Typography variant="h6">2</Typography>
          </Circle>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {t('secondDish')}
          </Typography>
        </CircleTitleContainer>
        {menu && <DishCard meal={menu.secondDish} labels={labels} />}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: theme.spacing(5),
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}>
        <CircleTitleContainer>
          <Circle>
            <Typography variant="h6">3</Typography>
          </Circle>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Dessert
          </Typography>
        </CircleTitleContainer>
        {menu && <DishCard meal={menu.secondDish} labels={labels} />}
      </Box>
    </Box>
  )
}
