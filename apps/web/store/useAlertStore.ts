import { create } from 'zustand'

export type AlertType = 'success' | 'info' | 'warning' | 'error'

export interface AlertState {
  alertInfo: {
    visible: boolean
    type: AlertType
    content: string
  }
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
