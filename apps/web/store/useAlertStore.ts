import { create } from 'zustand'

/**
 * Severity level for alert notifications.
 */
export type AlertType = 'success' | 'info' | 'warning' | 'error'

/**
 * Global alert store state managed by Zustand.
 */
export interface AlertState {
  /**
   * Current alert display information.
   */
  alertInfo: {
    /** Whether the alert is visible. */
    visible: boolean
    /** The severity type of the alert. */
    type: AlertType
    /** The message displayed in the alert. */
    content: string
  }
  /**
   * Update the alert visibility, type, and content.
   */
  setAlertInfo: ({
    visible,
    type,
    content
  }: {
    visible: boolean
    type: AlertType
    content: string
  }) => void
}

export const useAlertStore = create<AlertState>()((set) => ({
  alertInfo: {
    visible: false,
    type: 'success',
    content: ''
  },
  setAlertInfo: ({
    visible,
    type,
    content
  }: {
    visible: boolean
    type: AlertType
    content: string
  }) =>
    set((state) => ({
      alertInfo: {
        ...state.alertInfo,
        visible,
        type,
        content
      }
    }))
}))
