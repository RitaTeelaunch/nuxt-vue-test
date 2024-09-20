import axios from 'axios'

const state = () => ({
  users: [],
  loadingUser: false,
  errorUser: '',
});

const mutations = {
  SET_USERS(state, users) {
    state.users = users;
  },
  SET_LOADING(state, loadingUser) {
    state.loadingUser = loadingUser;
  },
  SET_ERROR(state, errorUser) {
    state.errorUser = errorUser;
  },
};

const actions = {
  async fetchUsers({ commit }) {
    commit('SET_LOADING', true);
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log('dataUser',data)
      commit('SET_USERS', data);
    } catch (error) {
      commit('SET_ERROR', error);
    } finally {
      commit('SET_LOADING', false);
    }
  },
};

const getters = {
  users: state => state.users,
  loadingUser: state => state.loadingUser,
  errorUser: state => state.errorUser,
};

export default {
  namespaced: true, // Namespacing for easier access
  state,
  mutations,
  actions,
  getters,
};
