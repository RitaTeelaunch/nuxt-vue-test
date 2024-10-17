import '@testing-library/jest-dom'
import { config } from '@vue/test-utils'
import { Button, Input, Form, Modal, Image } from 'ant-design-vue'
import { vi } from 'vitest'
import { ref } from 'vue'
import LoginComponent from './src/components/loginComponent/LoginComponent.vue'
import './test/integration-test/msw-setup'
import { ProductData } from './test/integration-test/product/ProductData'
import { DataItemPlanet } from './test/integration-test/planetItem/dataItemPlanet'

config.global.components = {
  'a-button': Button,
  'a-input': Input,
  'a-form-item': Form.Item,
  'a-input-password': Input.Password,
  'a-form': Form,
  'a-modal': Modal,
  'a-image': Image,
  NuxtLink: {
    template: '<a><slot /></a>'
  },
  LoginComponent: LoginComponent,
  browser: true, // Enable browser-like testing
  configFile: 'nuxt.config.ts' // Ensure your config is loaded
}
vi.mock('nuxt/app', () => ({
  useAsyncData: vi.fn().mockReturnValue({
    data: ref({
      results: ProductData
    })
  })
}))
vi.mock('nuxt/app', () => ({
  useAsyncData: vi.fn().mockReturnValue({
    data: ref({ data: DataItemPlanet })
  })
}))
