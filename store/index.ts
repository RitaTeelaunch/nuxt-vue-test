import Vue from 'vue';
import Vuex from 'vuex';
import itemsModule from './modules/items'; // Import items module
import usersModule from './modules/users'; // Import users module
import productsModule from './modules/products'
Vue.use(Vuex);

export default () =>
  new Vuex.Store({
    modules: {
      items: itemsModule, // Register items module
      users: usersModule, // Register users module
      products: productsModule, // Register products module
    },
  });
