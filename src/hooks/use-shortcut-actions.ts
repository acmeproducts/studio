import { useEffect } from 'react'
import { shortcutActions } from '@/lib/shortcut-actions'

interface Actions {
  randomize?: () => void
  reset?: () => void
  download?: () => void
}

export function useShortcutActions(actions: Actions) {
  useEffect(() => {
    shortcutActions.randomize = actions.randomize ?? null
    shortcutActions.reset = actions.reset ?? null
    shortcutActions.download = actions.download ?? null
    return () => {
      shortcutActions.randomize = null
      shortcutActions.reset = null
      shortcutActions.download = null
    }
  })
}
