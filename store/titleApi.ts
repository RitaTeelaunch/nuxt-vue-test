import axiosBaseQuery from '@/utils/axiosBaseQuery';
export const state = () => ({
  item:[],
    loading:false,
    error:'',
});

export const mutations = {
      SET_ITEMS(state,item){
    state.item=item
    },
    SET_LOADING(state,loading){
      state.loading=loading
    },
    SET_ERROR(state, error){
      state.error=error
    }

  }
export const actions = {
        async fetchItems({ commit }) {
      console.log('rita')
      commit('SET_LOADING', true)
      try {
        const { data } = await axiosBaseQuery.get('https://jsonplaceholder.typicode.com/posts')
        console.log('data',data)
        commit('SET_ITEMS', data.slice(0,2))
      } catch (error) {
        commit('SET_ERROR', error)
      } finally {
        commit('SET_LOADING', false)
      }
    },

  }
  export const getters = {
    item:state => state.item,
    loading:state => state.loading,
    error:state => state.error
  };
