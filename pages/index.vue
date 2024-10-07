<template>
  <div>
    <ImageComponent
      title="Shopping Website"
      section="Bag Section"
      description="Customized your own bag design!!!!"
      :return-about="returnAbout"
      :opel-login-modal="opelLoginModal"
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
    ImageComponent, // set import component name
  },

  setup() {
    definePageMeta({
      layout: 'header', // to make layout for this screen
    })
    const router = useRouter()
    // Define refs for message and visibility state
    const isContentVisible = ref(false)
    const msg = ref('')
    // Form data
    const form = reactive({
      username: '',
      password: '',
    })

    const opelLoginModal = () => {
      msg.value = 'Login Form'
      isContentVisible.value = !isContentVisible.value
      form.username = ''
      form.password = ''
    }

    const login = (values: string) => {
      console.log('Success:', values)
      isContentVisible.value = false
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
      opelLoginModal,
      login,
      cancel,
      returnAbout,
    }
  },
}
</script>
