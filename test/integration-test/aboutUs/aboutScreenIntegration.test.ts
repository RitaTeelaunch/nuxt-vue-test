import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { fireEvent } from '@testing-library/vue'
import { createRouter, createMemoryHistory } from 'vue-router'

import { nextTick } from 'vue'
import styles from '../../../src/components/profileComponent/ProfileComponent.module.css?module'

import AboutScreen from '../../../pages/about.vue'
import '../msw-setup'
import ProfileComponent from '../../../src/components/profileComponent/ProfileComponent.vue'

vi.mock('nuxt/app', () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn() // Mock the push method
  })),
  definePageMeta: vi.fn() // Mock definePageMeta
}))

// Mock the routes
const routes = [
  {
    path: '/user/:id',
    name: 'user',
    component: { template: '<div>User Details</div>' }
  }
]
// Create a mock router
const router = createRouter({
  history: createMemoryHistory(),
  routes
})

describe('AboutScreen Integration Test', () => {
  let pinia: ReturnType<typeof createPinia>
  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)
  })
  it('renders the ProfileComponent inside AboutScreen with mock data from server and remove header', async () => {
    const wrapper = await mount(
      {
        template: `
      <Suspense>
        <AboutScreen />
      </Suspense>
    `,
        components: { AboutScreen }
      },
      {
        global: {
          plugins: [pinia] // Ensure Pinia is available
        },
        route: '/about'
      }
    )
    const removeHeader = vi.fn()

    await new Promise((resolve) => setTimeout(resolve, 2000))
    expect(wrapper.exists()).toBe(true)
    const antButton = wrapper.findComponent({ name: 'a-button' })
    expect(antButton.exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'ProfileComponent' }).exists()).toBe(true)
    const toggleButton = wrapper.find('[data-testid="antdButton"]')
    await toggleButton.trigger('click')
    expect(wrapper.findComponent(ProfileComponent).exists()).toBe(false)
    await toggleButton.trigger('click')
    expect(wrapper.findComponent(ProfileComponent).exists()).toBe(true)

    const header = wrapper.findAll(`.${styles.header}`)
    expect(header.length).toBe(1)
    expect(header[0].text()).toBe('Name Of Owner:')
    const tableDetails = wrapper.findAll(`.${styles.tableDetails}`)
    expect(tableDetails.length).toBe(4)
    expect(tableDetails[0].text()).toBe('Id Username Name Email More Information')
    expect(tableDetails[1].text()).toBe('1BretLeanne GrahamSincere@april.bizDetails')

    // Test the button inside  ProfileComponent
    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
    expect(button.text()).toBe('Details')

    // for all button (3 from get and one from show it)
    const detailsButtons = wrapper.findAllComponents({ name: 'a-button' })
    expect(detailsButtons.length).toBe(4) // Assuming 3 buttons are rendered

    // check details buttons
    const details = wrapper.findAll('[data-testid="buttonDetails"]')
    expect(details.length).toBe(3)

    // to check show it button
    const showItButton = wrapper.findAll(`.${styles.showButton}`)
    expect(showItButton.length).toBe(1)
    expect(showItButton[0].text()).toBe('Show It')

    // Click the last button (show it button to set the animation of header false)
    await fireEvent.click(detailsButtons[3].element) // or this await detailsButtons[3].trigger('click')
    removeHeader()
    expect(wrapper.find(`.${styles.header}`).exists()).toBe(false)
    expect(showItButton[0].text()).toBe('Show It')
    expect(details.length).toBe(3)
  })

  it('should render About Screen and refresh profile', async () => {
    const wrapper = mount({
      template: `
      <Suspense>
        <AboutScreen />
      </Suspense>
    `,
      components: { AboutScreen }
    })

    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Check that the ProfileComponent is rendered initially
    expect(wrapper.findComponent(ProfileComponent).exists()).toBe(true)

    // Click the Refresh Profile button
    const refreshButton = wrapper.find('[data-testid="antdButton"]')
    await refreshButton.trigger('click')

    // Check that the ProfileComponent is not rendered
    expect(wrapper.findComponent(ProfileComponent).exists()).toBe(false)

    // Click the Refresh Profile button again
    await refreshButton.trigger('click')

    // Check that the ProfileComponent is rendered again
    expect(wrapper.findComponent(ProfileComponent).exists()).toBe(true)
  })

  it('should render AboutScreen, click on details user and navigate to dynamic user', async () => {
    // const mockShowInfo = vi.fn()
    const mockShowInfo = vi.fn(() => router.push(`/user/2`))

    const wrapper = mount({
      template: `
      <Suspense>
        <AboutScreen />
      </Suspense>
    `,
      components: { AboutScreen },
      setup() {
        // provide('router', mockRouter)
        return { mockShowInfo }
      },
      global: {
        plugins: [pinia]
      }
    })
    await nextTick()
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Find the "Details" button for the user with id 1
    const detailsButtons = wrapper.findAll('[data-testid="buttonDetails"]')
    expect(detailsButtons.length).toBe(3)
    expect(detailsButtons.length).toBeGreaterThan(0)
    await detailsButtons[2].trigger('click')
    await fireEvent.click(detailsButtons[2].element)
    await mockShowInfo()
    expect(mockShowInfo).toHaveBeenCalled()
    expect(router.currentRoute.value.path).toBe('/user/2')
  })
})
