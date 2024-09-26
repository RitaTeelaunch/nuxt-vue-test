<template>
  <ProductComponent :product-list="product"/>
</template>
<script lang="ts">
import ProductComponent from '~/src/components/productComponent/ProductComponent.vue'

export default {
  components: { ProductComponent },
  layout:'header',
  async asyncData({ store }) {
    await store.dispatch('products/fetchProduct')
  },
  computed: {
    product() {
      return this.$store.getters['products/products']
    },
    loadingProduct() {
      return this.$store.getters['products/loadingProduct']
    },
    errorProduct() {
      return this.$store.getters['products/errorProduct']
    },
  },
  // methods: {
  //   fetchProduct() { //for client side
  //     return this.$store.dispatch('products/fetchProduct')
  //   },
  // },
}
</script>
