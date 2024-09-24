<template>
  <div>
    <!--    <ProfileComponent :full-name="users"  :load-users="loadUsers"  :error-user="errorUser" :loading-user="loadingUser"/>-->
    <!--    <button @click="loadItems">Fetch Items</button>-->
    <!--    <div v-if="loading">Loading...</div>-->
    <!--    <div v-if="error">{{ error }}</div>-->
    <!--    <ul v-if="!loading && !error">-->
    <!--      <li v-for="object in item" :key="object.id">{{ object.title }}</li>-->
    <!--    </ul>-->
    <ImageComponent
      title="Shopping Website"
      section="Bag Section"
      description="Customized your own bag design!!!!"
      :return-about="returnAbout"
    />
  </div>
</template>

<script lang="ts">

import ImageComponent from '~/src/components/imageComponent/ImageComponent.vue'

export default {
  name: 'IndexPage',
  components: {
    ImageComponent,
  },
  layout: 'header',
    methods: {
      returnAbout() {
        this.$router.push('/about')
      }
    }
  // },
  // // async asyncData() { //ssr without using the store
  // //   try {
  // //     const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  // //     console.log(data)
  // //     return {
  // //       FullName: data.slice(0,4)
  // //     };
  // //   } catch (error) {
  // //     console.error('Error fetching data:', error);
  // //     return {
  // //       FullName: []
  // //     };
  // //   }
  // // },
  // // Using asyncData for SSR
  // // async asyncData({ store }) {
  // //   try {
  // //     // Dispatch actions to load users and items
  // //     await store.dispatch('users/fetchUsers');
  // //     await store.dispatch('items/fetchItems');
  // //   } catch (error) {
  // //     console.error('Error in asyncData:', error);
  // //   }
  // // },
  // computed: {
  //   item() {
  //     return this.$store.getters['items/items']
  //   },
  //   loading() {
  //     return this.$store.getters['items/loading']
  //   },
  //   error() {
  //     return this.$store.getters['items/error']
  //   },
  //   users() {
  //     return this.$store.getters['users/users']
  //   },
  //   loadingUser() {
  //     return this.$store.getters['users/loadingUser']
  //   },
  //   errorUser() {
  //     return this.$store.getters['users/errorUser']
  //   },
  // },
  // async created() {
  //   // await this.$store.dispatch('items/fetchItems')
  //   // await this.$store.dispatch('users/fetchUsers')
  // },
  // // const msg= ref(''),
  // // const isContentVisible= ref(false)
  // methods: {
  //
  //   async loadUsers() {
  //     console.log('rita')
  //     await this.$store.dispatch('users/fetchUsers')
  //   },
  //   // Method to dispatch the fetchItems action when the button is clicked
  //   async loadItems() {
  //     await this.$store.dispatch('items/fetchItems');
  //   },
  //   returnAbout() {
  //     this.$router.push('/about')
  //   },
  //
  // },
}
</script>
