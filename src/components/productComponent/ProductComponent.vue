<template>
  <div>
<!--    <transition :enter-active-class="styles.productFadeActive" :enter-class="styles.productLeaveActive">-->
<!--      <div :class="styles.container" v-if="isAnimated"> // this for animation bt we dont have ssr if we used-->
      <div :class="styles.container" >
    <p :class="styles.title">Choose a product</p>
    <div :class="styles.subContainer">
      <div v-for="item in productList" :key="item.id" :class="styles.detail">
        <img :src="item.book_image" :alt="item.book_image" :class="styles.img"/>
        <p>{{ item.rank }}</p>
        <p :class="styles.text">{{ item.title }}</p>
        <p :class="styles.text">{{ item.author }}</p>
      </div>
    </div>
    <div :class="styles.homeContainer">
    <NuxtLink to="/" :class="styles.home">Return Home</NuxtLink>
    </div>
  </div>
<!--    </transition>-->
  </div>
</template>
<script lang="ts">
import {  PropType} from 'vue'
import styles from './ProductComponent.module.css?module'
export default {
  name: 'ProductComponent',
  layout: 'header',
  props: {
    productList: {
      type: Array as PropType<
        { rank: number; title: string; book_image: string; author: string }[]
      >,
      required: this,
    },
  },
  setup(){
    // const isAnimated = ref(false)
    // onMounted(()=>{
    //   isAnimated.value= !isAnimated.value
    // })
    // return{
    //   isAnimated
    // }
  },
  data() {
    return { styles }
  }
}
</script>
