<template>
  <div>
    <p :class="styles.store">User Info Page</p>
    <slot />
  </div>
</template>

<script lang="ts">
import styles from './header.module.css'

export default {
  name: 'UserId',
  setup() {
    return { styles }
  },
}
</script>
