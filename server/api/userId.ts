import axios from 'axios'
import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'
export interface users {
  id: number
  name: string
  email: string
  phone: string
}
export const useUserIdStore = defineStore('userIdStore', {
  state: () => ({
    userId: Object as users,
    loadingUserId: false as boolean,
    errorUserId: null as string | null,
  }),
  actions: {
    async fetchUserId() {
      this.loadingUserId = true
      this.errorUserId = null
      try {
        const id = useRoute().params.id

        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        console.log('API Response:', response.data)
        this.userId = response.data
      } catch (err) {
        console.log(err)
        this.errorUserId = 'Failed to fetch user id'
      } finally {
        this.loadingUserId = false
      }
    },
    incrementUser() {
      this.userId.id++
    },
    decrementUser() {
      this.userId.id--
    },
  },
  getters: {
    getUserId: (state) => state.userId,
    isLoading: (state) => state.loadingUserId,
    hasError: (state) => state.errorUserId,
  },
})
