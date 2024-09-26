<template>
  <a-modal
    v-model="isContentVisible"
    :footer="null"
    :closable="false"
    class="customModal"
  >
    <p :class="styles.title" >{{ msg }}</p>
    <p  @click="click">click to show content</p>
    <transition name="fade" mode="in-out">
      <div v-if="isAnimated">
      <a-form  layout="vertical" @submit="login">

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
            class="customInput"
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
            class="customInput"
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
            <a-button type="primary" :class="styles.loginButton" @click="login"
              >Login</a-button
            >
            <a-button type="primary" :class="styles.loginButton" @click="cancel"
              >Cancel</a-button
            >
          </div>
        </a-form-item>
      </a-form>
      </div>
    </transition>
  </a-modal>


</template>
<script lang="ts">
import { ref } from 'vue'
import styles from './LoginComponent.module.css?module'
export default {
  name: 'LoginComponent',
  props: {
    isContentVisible: {
      type: Boolean,
      required: true,
    },
    msg: {
      type: String,
      required: true,
    },
    login: {
      type: Function,
      required: true,
    },
    cancel: {
      type: Function,
      required: true,
    },
    userNameError: {
      type: Function,
      required: true,
    },
    passwordError: {
      type: Function,
      required: true,
    },
    form: {
      type: Object as () => { username: string; password: string },
      required: true,
    },
    touched: {
      type: Object as () => { username: string; password: string },
      required: true,
    },
  },
  setup() {
    const isAnimated = ref(false)
      function click() {
        isAnimated.value = !isAnimated.value
      }
    return { isAnimated, click,styles }
  },
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 0.5s, transform 0.5s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
  transition: opacity 0.5s, transform 0.5s ease-in-out;
}


</style>
