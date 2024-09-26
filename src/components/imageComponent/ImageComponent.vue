<template>
  <div :class="styles.container">
    <div :class="styles.animated"  >
      <transition
        :enter-active-class="styles.fadeEnterActive"
        :enter-class="styles.fadeLeaveActive"
        :leave-active-class="styles.fadeEnterActive"
        :leave-to-class="styles.fadeLeaveActive"
      >
      <div v-if="isAnimated" :class="styles.subContainer">
    <p :class="styles.title">{{ title }}</p>
    <div :class="styles.description">
      <p :class="styles.preTitle">{{ section }}</p>
      <p :class="styles.preTitle">{{ description }}</p>
    </div>
    </div>
    </transition>
    </div>
    <div style="min-height: 400px">
    <transition :enter-active-class="styles.imageEnterActive" :enter-class="styles.imageLeaveActive">
    <div v-if="isAnimated" :class="styles.imgContainer">
      <img :src="FirstImage" :alt="FirstImage" :class="styles.img" />
      <img :src="SecondImage" :alt="SecondImage" :class="styles.img" />
    </div>
    </transition>
    </div>
    <div :class="styles.buttonContainer">
      <NuxtLink to="/product" :class="styles.product">About Product</NuxtLink>
      <NuxtLink to="/planet" :class="styles.product">About Planet</NuxtLink>
      <a-button type="link" :class="styles.aboutButton" @click="returnAbout">
        About us
      </a-button>
    </div>
    <div :class="styles.user">
      <a-button
        type="primary"
        size="large"
        shape="round"
        icon="user"
        :class="styles.aboutButton"
        @click="opelLoginModal"
        >User</a-button
      >
      <LoginComponent
        :is-content-visible="isContentVisible"
        :msg="msg"
        :login="login"
        :cancel="cancel"
        :user-name-error="userNameError"
        :password-error="passwordError"
        :form="form"
        :touched="touched"
      />
    </div>
  </div>
</template>
<script lang="ts">
import {  onMounted, PropType, ref } from 'vue'
import styles from './ImageComponent.module.css?module'
import FirstImage from '~/public/assets/Receiver.png'
import SecondImage from '~/public/assets/Receiver.svg'
import { ImageComponentType } from '~/src/components/imageComponent/ImageComponent.type'
import LoginComponent from '~/src/components/loginComponent/LoginComponent.vue'
export default {
  name: 'ImageComponent', // component name
  components: { LoginComponent },
  props: {
    title: {
      type: String as PropType<ImageComponentType['title']>,
      required: true,
    },
    section: {
      type: String as PropType<ImageComponentType['section']>,
      required: true,
    },
    description: {
      type: String as PropType<ImageComponentType['description']>,
      required: true,
    },
    returnAbout: { type: Function, required: true },
    opelLoginModal:{type:Function, required:true},
    isContentVisible:{
      type:Boolean,
      required:true
    },
    msg:{
      type:String,
      required: true
    },
    login:{
      type:Function,
      required:true
    },
    cancel:{
      type:Function,
      required:true
    },
    userNameError:{
      type: Function,
      required:true
    },
    passwordError:{
      type: Function,
      required:true
    },
    form:{
      type:Object as () => { username: string; password: string },
      required:true
    },
    touched:{
      type:Object as () => { username: string; password: string },
      required:true
    }
  },
  setup() {
    const isAnimated = ref(false);
    onMounted(() => {
        isAnimated.value = !isAnimated.value;
    });

    return {
      FirstImage,
      SecondImage,
      styles,
      isAnimated,
    }
  },
}
</script>

