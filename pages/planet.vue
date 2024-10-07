<template>
  <div :style="{ marginLeft: '50px' }">
    <div v-if="items" key="list-title">Planet Name:</div>

    <div v-else style="color: cadetblue; font-size: 50px; font-family: DMSans-Regular, serif">Error fetching data</div>
    <p v-for="item in items" :key="item.id">- {{ item.title }}</p>
    <NuxtLink
      to="/"
      :style="{
        color: 'cadetblue',
        display: 'flex',
        justifyContent: 'end',
        marginRight: '30px',
        marginTop: '50px',
      }"
    >
      Return Home
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import { useAsyncData } from 'nuxt/app'
import { useItemsStore } from '~/server/api/items'

export default {
  name: 'PlanetScreen',

  async setup() {
    const itemsStore = useItemsStore()
    const { data: item } = await useAsyncData('items', async () => {
      await itemsStore.fetchItem()
      console.log('itemsStore.items', itemsStore.items)
      return itemsStore.items
    })
    return {
      items: item || [],
    }
  },
}
</script>
