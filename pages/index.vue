<template>
  <div>
    <ImageComponent
      title="Shopping Website"
      section="Bag Section"
      description="Customized your own bag design!!!!"
      :return-about="returnAbout"
      :open-login-modal="openLoginModal"
      :is-content-visible="isContentVisible"
      :msg="msg"
      :login="login"
      :cancel="cancel"
      :form="form"
    />
  </div>
</template>

<script lang="ts">
import { useRouter } from 'nuxt/app'
import { reactive, ref } from 'vue'
import ImageComponent from '~/src/components/imageComponent/ImageComponent.vue'

export default {
  name: 'IndexPage', // screen name
  components: {
    ImageComponent // set import component name
  },

  setup() {
    definePageMeta({
      layout: 'header' // to make layout for this screen
    })
    const router = useRouter()
    // Define refs for message and visibility state
    const isContentVisible = ref(false)
    const msg = ref('')
    // Form data
    const form = reactive({
      username: '',
      password: ''
    })

    const openLoginModal = () => {
      msg.value = 'Login Form'
      isContentVisible.value = true
      form.username = ''
      form.password = ''
    }

    const login = () => {
      isContentVisible.value = false
      router.push('/users')
    }

    const cancel = () => {
      isContentVisible.value = false
    }

    const returnAbout = () => {
      router.push('/about')
    }

    return {
      // return value used in my template
      isContentVisible,
      msg,
      form,
      openLoginModal,
      login,
      cancel,
      returnAbout
    }
  }
}
</script>
