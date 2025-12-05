import { ref } from 'vue'

const isModalOpen = ref(false)
export function useModal() {
  function openModal() {
    isModalOpen.value = true
  }

  function closeModal() {
    isModalOpen.value = false
  }

  function handleSpotifyLogin() {
    // redirect logic
    closeModal()
  }

  return {
    isModalOpen,
    openModal,
    closeModal,
    handleSpotifyLogin,
  }
}
