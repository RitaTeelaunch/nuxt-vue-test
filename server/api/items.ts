import { defineStore } from 'pinia'
import axios from 'axios'

export const useItemsStore = defineStore('productsStore', {
  state: () => ({
    items: [] as Array<any>,
    loadingItem: false as boolean,
    errorItem: null as string | null,
  }),
  actions: {
    async fetchItem() {
      this.loadingItem = true
      this.errorItem = null
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log('API Response:', response.data)
        this.items = response.data.slice(0, 6)
      } catch (err) {
        this.errorItem = err
      } finally {
        this.loadingItem = false
      }
    },
  },
  getters: {
    getItems: (state) => state.items,
    isLoading: (state) => state.loadingItem,
    hasError: (state) => state.errorItem,
  },
})
