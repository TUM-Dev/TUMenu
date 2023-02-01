import React, { RefObject, useMemo, useContext } from 'react'
import { useTranslation } from 'next-i18next'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
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
import CanteenContext from '../CanteenContext'

interface FilterDropdownProps {
  open: boolean
  anchorRef: RefObject<HTMLButtonElement>
  handleClose: (event: Event | React.SyntheticEvent) => void
  selectedLabels: string[]
  setSelectedLabels: React.Dispatch<React.SetStateAction<string[]>>
  handleCheck: (name: string) => void
}

export default function FilterDropdown({
  open,
  anchorRef,
  handleClose,
  selectedLabels,
  setSelectedLabels,
  handleCheck,
}: FilterDropdownProps) {
  const { labels } = useContext(CanteenContext)
  const theme = useTheme()
  const { t, i18n } = useTranslation('common')

  const getLabelText = (label: Labels, locale: string) => {
    if (locale === 'de') {
      return label.text.DE.toUpperCase()
    }
    return label.text.EN.toUpperCase()
  }

  const sortedLabels = useMemo(
    () =>
      labels.sort((a, b) => {
        if (i18n.language === 'en') return a.text.EN.localeCompare(b.text.EN)
        return a.text.DE.localeCompare(b.text.DE)
      }),
    [i18n.language, labels],
  )

  return (
    <Popper
      className="container-dropdown"
      sx={{
        maxHeight: theme.spacing(50),
        overflowY: 'scroll',
      }}
      open={open}
      anchorEl={anchorRef.current}
      role={undefined}
      placement="bottom-end"
      transition
      disablePortal={false}
      modifiers={[
        {
          name: 'flip',
          enabled: false,
        },
        {
          name: 'preventOverflow',
          enabled: true,
          options: {
            boundariesElement: 'scrollParent',
          },
        },
      ]}>
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin: 'left top',
          }}>
          <Paper
            sx={{
              marginTop: theme.spacing(0.1),
              backgroundColor: theme.palette.secondary.main,
              borderBottomLeftRadius: '12px',
              borderBottomRightRadius: '12px',
            }}>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                autoFocusItem={open}
                id="composition-menu"
                aria-labelledby="composition-button">
                <MenuItem
                  disableTouchRipple
                  onClick={() => setSelectedLabels([])}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: theme.spacing(1),
                  }}>
                  {t('deleteFilters')}
                  <DeleteForeverIcon sx={{ color: '#545454', padding: '0 !important' }} />
                </MenuItem>
                {sortedLabels.map((label, index) => (
                  <MenuItem
                    key={index.toLocaleString()}
                    disableTouchRipple
                    onClick={() => handleCheck(label.enum_name)}
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
