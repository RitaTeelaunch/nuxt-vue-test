<template>
  <div :class="styles.container">
    <div :class="styles.animated">
      <transition name="image" mode="in-out">
        <div v-if="isAnimated" :class="styles.subContainer">
          <p :class="styles.title">
            {{ title }}
          </p>
          <div :class="styles.description">
            <p :class="styles.preTitle">
              {{ section }}
            </p>
            <p :class="styles.preTitle">
              {{ description }}
            </p>
          </div>
        </div>
      </transition>
    </div>
    <div>
      <transition name="image">
        <div v-if="isAnimated" :class="styles.imgContainer">
          <div :class="styles.imgContainer">
            <a-image :src="FirstImage" :alt="FirstImage" :class="styles.img" />
            <img :src="SecondImage" :alt="SecondImage" :class="styles.img" />
          </div>
        </div>
      </transition>
    </div>
    <div :class="styles.buttonContainer">
      <NuxtLink to="/product" :class="styles.product" data-testid="productLink"> About Product </NuxtLink>
      <NuxtLink to="/planet" :class="styles.product" data-testid="planetLink"> About Planet </NuxtLink>
      <a-button type="link" :class="styles.aboutButton" data-testid="aboutUs" @click="returnAbout"> About us </a-button>
    </div>
    <div :class="styles.user">
      <a-button type="primary" size="large" shape="round" icon="" :class="styles.aboutButton" @click="openLoginModal">
        User
      </a-button>
    </div>
    <LoginComponent :is-content-visible="isContentVisible" :msg="msg" :login="login" :cancel="cancel" :form="form" />
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { onMounted, ref } from 'vue'
import FirstImage from '../../../public/assets/Receiver.png'
import SecondImage from '../../../public/assets/Receiver.svg'
import LoginComponent from '../loginComponent/LoginComponent.vue'
import styles from './ImageComponent.module.css?module'
import type { ImageComponentType } from '~/src/components/imageComponent/ImageComponent.type'

export default {
  name: 'ImageComponent', // component name
  components: { LoginComponent },
  props: {
    title: {
      type: String as PropType<ImageComponentType['title']>,
      required: true
    },
    section: {
      type: String as PropType<ImageComponentType['section']>,
      required: true
    },
    description: {
      type: String as PropType<ImageComponentType['description']>,
      required: true
    },
    returnAbout: { type: Function, required: true },
    openLoginModal: { type: Function, required: true },
    isContentVisible: {
      type: Boolean,
      required: true
    },
    msg: {
      type: String,
      required: true
    },
    login: {
      type: Function,
      required: true
    },
    cancel: {
      type: Function,
      required: true
    },
    form: {
      type: Object as () => { username: string; password: string },
      required: true
    }
  },
  setup() {
    const isAnimated = ref(false)
    onMounted(() => {
      isAnimated.value = !isAnimated.value
    })

    return {
      FirstImage,
      SecondImage,
      styles,
      isAnimated
    }
  }
}
</script>
