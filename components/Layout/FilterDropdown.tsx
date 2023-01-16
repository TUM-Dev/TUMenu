import { RefObject } from 'react'
import { useTranslation } from 'next-i18next'
import {
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  Checkbox,
  useTheme,
} from '@mui/material'
import { Labels } from '../../types/Labels'

interface FilterDropdownProps {
  open: boolean
  anchorRef: RefObject<HTMLButtonElement>
  handleClose: (event: Event | React.SyntheticEvent) => void
  labels: Labels[]
  selectedLabels: string[]
  handleCheck: (name: string) => void
}

export default function FilterDropdown({
  open,
  anchorRef,
  handleClose,
  labels,
  selectedLabels,
  handleCheck,
}: FilterDropdownProps) {
  const theme = useTheme()
  const { i18n } = useTranslation('common')

  const getLabelText = (label: Labels, locale: string) => {
    if (locale === 'de') {
      return label.text.DE.toUpperCase()
    }
    return label.text.EN.toUpperCase()
  }

  return (
    <Popper
      open={open}
      anchorEl={anchorRef.current}
      role={undefined}
      placement="bottom-end"
      transition
      disablePortal={false}>
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin: 'left top',
          }}>
          <Paper sx={{ marginTop: theme.spacing(0.1), marginBottom: theme.spacing(2) }}>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                autoFocusItem={open}
                id="composition-menu"
                aria-labelledby="composition-button">
                {labels.map((label, index) => (
                  <MenuItem
                    key={index.toLocaleString()}
                    disableTouchRipple
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: theme.spacing(1),
                    }}>
                    {getLabelText(label, i18n.language)}
                    <Checkbox
                      checked={selectedLabels.includes(label.enum_name)}
                      onChange={() => handleCheck(label.enum_name)}
                      color="primary"
                      sx={{ padding: '0 !important' }}
                    />
                  </MenuItem>
                ))}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  )
}
