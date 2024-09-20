<template>
  <div >
    <p :class="styles.container">WELCOME</p>
    <nuxt/>
    <p :class="styles.container">Nice to meet you</p>
  </div>
</template>

<script>
import styles from './header.module.css?module'
export default {
  name: 'HeaderLayout',
  data(){
    return{
      styles
    }
  }
}
</script>
