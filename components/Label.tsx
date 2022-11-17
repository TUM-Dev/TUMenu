import { useTheme, Chip } from '@mui/material'

interface LabelProps {
  bgColor: string
  text: string
}

export default function Label({ bgColor, text }: LabelProps) {
  const theme = useTheme()
  return (
    <Chip
      label={text}
      sx={{
        backgroundColor: bgColor,
        color: theme.palette.secondary.light,
        fontWeight: '600',
      }}
    />
  )
}
