<template>
  <div :class="styles.container">
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
<!--      <LoginComponent-->
<!--        is-content-visible="isContentVisible"-->
<!--        msg="msg"-->
<!--        login="login"-->
<!--        cancel="cancel"-->
<!--        user-name-error="userNameError"-->
<!--        password-error="passwordError"-->
<!--        form="form"-->
<!--        touched="touched"-->
<!--      />-->
      <a-modal v-model="isContentVisible" :footer="null" :closable="false">
        <p :class="styles.title">{{ msg }}</p>
        <a-form layout="vertical" @submit="login">
          <a-form-item
            :validate-status="userNameError() ? 'error' : ''"
            :help="userNameError() || ''"
          >
            <a-input
              v-model="form.username"
              v-decorator="[
                'userName',
                {
                  rules: [
                    { required: true, message: 'Please input your username!' },
                  ],
                },
              ]"
              placeholder="Username"
              name="username"
              @focus="userNameError.touched = true"
            >
              <a-icon
                slot="prefix"
                type="user"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item
            :validate-status="passwordError() ? 'error' : ''"
            :help="passwordError() || ''"
          >
            <a-input
              v-model="form.password"
              type="password"
              placeholder="Password"
              name="password"
              @focus="passwordError.touched = true"
            >
              <a-icon
                slot="prefix"
                type="lock"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item>
            <div :class="styles.loginContainer">
              <a-button
                type="primary"
                :class="styles.loginButton"
                @click="login"
              >Login</a-button
              >
              <a-button
                type="primary"
                :class="styles.loginButton"
                @click="cancel"
              >Cancel</a-button
              >
            </div>
          </a-form-item>
        </a-form>
      </a-modal>
    </div>
  </div>
</template>
<script lang="ts">
import { PropType, reactive, ref } from 'vue'
import styles from './ImageComponent.module.css?module'
import FirstImage from '~/public/assets/Receiver.png'
import SecondImage from '~/public/assets/Receiver.svg'
import { ImageComponentType } from '~/src/components/imageComponent/ImageComponent.type'
import LoginComponent from '~/src/components/loginComponent/LoginComponent.vue'
export default {
  name: 'ImageComponent', // component name
  // components: { LoginComponent },
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
  },
  setup() {
    // Define refs for message and visibility state
    const isContentVisible = ref(false)
    const msg = ref('')
    // Form data
    const form = reactive({
      username: '',
      password: '',
    })
    // Track if the fields have been touched (focused)
    const touched = reactive({
      username: false,
      password: false,
    })

    const opelLoginModal = () => {
      msg.value = 'Login Form'
      isContentVisible.value = !isContentVisible.value
      form.username = ''
      form.password = ''
      touched.username = false // Reset touched state
      touched.password = false
    }

    const login = () => {
      if (form.username && form.password) {
        console.log('Login successful with:', form.username)
        isContentVisible.value = false
      } else {
        console.log('Please enter valid credentials')
      }
    }
    const cancel = () => {
      isContentVisible.value = false
    }

    // Simple validation error functions-Validation logic
    const userNameError = () =>
      touched.username && form.username === ''
        ? 'Please input your username!'
        : ''

    const passwordError = () =>
      touched.password && form.password === ''
        ? 'Please input your password!'
        : ''

    return {
      FirstImage,
      SecondImage,
      styles,
      isContentVisible,
      msg,
      opelLoginModal,
      login,
      cancel,
      userNameError,
      passwordError,
      form,
      touched,
    }
  },
}
</script>
