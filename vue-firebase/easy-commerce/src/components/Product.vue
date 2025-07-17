<template>
      <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-4 gap-4">
    <div v-for="product in products" :key="product" class="card w-full bg-base-100 shadow-sm">
      <figure>
        <img class="w-full" :src="product.imageUrl" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ product.name }}</h2>
        <p>{{ product.about }}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
    </section>
</template>

<script setup>
    import { defineProps } from 'vue';

    defineProps({
        products : Array
    })
</script>

<style>

</style>