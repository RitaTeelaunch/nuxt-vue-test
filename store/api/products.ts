import axios from 'axios'
import { defineStore } from 'pinia'

export interface ProductsType {
  rank: number
  title: string
  book_image: string
  author: string
}

export const useProductsStore = defineStore('productsStore', {
  state: () => ({
    products: [] as Array<ProductsType>,
    loadingProduct: false as boolean,
    errorProduct: null as string | null
  }),
  actions: {
    async fetchProduct() {
      this.loadingProduct = true
      this.errorProduct = null
      try {
        const response = await axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json', {
          params: {
            'api-key': 'KAqrqFIGwGCXGrWPAPsqISj9nEwEi5rZ'
          }
        })
        this.products = response.data.results.books
      } catch (err) {
        this.errorProduct = `Failed to fetch products ${err}`
      } finally {
        this.loadingProduct = false
      }
    }
  },
  getters: {
    getProducts: (state) => state.products,
    isLoading: (state) => state.loadingProduct,
    hasError: (state) => state.errorProduct
  }
})
