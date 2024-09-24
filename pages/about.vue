<template>
  <ProfileComponent
    :full-name="users"
    :load-users="fetchUsers"
    :error-user="errorUser"
    :loading-user="loadingUser"
  />
</template>
<script lang="ts">
import ProfileComponent from '~/src/components/profileComponent/ProfileComponent.vue'

export default {
  components: { ProfileComponent },
  // fetch data from ssr
  async asyncData({ store }) {
    await store.dispatch('users/fetchUsers')
  },
  computed: {
    users() {
      return this.$store.getters['users/users']
    },
    loadingUser() {
      return this.$store.getters['users/loadingUser']
    },
    errorUser() {
      return this.$store.getters['users/errorUser']
    },
  },
  methods:{
    fetchUsers(){
      console.log('fetch from client side')
      return this.$store.dispatch('users/fetchUsers')
    }
  }
}
</script>
