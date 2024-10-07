<template>
  <div>
    <div v-if="loadingUserId"><a-spin /></div>
    <div v-else>
      <p>
        name: <span>{{ userId.name }}</span>
      </p>
      <p>
        email: <span>{{ userId.email }}</span>
      </p>
      <p>
        phone: <span>{{ userId.phone }}</span>
      </p>
    </div>
    <div style="display: flex; flex-direction: row; justify-content: space-around">
      <div>
        <p>For USERID</p>
        <div style="display: flex; flex-direction: row; gap: 20px">
          <p>UserId: {{ userId.id }}</p>
          <p style="color: cadetblue" @click="newUser">Update</p>
        </div>
        <a-button style="margin-right: 20px; border-radius: 50px; color: cadetblue" @click="incrementUser">
          +
        </a-button>
        <a-button style="border-radius: 50px; color: cadetblue" :disabled="userId.id <= 1" @click="decrementUser">
          -
        </a-button>
      </div>
      <div>
        <p>for counter</p>
        <div style="display: flex; flex-direction: row; gap: 20px">
          <p>Counter: {{ count }}</p>
          <p style="color: cadetblue" @click="newCount">Update</p>
        </div>
        <a-button style="margin-right: 20px; border-radius: 50px; color: cadetblue" @click="increment"> + </a-button>
        <a-button style="border-radius: 50px; color: cadetblue" :disabled="count <= 1" @click="decrement"> - </a-button>
      </div>
    </div>
    <div style="display: flex; justify-content: center">
      <NuxtLink style="color: cadetblue" to="/about">About Us</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter, useState } from 'nuxt/app'
import { definePageMeta } from '../../.nuxt/imports'
import { useUserIdStore } from '~/server/api/userId'

export default {
  name: 'PostPage',
  async setup() {
    definePageMeta({
      layout: 'user',
    })
    const router = useRouter()
    const count = useState('counter', () => 1)

    const userIdStore = useUserIdStore()
    await userIdStore.fetchUserId()

    const increment = () => {
      count.value++
    }
    const decrement = () => {
      count.value--
    }
    const newCount = () => {
      router.push(`/user/${count.value}`)
    }

    const newUser = () => {
      router.push(`/user/${userIdStore.userId.id}`)
    }

    return {
      ...userIdStore,
      count,
      increment,
      decrement,
      newCount,
      newUser,
    }
  },
}
</script>
