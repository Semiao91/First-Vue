import type { Toast, ToastType } from '@/types/toast';
import { defineStore } from 'pinia';

export const useToastStore = defineStore('toast', {
  state: () => ({
    toasts: [] as Toast[]
  }),

  actions: {
    addToast(message: string, type: ToastType = 'empty', time = 3000) {
      const id = Date.now().toString()
      this.toasts.push({ id, message, type, time })

      if (time > 0) {
        setTimeout(() => {
          this.removeToast(id)
        }, time)
      }
    },

    removeToast(id: string) {
      const index = this.toasts.findIndex(toast => toast.id === id)
      if (index > -1) {
        this.toasts.splice(index, 1)
      }
    },

    success(message: string) {
      this.addToast(message, 'success')
    },

    error(message: string) {
      this.addToast(message, 'danger')
    },

    warning(message: string) {
      this.addToast(message, 'warning')
    },

    info(message: string) {
      this.addToast(message, 'empty')
    }
  }
})
