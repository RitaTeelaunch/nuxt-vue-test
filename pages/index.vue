<template>
  <div>
    <ImageComponent
      title="Shopping Website"
      section="Bag Section"
      description="Customized your own bag design!!!!"
      :return-about="returnAbout"
      :opel-login-modal="opelLoginModal"
      :is-content-visible="isContentVisible"
      :msg="msg"
      :login="login"
      :cancel="cancel"
      :user-name-error="userNameError"
      :password-error="passwordError"
      :form="form"
      :touched="touched"
    />
  </div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue'
import ImageComponent from '~/src/components/imageComponent/ImageComponent.vue'

export default {
  name: 'IndexPage',
  components: {
    ImageComponent,
  },
  layout: 'header',
  setup() {
    // Define refs for message and visibility state
    const isContentVisible = ref(false)
    const msg = ref('')
    // Form data
    const form = reactive({
      username: '',
      password: '',
    })
    // Track if the fields have been touched (focused)
    const touched = reactive({
      username: false,
      password: false,
    })

    const opelLoginModal = () => {
      msg.value = 'Login Form'
      isContentVisible.value = !isContentVisible.value
      form.username = ''
      form.password = ''
      touched.username = false // Reset touched state
      touched.password = false
    }

    const login = () => {
      if (form.username && form.password) {
        console.log('Login successful with:', form.username)
        isContentVisible.value = false
      } else {
        console.log('Please enter valid credentials')
      }
    }
    const cancel = () => {
      isContentVisible.value = false
    }

    // Simple validation error functions-Validation logic
    const userNameError = () =>
      touched.username && form.username === ''
        ? 'Please input your username!'
        : ''

    const passwordError = () =>
      touched.password && form.password === ''
        ? 'Please input your password!'
        : ''
    return {
      isContentVisible,
      msg,
      form,
      touched,
      opelLoginModal,
      login,
      cancel,
      userNameError,
      passwordError,
    }
  },
  methods: {
    returnAbout() {
      this.$router.push('/about')
    },
  },
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
