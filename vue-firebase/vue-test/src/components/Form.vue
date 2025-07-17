<script setup>

import { computed, ref , watch} from 'vue';

const fullname = ref('')
const upperFullname = ref('')
watch(fullname,(newFullname , oldFullname) => {
  upperFullname.value = newFullname.toUpperCase()
})

</script>


<template>
  <div>
    <div>Fullname : {{ upperFullname }}</div>
    <input type="text" v-model="fullname">
  </div>
</template>

<style>

</style>