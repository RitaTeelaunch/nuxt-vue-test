<template>
  <div :class="styles.container">
    <p :class="styles.title">{{ title }}</p>
    <p :class="styles.title">{{ section }}</p>
    <p :class="styles.title">{{ description }}</p>
    <p :class="styles.preTitle">Welcome to RITA store</p>
    <p :class="styles.subTitle">Welcome to RITA store</p>
    <div :class="styles.imgContainer">
      <img :src="FirstImage" :alt="FirstImage" :class="styles.img" />
      <img :src="SecondImage" :alt="FirstImage" :class="styles.img" />
    </div>
  </div>
</template>
<script lang="ts">
import {  PropType } from 'vue'
import styles from './ImageComponent.module.css?module'
import FirstImage from '~/public/assets/Receiver.png'
import SecondImage from '~/public/assets/Receiver.svg'
import {
  ImageComponentType,
} from '~/src/components/imageComponent/ImageComponent.type'
export default {
  name: 'ImageComponent', // component name
  props: {
    title: { type: String as PropType<ImageComponentType['title']>, required: true },
    section: { type: String as PropType<ImageComponentType['section']>, required: true },
    description: { type: String as PropType<ImageComponentType['description']>, required: true }
  },
  setup() {
    return {
      FirstImage,
      SecondImage,
      styles,
    }
  },
}
</script>
