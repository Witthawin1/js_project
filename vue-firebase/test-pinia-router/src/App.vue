<script setup>
import { RouterLink, RouterView  } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <div>
      <RouterLink :to="{name : 'home'}">Home</RouterLink>
       <RouterLink to="/about">Profile</RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<style scoped>

</style>
