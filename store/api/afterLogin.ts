// store/users.ts
import { defineStore } from 'pinia'
import axios from 'axios'
import type { users } from '~/store/api/userId'

export const useUsersStore = defineStore('userStore', {
  state: () => ({
    users: [] as Array<users>,
    loading: false as boolean,
    error: null as string | null
  }),
  actions: {
    async fetchUsers() {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.users = response.data
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
    }
  },
  getters: {
    getUsers: (state) => state.users,
    isLoading: (state) => state.loading,
    hasError: (state) => state.error
  }
})
