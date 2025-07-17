<script setup>
import UserLayoutVue from "../../layouts/UserLayout.vue";
import Product from "@/components/Product.vue";
import { useProductStore } from "@/stores/user/product";
import { ref , onMounted , computed , watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()
const searchText = ref('')
const productStore = useProductStore()

watch(() => route.query.q ,(newValue , oldValue) =>    {
   searchText.value = newValue
},{immediate : true})

const filterProducts = computed(() => {
    return productStore.filterProducts(searchText.value)
})
</script>

<template>
  <UserLayoutVue>
    <div class="text-3xl m-4">Search : <b>{{ searchText }}</b></div>
    <Product
    :products = "filterProducts"></Product>
  </UserLayoutVue>
</template>
