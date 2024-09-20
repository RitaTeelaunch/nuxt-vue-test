<template>
  <div>
<!--    <p>{{msg}}</p>-->

    <div v-if="error">Error fetching data: {{ error.message }}</div>
    <div v-else>Fetched Data: </div>
<!--    <div v-if="loading">Loading...-->
<!--      <p>Planet title : {{title}}</p>-->
<!--      <p>Planet body : {{body}}</p>-->
<!--    </div>-->
<!--<div v-else>-->
    <p>Planet Name:</p>
    <div v-for="item in books" :key="item.id">{{item.id}}: {{item.title}}</div>

</div>
<!--  </div>-->
</template>

<script lang="ts">
import axios from 'axios'
// import { onMounted, ref } from 'vue'

     export default {

        // async setup() {
       //   // Create a reactive ref for the message
       //   const msg = ref('');
       //
       //   // `onMounted` lifecycle hook
       //   onMounted(() => {
       //     msg.value = 'Hello World';
       //   });
       //
       //   // Return the reactive property for use in the template
       //   return {
       //     msg
       //   };
       // },
       async asyncData() { // this for ssr
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
     };
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
