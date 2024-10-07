<template>
  <div>
    <pre :class="styles.footerContainer">Owner</pre>
    <slot />
  </div>
</template>

<script>
import styles from './header.module.css?module'

export default {
  name: 'About',
  setup() {
    return {
      styles,
    }
  },
}
</script>
