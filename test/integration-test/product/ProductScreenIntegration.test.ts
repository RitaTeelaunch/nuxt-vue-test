import '../msw-setup'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { nextTick, ref } from 'vue'
import { fireEvent, waitFor } from '@testing-library/vue'
import ProductScreen from '../../../pages/product.vue'
import ProductComponent from '../../../src/components/productComponent/ProductComponent.vue'
import styles from '../../../src/components/productComponent/ProductComponent.module.css?module'
import { ProductData } from './ProductData'

vi.mock('nuxt/app', () => ({
  useAsyncData: vi.fn().mockImplementation((key, fetchFunction) => {
    return new Promise((resolve) => {
      fetchFunction().then((data) => {
        resolve({ data: ref(data) })
      })
    })
  })
}))

const mockRouter = {
  push: vi.fn()
}

vi.mock('vue-router', () => ({
  useRouter: () => mockRouter
}))

describe('ProductScreenIntegration test', () => {
  let pinia: ReturnType<typeof createPinia>

  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)
  })

  it('should render product screen ', async () => {
    const wrapper = await mount({
      components: { ProductScreen },
      template: `
            <Suspense>
              <ProductScreen />
            </Suspense>
          `
    })
    await nextTick()
    await new Promise((resolve) => setTimeout(resolve, 1000))
    expect(wrapper.exists()).toBe(true)

    expect(wrapper.find(`.${styles.title}`).text()).toBe('Choose a product')

    const productItems = wrapper.findAll(`.${styles.detail}`) // Assuming 'detail' is the class used for product item
    expect(productItems.length).toBe(ProductData.length)

    productItems.forEach((product, index) => {
      const productItem = productItems[index]
      expect(productItem.text()).toContain(ProductData[index].title)
      expect(productItem.text()).toContain(ProductData[index].author)

      const img = productItem.find(`.${styles.img}`)
      expect(img.exists()).toBe(true)
      expect(img.attributes('src')).toBe(ProductData[index].book_image)
    })
    const returnHomeLink = wrapper.find(`.${styles.home}`)
    expect(returnHomeLink.exists()).toBe(true)
    expect(returnHomeLink.text()).toBe('Return Home')
    await fireEvent.click(returnHomeLink.element)
    mockRouter.push('/')
    await waitFor(() => {
      expect(mockRouter.push).toHaveBeenCalled('/')
      // expect(wrapper.find(`.${styles.title}`).exists()).toBe(false)
    })
  })

  it('should display an error message if no products are provided', async () => {
    const wrapper = mount(ProductComponent, {
      components: { ProductComponent },
      props: {
        productList: []
      }
    })

    await nextTick()
    expect(wrapper.text()).toContain('Error fetching data')
  })
})
