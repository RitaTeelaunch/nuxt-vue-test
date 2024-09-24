<template>
  <div>
    <p :class="styles.header">Name Of Owner:</p>
    <p v-if="loadingUser">Loading ...</p>
    <p v-if="errorUser">{{ errorUser }}</p>
    <div v-if="!errorUser" :class="styles.tableDetails">
      <p>id</p>
      <p>username</p>
      <p>name</p>
      <p>email</p>
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
import { PropType } from 'vue'
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
  data() {
    return {
      styles,
    }
  },
}
</script>
