<script setup>
import { ref } from 'vue'
const count = ref(0)
    const addNumber = () => {
        count.value += 1
    }

    defineProps({
        messageText : {
            type : String
        }
    })
</script>
<template>
  <div>
    <div>Hello {{ messageText }}</div>
    {{ count }} <button @click="addNumber()">add</button>
  </div>
</template>

<style>

</style>