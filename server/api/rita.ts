// server/users.ts
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUsersStore = defineStore('userStore', {
  state: () => ({
    users: [] as Array<any>, // Array of users
    loading: false as boolean,
    error: null as string | null,
  }),
  actions: {
    async fetchUsers() {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log('API Response:', response.data)
        this.users = response.data
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
    },
  },
  getters: {
    getUsers: (state) => state.users,
    isLoading: (state) => state.loading,
    hasError: (state) => state.error,
  },
})
