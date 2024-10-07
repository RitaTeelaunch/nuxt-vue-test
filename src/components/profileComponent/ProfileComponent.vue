<template>
  <div>
    <transition name="image">
      <div v-if="isAnimated">
        <p :class="styles.header">Name Of Owner:</p>
      </div>
    </transition>
    <p v-if="loadingUser">Loading ...</p>
    <div v-if="!fullName">
      {{ errorUser }}
    </div>

    <div v-if="fullName" :class="styles.tableDetails">
      <p><strong>Id</strong></p>
      <p><strong>Username</strong></p>
      <p><strong>Name</strong></p>
      <p><strong>Email</strong></p>
      <p><strong>More Information</strong></p>
    </div>

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
      <a-button @click="showInfo(item.id)"> Details </a-button>
    </div>
    <div :class="styles.buttonContainer">
      <button :class="styles.showButton" @click="showAnimation">Show It</button>
      <div :class="styles.homeContainer">
        <NuxtLink to="/" :class="styles.home"> Return Home </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { onMounted, ref } from 'vue'
import styles from './ProfileComponent.module.css?module'

export default {
  name: 'ProfileComponent',
  props: {
    fullName: {
      type: Array as PropType<{ id: number; name: string; username: string; email: string }[]>,
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
    showInfo: {
      type: Function,
      required: true,
    },
  },
  setup() {
    const isAnimated = ref(false)
    const showAnimation = () => {
      isAnimated.value = !isAnimated.value
    }

    onMounted(() => {
      isAnimated.value = true
    })

    return {
      isAnimated,
      showAnimation,
    }
  },
  data() {
    return {
      styles,
    }
  },
}
</script>
