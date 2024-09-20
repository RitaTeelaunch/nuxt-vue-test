<template>
  <div>
    <p>Name Of Owner:</p>
    <button @click="loadUsers">Show It</button>
    <p v-if="loadingUser">Loading ...</p>
    <p v-if="errorUser">{{errorUser}}</p>
    <div v-for="item in fullName" :key="item.id">
      {{ item.id }} : {{ item.email }}
    </div>
  </div>
</template>
<script lang="ts">
import { PropType } from 'vue'

export default {
  name: 'ProfileComponent',
  props: {
    fullName: {
      type: Array as PropType<{ id: number; email: string }[]>,
      required: true,
    },
    loadUsers:{
      type:Function,
      required:true
    },
    loadingUser:{
      type:Boolean,
      required: true
    },
    errorUser:{
      type:String,
      required:true
    }
  },

}
</script>
