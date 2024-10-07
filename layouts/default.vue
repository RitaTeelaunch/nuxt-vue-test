<template>
  <div>
    <div :class="styles.headerContainer" class="div">About Product</div>
    <slot />
  </div>
</template>

<script>
import styles from './header.module.css?module'

export default {
  name: 'Default',
  setup() {
    return { styles }
  },
}
</script>

<style scoped>
.div {
  display: flex;
  justify-content: center;
}
</style>
