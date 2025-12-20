export type ToastType = 'success' | 'warning' | 'danger' | 'empty';

export interface Toast {
  id: string;
  time: number;
  type: ToastType;
  message: string;
}
