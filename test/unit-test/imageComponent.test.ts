import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { fireEvent, screen } from '@testing-library/vue'

import ImageComponent from '../../src/components/imageComponent/ImageComponent.vue'
import styles from '../../src/components/imageComponent/ImageComponent.module.css?module'

// Mocking window.matchMedia
beforeAll(() => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: vi.fn(), // Mock the addListener function
        removeListener: vi.fn() // Mock the removeListener function
      }
    }
})

describe('ImageComponent render', () => {
  it('should render correctly with props', async () => {
    const returnAboutMock = vi.fn()
    const opelLoginModalMock = vi.fn()

    const wrapper = mount(ImageComponent, {
      components: {
        ImageComponent
      },
      props: {
        title: 'Title Website',
        section: 'Section Title',
        description: 'Description Text',
        returnAbout: returnAboutMock,
        opelLoginModal: opelLoginModalMock,
        isContentVisible: true,
        msg: 'Shopping Website',
        login: vi.fn(), // Mock function for login
        cancel: vi.fn(), // Mock function for cancel
        form: { username: '', password: '' },
        FirstImage: '/public/assets/Receiver.png',
        SecondImage: '/public/assets/Receiver.svg',
        isAnimated: true
      }
    })

    wrapper.vm.isAnimated = true // Ensure isAnimated is true
    await wrapper.vm.$nextTick() // Wait for the next tick

    // Check if the component is rendered
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.props().msg).toBe('Shopping Website')
    expect(wrapper.props().title).toBe('Title Website')

    expect(wrapper.props().section).toContain('Section Title')
    expect(wrapper.props().description).toContain('Description Text')

    // test <p> with class style
    const preTitles = wrapper.findAll(`.${styles.preTitle}`)
    expect(preTitles.length).toBe(2)
    expect(preTitles[0].text()).toBe('Section Title')
    expect(preTitles[1].text()).toBe('Description Text')

    expect(screen.getByText('Shopping Website')).toBeInTheDocument()

    // Test <a-Image>
    const aImage = wrapper.findComponent({ name: 'a-image' })
    expect(aImage.exists()).toBe(true)
    expect(aImage.props('src')).toBe(wrapper.vm.FirstImage)

    // Test all img
    const imgElements = wrapper.findAll('img')
    expect(imgElements.length).toBe(2)
    expect(imgElements[0].attributes('src')).toBe('/public/assets/Receiver.png')
    expect(imgElements[1].attributes('src')).toBe('/public/assets/Receiver.svg')

    // Test NuxtLink
    const productLink = wrapper.find('[data-testid="productLink"]')
    expect(productLink.exists()).toBe(true)
    expect(productLink.text()).toBe('About Product')
    expect(productLink.attributes('to')).toBe('/product')

    // Test NuxtLink
    const planetLink = wrapper.find('[data-testid="planetLink"]')
    expect(planetLink.exists()).toBe(true)
    expect(planetLink.text()).toBe('About Planet')
    expect(planetLink.attributes('to')).toBe('/planet')

    // Test <a-button> from antd
    const aboutUsButton = wrapper.findAllComponents({ name: 'a-button' })
    expect(aboutUsButton.length).toBe(2)
    expect(aboutUsButton[0].text()).toBe('About us')
    // expect(aboutUsButton[1].text()).toBe('User')
    // Check for the exact text inside the button without extra elements (like icon )
    const userButtonText = aboutUsButton[1].text().replace('user', '').trim()
    expect(userButtonText).toBe('User')
    // click on user button
    await fireEvent.click(aboutUsButton[1].element)
    opelLoginModalMock()

    // open user modal and check the content
    expect(screen.getByText('Shopping Website')).toBeInTheDocument()
    expect(screen.getByText('click to show content')).toBeInTheDocument()
    // click to open form animation
    await fireEvent.click(screen.getByText('click to show content'))
    // Check if the form is rendered
    const form = wrapper.findComponent({ name: 'a-form' })
    expect(form.exists()).toBe(true)

    // check existing to label Username
    expect(screen.getByText('Username')).toBeInTheDocument()
    // check existing to label Password
    expect(screen.getByText('Password')).toBeInTheDocument()

    // test existing of the button
    const buttons = wrapper.findAllComponents({ name: 'a-button' })
    expect(buttons.length).toBe(4)
    expect(buttons[2].text()).toBe('Login')
    expect(buttons[3].text()).toBe('Cancel')
    // click on cancel button
    await fireEvent.click(buttons[3].element)
    // check after click on cancel the index page is open
    expect(screen.getByText('Shopping Website')).toBeInTheDocument()
  })
})
