<template>
  <div>
    <div>
      <div v-if="posts">Rita</div>
      <div v-else>Loading...</div>
      <div v-for="post in posts" :key="post.id">{{ post.title }}</div>
    </div>
    <a-button @click="opened">open</a-button>
    <LoginBookComponent
      :form-state="formState"
      :on-finish="onFinish"
      :on-finish-failed="onFinishFailed"
      :open-modal="openModal"
    />
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent, reactive, ref } from 'vue'
import LoginBookComponent from '../src/components/loginBookComponent/LoginBookComponent.vue'

interface FormState {
  username: string
  password: string
  remember: boolean
}
export default defineComponent({
  components: { LoginBookComponent },
  async setup() {
    const openModal = ref(false)
    const opened = () => {
      openModal.value = true
    }
    const formState = reactive<FormState>({
      username: '',
      password: '',
      remember: true,
    })
    const onFinish = (values: string) => {
      console.log('Success:', values)
    }

    const onFinishFailed = (errorInfo: string) => {
      console.log('Failed:', errorInfo)
    }

    const { data } = await useAsyncData('posts', async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return response.data.slice(0, 4)
      } catch (er) {
        console.log(er)
      }
    })
    return {
      formState,
      onFinish,
      onFinishFailed,
      openModal,
      opened,
      posts: data?.value || [],
    }
  },
})
</script>
