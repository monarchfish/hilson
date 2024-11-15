import { create } from 'zustand';

export type NotificationType = 'success' | 'info' | 'warning' | 'error';

export interface NotificationState {
  open: boolean;
  setOpen: (open: boolean) => void;
  content: string;
  setContent: (content: string) => void;
  type: NotificationType;
  setType: (type: NotificationType) => void;
  setNotification: (
    open: boolean,
    content: string,
    type: NotificationType
  ) => void;
}

export const useNotificationStore = create<NotificationState>()((set) => ({
  open: false,
  setOpen: (open: boolean) => set({ open }),
  content: '',
  setContent: (content: string) => set({ content }),
  type: 'success',
  setType: (type: NotificationType) => set({ type }),
  setNotification: (open: boolean, content: string, type: NotificationType) =>
    set({ open, content, type }),
}));
