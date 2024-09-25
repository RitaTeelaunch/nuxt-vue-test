<template>
  <a-modal
    v-model="isContentVisible"
    :footer="null"
    :closable="false"
    class="customModal"
  >
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
  </a-modal>
</template>
<script lang="ts">
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
  data() {
    return {
      styles,
    }
  },
}
</script>
