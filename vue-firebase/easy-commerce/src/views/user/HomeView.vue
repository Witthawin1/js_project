<script setup>
import UserLayoutVue from "../../layouts/UserLayout.vue";
import { useProductStore } from '../../stores/user/product.js'
import Product from "@/components/Product.vue";

const productStore = useProductStore()
console.log(productStore.list);

</script>

<template>
  <UserLayoutVue>
    <div class="hero bg-base-200 h-96">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Hello there</h1>
          <p class="py-6">
            Trust your intuition!
          </p>
        </div>
      </div>
    </div>

    <!--product shelf-->
    <Product :products="productStore.list"></Product>

  </UserLayoutVue>
</template>
