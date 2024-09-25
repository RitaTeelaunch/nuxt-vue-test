<template>
  <div :class="styles.container">
    <transition name="ImageComponent" mode="forwards"></transition>
    <p :class="styles.title">{{ title }}</p>
    <div :class="styles.description">
      <p :class="styles.preTitle">{{ section }}</p>
      <p :class="styles.subTitle">{{ description }}</p>
    </div>
    <div :class="styles.imgContainer">
      <img :src="FirstImage" :alt="FirstImage" :class="styles.img" />
      <img :src="SecondImage" :alt="SecondImage" :class="styles.img" />
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
import { PropType } from 'vue'
import styles from './ImageComponent.module.css?module'
import FirstImage from '~/public/assets/Receiver.png'
import SecondImage from '~/public/assets/Receiver.svg'
import { ImageComponentType } from '~/src/components/imageComponent/ImageComponent.type'
import LoginComponent from '~/src/components/loginComponent/LoginComponent.vue'
export default {
  name: 'ImageComponent', // component name
  components: { LoginComponent },
  transition:{
    name:'ImageComponent',
    mode:'forwards',
  },
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
    // // Define refs for message and visibility state
    // const isContentVisible = ref(false)
    // const msg = ref('')
    // // Form data
    // const form = reactive({
    //   username: '',
    //   password: '',
    // })
    // // Track if the fields have been touched (focused)
    // const touched = reactive({
    //   username: false,
    //   password: false,
    // })
    //
    // const opelLoginModal = () => {
    //   msg.value = 'Login Form'
    //   isContentVisible.value = !isContentVisible.value
    //   form.username = ''
    //   form.password = ''
    //   touched.username = false // Reset touched state
    //   touched.password = false
    // }
    //
    // const login = () => {
    //   if (form.username && form.password) {
    //     console.log('Login successful with:', form.username)
    //     isContentVisible.value = false
    //   } else {
    //     console.log('Please enter valid credentials')
    //   }
    // }
    // const cancel = () => {
    //   isContentVisible.value = false
    // }
    //
    // // Simple validation error functions-Validation logic
    // const userNameError = () =>
    //   touched.username && form.username === ''
    //     ? 'Please input your username!'
    //     : ''
    //
    // const passwordError = () =>
    //   touched.password && form.password === ''
    //     ? 'Please input your password!'
    //     : ''

    return {
      FirstImage,
      SecondImage,
      styles,
      // isContentVisible,
      // msg,
      // opelLoginModal,
      // login,
      // cancel,
      // userNameError,
      // passwordError,
      // form,
      // touched,
    }
  },
}
</script>
