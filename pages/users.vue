<template>
  <div>
    <div style="min-height: 700px">
      <transition name="fade" mode="in-out">
        <ProfileComponent
          v-if="showProfileComponent"
          :full-name="users"
          :load-users="fetchUsers"
          :error-user="errorUser"
          :loading-user="loadingUser"
          :show-info="showInfo"
        />
      </transition>
    </div>
    <a-button class="button" @click="toggleProfileComponent"> Refresh Profile </a-button>
  </div>
</template>

<script lang="ts">
import { useAsyncData } from 'nuxt/app'
import { ref } from 'vue'

import ProfileComponent from '../src/components/profileComponent/ProfileComponent.vue'
import { useUsersStore } from '~/server/api/rita'

// Import the server
export default {
  name: 'AboutScreen',
  components: { ProfileComponent },
  async setup() {
    const showProfileComponent = ref(true) // Control the rendering of ProfileComponent
    function toggleProfileComponent() {
      showProfileComponent.value = !showProfileComponent.value
    }

    const usersStore = useUsersStore() // Use the server

    // Using useAsyncData with fetchUsers action from the Pinia server
    await useAsyncData('users', async () => {
      await usersStore.fetchUsers() // Call the action to fetch users
      return usersStore.users // Return the users data from the server
    })

    const showInfo = (id: number) => {
      console.log('id', id)
      router.push(`/user/${id}`)
    }

    return {
      showProfileComponent,
      toggleProfileComponent,
      users: usersStore.users,
      fetchUsers: usersStore.fetchUsers,
      loadingUser: usersStore.loadingUser,
      errorUser: usersStore.errorUser,
      showInfo,
    }
  },
}
</script>

<style scoped>
.button {
  border-radius: 15px;
  background-color: cadetblue;
  color: papayawhip;
  padding: 0 22px;
  border: unset;
}
</style>
