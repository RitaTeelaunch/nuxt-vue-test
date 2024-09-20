import Vue from 'vue';
import Vuex from 'vuex';
import itemsModule from './modules/items'; // Import items module
import usersModule from './modules/users'; // Import users module

Vue.use(Vuex);

export default () =>
  new Vuex.Store({
    modules: {
      items: itemsModule, // Register items module
      users: usersModule, // Register users module
    },
  });
