<template>
  <div :class="styles.container">
    <p :class="styles.headerContainer">WELCOME TO OUR STORE</p>
    <slot />
    <p :class="styles.footerContainer">WELCOME</p>
  </div>
</template>

<script>
import styles from './header.module.css?module'

export default {
  name: 'HeaderLayout',
  data() {
    return {
      styles,
    }
  },
}
</script>
