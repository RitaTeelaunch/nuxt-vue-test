<template >
  <div>
  <NuxtLogo/>
  <div v-for="item in books" :key="item.id">{{item.id}}: {{item.title}}</div>
  </div>
</template>
<script lang="ts">
import axios from 'axios'
import NuxtLogo from '~/src/components/NuxtLogo.vue'
export default {
  components:NuxtLogo,
  async asyncData() {
    try {
      const { data } = await axios('https://jsonplaceholder.typicode.com/posts');
      console.log('data', data)
      return {
        books: data,
        loading: false,
        error: null
      };
    } catch (error) {
      return {
        books: [],
        loading: false,
        error
      };
    }
  },
}
</script>
