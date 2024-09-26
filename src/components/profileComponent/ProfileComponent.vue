<template>
  <div>
    <transition
      name="fade"
      mode="in-out"
      @before-enter="beforeEnter"
      @leave="leave"
    >
      <div v-if="isAnimated">
        <p :class="styles.header">Name Of Owner:</p>
        <p v-if="loadingUser">Loading ...</p>
        <p v-if="errorUser">{{ errorUser }}</p>
        <div v-if="!errorUser" :class="styles.tableDetails">
          <p>id</p>
          <p>username</p>
          <p>name</p>
          <p>email</p>
        </div>
      </div>
    </transition>
    <div v-for="item in fullName" :key="item.id" :class="styles.tableDetails">
      <p>
        {{ item.id }}
      </p>
      <p>
        {{ item.username }}
      </p>
      <p>
        {{ item.name }}
      </p>
      <p>
        {{ item.email }}
      </p>
    </div>
    <div :class="styles.buttonContainer">
      <button :class="styles.showButton" @click="loadUsers">Show It</button>
      <div :class="styles.homeContainer">
        <NuxtLink to="/" :class="styles.home">Return Home</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, PropType, ref } from 'vue'
import styles from './ProfileComponent.module.css?module'
export default {
  name: 'ProfileComponent',
  props: {
    fullName: {
      type: Array as PropType<
        { id: number; name: string; username: string; email: string }[]
      >,
      required: true,
    },
    loadUsers: {
      type: Function,
      required: true,
    },
    loadingUser: {
      type: Boolean,
      required: true,
    },
    errorUser: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isAnimated = ref(false)
    onMounted(() => {
      isAnimated.value = !isAnimated.value
    })
    return {
      isAnimated,
    }
  },
  data() {
    return {
      styles,
    }
  },
  methods: {
    beforeEnter(el: HTMLElement) {
      el.style.opacity = '1'
      el.style.transform = 'translateY(0px)'
    },
    leave(el: HTMLElement, done: () => void) {
      el.style.transition = 'opacity 0.5s, transform 0.5s'
      el.style.opacity = '0'
      el.style.transform = 'translateY(-20px)'
      done()
    },
  },
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  color: chartreuse;
  transform: translateX(0);
  transition: opacity 0.5s, color 0.5s, transform 0.5s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  color: blue;
  transform: translateX(-20px);
  transition: opacity 0.5s, color 0.5s, transform 0.5s ease-in-out;
}
</style>
