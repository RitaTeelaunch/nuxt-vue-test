import axios from 'axios'

const state = () => ({
  items: [],
  loading: false,
  error: '',
});

const mutations = {
  SET_ITEMS(state, items) {
    state.items = items;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
};

const actions = {
  async fetchItems({ commit }) {
    commit('SET_LOADING', true);
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
      commit('SET_ITEMS', data.slice(0, 2));
    } catch (error) {
      commit('SET_ERROR', error);
    } finally {
      commit('SET_LOADING', false);
    }
  },
};

const getters = {
  items: state => state.items,
  loading: state => state.loading,
  error: state => state.error,
};

export default {
  namespaced: true, // Makes this module namespaced
  state,
  mutations,
  actions,
  getters,
};
