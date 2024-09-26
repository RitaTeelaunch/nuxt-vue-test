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
        />
      </transition>
    </div>
    <a-button class="button" @click="toggleProfileComponent"
      >Refresh Profile</a-button
    >
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import ProfileComponent from '~/src/components/profileComponent/ProfileComponent.vue'

export default {
  components: { ProfileComponent },
  setup() {
    const showProfileComponent = ref(true) // Control the rendering of ProfileComponent

    function toggleProfileComponent() {
      showProfileComponent.value = !showProfileComponent.value
    }

    return {
      showProfileComponent,
      toggleProfileComponent,
    }
  },

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
  methods: {
    fetchUsers() {
      console.log('fetch from client side')
      return this.$store.dispatch('users/fetchUsers')
    },
  },
}
</script>

<style scoped>
.button {
  border-radius: 15px;
  background-color: cadetblue;
  color: papayawhip;
  padding: 0 22px 0 22px;
  border: unset;
}
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 0.5s, transform 0.5s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
