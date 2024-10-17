import '../msw-setup'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { nextTick, ref } from 'vue'
import PlanetScreen from '../../../pages/planet.vue'

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
describe('PlanetScreenIntegration test', () => {
  let pinia: ReturnType<typeof createPinia>

  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)
    mockRouter.push.mockClear()
  })

  it('should render planet screen ', async () => {
    const wrapper = await mount({
      components: { PlanetScreen },
      template: `
        <Suspense>
          <PlanetScreen />
        </Suspense>
      `,
      global: {
        plugins: [mockRouter]
      }
    })

    await nextTick()

    await new Promise((resolve) => setTimeout(resolve, 1000))
    expect(wrapper.exists()).toBe(true)

    const title = wrapper.find('[data-testid="title"]')
    expect(title.text()).toBe('Planet Name:')

    const planets = wrapper.findAll('p')
    expect(planets.length).toBe(6)
    expect(planets[0].text()).toBe('- sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
    expect(planets[1].text()).toBe('- qui est esse')

    const nuxtLink = wrapper.find('a')
    expect(nuxtLink.exists()).toBe(true)
    expect(nuxtLink.text()).toBe('Return Home')
    await nuxtLink.trigger('click')
    mockRouter.push('/')
    expect(mockRouter.push).toHaveBeenCalledTimes(1)
    expect(mockRouter.push).toHaveBeenCalledWith('/')
  })
})
