<template>
  <div>
    <a-modal :open="openModal" :footer="false" :closable="false">
      <a-form
        :model="localForm"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
        @finish-failed="onFinishFailed"
      >
        <a-form-item
          label="Username"
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="localForm.username" />
        </a-form-item>

        <a-form-item
          label="Password"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="localForm.password" />
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
          <a-checkbox v-model:checked="localForm.remember"> Remember me </a-checkbox>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit"> Submit </a-button>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { ref } from 'vue'

interface FormData {
  username: string
  password: string
  remember: string
}
export default {
  name: 'LoginBookComponent',
  props: {
    openModal: Boolean,
    onFinish: {
      type: Function,
      required: true,
    },
    onFinishFailed: {
      type: Function,
      required: true,
    },
    formState: {
      type: Object as PropType<FormData>,
      required: true,
    },
  },
  setup(props) {
    const localForm = ref({ ...props.formState })
    return {
      localForm,
    }
  },
}
</script>
