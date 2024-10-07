<template>
  <div>
    <transition name="image">
      <div v-if="isAnimated" :class="styles.container">
        <div :class="styles.container">
          <p :class="styles.title">Choose a product</p>
          <div
            v-if="!productList?.length"
            style="color: cadetblue; font-size: 50px; font-family: DMSans-Regular, serif"
          >
            Error fetching data
          </div>
          <div v-if="productList" :class="styles.subContainer">
            <div v-for="item in productList" :key="item.id" :class="styles.detail">
              <img :src="item.book_image" :alt="item.book_image" :class="styles.img" >
              <p>{{ item.rank }}</p>
              <p :class="styles.text">{{ item.title }}</p>
              <p :class="styles.text">{{ item.author }}</p>
            </div>
          </div>

          <div :class="styles.homeContainer">
            <NuxtLink to="/" :class="styles.home">Return Home</NuxtLink>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script lang="ts">
import type { PropType } from 'vue'
import styles from './ProductComponent.module.css?module'
export default {
  name: 'ProductComponent',
  layout: 'header',
  props: {
    productList: {
      type: Array as PropType<{ rank: number; title: string; book_image: string; author: string }[]>,
      required: this,
    },
  },
  setup() {
    const isAnimated = ref(false)
    onMounted(() => {
      isAnimated.value = true
    })
    return {
      isAnimated,
    }
  },
  data() {
    return { styles }
  },
}
</script>
