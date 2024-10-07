<template>
  <a-modal :open="isContentVisible" :footer="null" :closable="false" class="customModal">
    <p :class="styles.title">{{ msg }}</p>
    <p :class="styles.title" @click="click">click to show content</p>
    <transition name="image" mode="in-out">
      <div v-if="isAnimated">
        <a-form :model="localForm" layout="vertical" :required-mark="false" @finish="login" @finish-failed="cancel">
          <a-form-item
            class="customInput"
            name="username"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <template #label>
              <p :class="styles.label">Username</p>
            </template>
            <a-input v-model:value="localForm.username" placeholder="Username" name="username" class="inputContent">
              <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
            </a-input>
          </a-form-item>
          <a-form-item
            class="customInput"
            name="password"
            :rules="[{ required: true, message: 'Please input your password!' }]"
          >
            <template #label>
              <p :class="styles.label">Password</p>
            </template>
            <a-input-password
              v-model:value="localForm.password"
              type="password"
              placeholder="Password"
              name="password"
              class="eyePassword"
            >
              <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
            </a-input-password>
          </a-form-item>

          <a-form-item>
            <div :class="styles.loginContainer">
              <a-button
                type="primary"
                html-type="submit"
                :class="styles.loginButton"
                :disabled="!localForm.username || !localForm.password"
                @click="login"
                >Login</a-button
              >
              <a-button type="primary" :class="styles.loginButton" @click="cancel">Cancel</a-button>
            </div>
          </a-form-item>
        </a-form>
      </div>
    </transition>
  </a-modal>
</template>
<script lang="ts">
import styles from './LoginComponent.module.css?module'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'
export default {
  name: 'LoginComponent',
  components: {
    UserOutlined,
    LockOutlined,
  },
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
    form: {
      type: Object as () => { username: string; password: string },
      required: true,
    },
  },
  setup(props) {
    const isAnimated = ref(false)
    const localForm = ref({ ...props.form }) // Create a local copy of the form
    function click() {
      isAnimated.value = !isAnimated.value
    }

    return { isAnimated, click, styles, localForm }
  },
}
</script>
