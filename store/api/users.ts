import axios from 'axios'
import { defineStore } from 'pinia'
import type { users } from './userId'

export const useUsersStore = defineStore('usersStore', {
  state: () => ({
    usersApp: [] as Array<users>,
    loadingUserApp: false as boolean,
    errorUserApp: null as string | null
  }),
  actions: {
    async fetchUsers() {
      this.loadingUserApp = true
      this.errorUserApp = null
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
          headers: {
            Accept: 'application/json'
          }
        })
        this.usersApp = response.data
      } catch (error) {
        this.errorUserApp = `failed to fetch users ${error}`
      } finally {
        this.loadingUserApp = false
      }
    }
  },
  getters: {
    getUsers: (state) => state.usersApp,
    loadingUser: (state) => state.loadingUserApp,
    errorUser: (state) => state.errorUserApp
  }
})
