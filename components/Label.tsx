import { useTheme, Chip, Tooltip } from '@mui/material'

interface LabelProps {
  bgColor: string
  text: string
}

export default function Label({ bgColor, text }: LabelProps) {
  const theme = useTheme()
  return (
    <Tooltip title={text} arrow>
      <Chip
        label={text}
        sx={{
          backgroundColor: bgColor,
          color: theme.palette.secondary.light,
          fontWeight: '600',
          width: theme.spacing(13),
          height: theme.spacing(3),
        }}
      />
    </Tooltip>
  )
}
