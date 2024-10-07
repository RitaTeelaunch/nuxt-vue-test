<template>
  <ProductComponent :product-list="products" />
</template>

<script lang="ts">
import { useAsyncData } from 'nuxt/app'
import ProductComponent from '../src/components/productComponent/ProductComponent.vue'
import { useProductsStore } from '~/server/api/products'

export default {
  components: { ProductComponent },
  async setup() {
    const productsStore = useProductsStore()

    const { data: products } = await useAsyncData('products', async () => {
      await productsStore.fetchProduct()
      return productsStore.products
    })
    return {
      products: products || [],
    }
  },
}
</script>
