import axios from 'axios'

const state = {
  products: [],
  loadingProduct: false,
  errorProduct: '',
}
const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
  SET_LOADING_PRODUCT(state, loadingProduct) {
    state.loadingProduct = loadingProduct
  },
  SET_ERROR_PRODUCT(state, errorProduct) {
    state.errorProduct = errorProduct
  },
}
const actions = {

  async fetchProduct({ commit }) {
    commit('SET_LOADING_PRODUCT', true)
    try {
      const { data } = await axios.get(
        'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json',
        {
          params: {
            'api-key': 'KAqrqFIGwGCXGrWPAPsqISj9nEwEi5rZ',
          },
        }
      )
      console.log('data', data.results.books)
      commit('SET_PRODUCTS', data.results.books)

    } catch (error) {
      commit('SET_ERROR_PRODUCT', error.message)
    }finally {
      commit('SET_LOADING_PRODUCT',false)
    }
  },
}
const getters = {
  products: (state)=>state.products,
  loadingProduct: (state)=>state.loadingProduct,
    errorProduct:(state)=>state.errorProduct
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
