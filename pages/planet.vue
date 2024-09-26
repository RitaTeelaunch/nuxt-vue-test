<template>
  <div :style="{ marginLeft: '50px' }">
    <div v-if="error">Error fetching data: {{ error.message }}</div>
    <div v-else style="color:cadetblue; font-size: 50px; font-family:DMSans-Regular,serif" >Planet Name:</div>
    <p v-for="item in books" :key="item.id">- {{ item.title }}</p>
    <NuxtLink
      to="/"
      :style="{
        color: 'cadetblue',
        display: 'flex',
        justifyContent: 'end',
        marginRight: '30px',
        marginTop: '50px',
      }"
      >Return Home</NuxtLink
    >
  </div>
</template>
<script lang="ts">
import axios from 'axios'

export default {
  layout: 'header',
  async asyncData() {
    // this for ssr
    try {
      const { data } = await axios('https://jsonplaceholder.typicode.com/posts')
      console.log('data', data)
      return {
        books: data.slice(0, 6),
        loading: false,
        error: null,
      }
    } catch (error) {
      return {
        books: [],
        loading: false,
        error,
      }
    }
  },
}
// setup() { //this is client side if we don't call the fetch data i don't see the result
//   const books = ref([]);
//   const error = ref(null);
//
//   // Fetch data when the component is mounted
//   const fetchData = async () => {
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//       books.value = response.data; // Assign response data to the books ref
//       console.log('Books fetched:', books.value);
//     } catch (err) {
//       error.value = err; // Handle the error if any
//       console.log('Error fetching data:', err);
//     }
//   };
//
//   // Use onMounted to fetch data after the component is mounted
//   onMounted(() => {
//     fetchData();
//   });
//
//   return {
//     books,
//     error,
//   };
// },
</script>
