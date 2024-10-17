<template>
  <div>
    <div style="min-height: 700px">
      <transition name="fade" mode="in-out">
        <ProfileComponent
          v-if="showProfileComponent"
          :full-name="users"
          :error-user="errorUser"
          :loading-user="loadingUser"
          :show-info="showInfo"
        />
      </transition>
    </div>
    <a-button class="button" data-testid="antdButton" @click="toggleProfileComponent">Refresh Profile</a-button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useRouter } from 'nuxt/app'
import ProfileComponent from '../src/components/profileComponent/ProfileComponent.vue'
import { useUsersStore } from '~/store/api/users'

export default {
  name: 'AboutScreen',
  components: { ProfileComponent },

  async setup() {
    if (typeof definePageMeta !== 'undefined') {
      definePageMeta({
        layout: 'about'
      })
    }
    const showProfileComponent = ref(true) // Control the rendering of ProfileComponent

    function toggleProfileComponent() {
      showProfileComponent.value = !showProfileComponent.value
    }

    const router = useRouter()
    const usersStore = useUsersStore()
    await usersStore.fetchUsers()

    const showInfo = (id: number) => {
      router.push(`/user/${id}`)
    }

    return {
      showProfileComponent,
      toggleProfileComponent,
      users: usersStore.usersApp || [],
      loadingUser: usersStore.loadingUser,
      errorUser: usersStore.errorUser,
      showInfo
    }
  }
}
</script>
