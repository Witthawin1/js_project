<script setup>
import UserLayoutVue from "../../layouts/UserLayout.vue";
</script>

<template>
  <UserLayoutVue>
    <h1 class="text-3xl font-bold m-4">Shopping Vart</h1>
    <div class="flex">
        <div class="flex-auto w-64 bg-base-200 p-4">
            <div class="flex">
                <div class="flex-1">
                    <img class="w-full p-10" src="https://picsum.photos/seed/picsum/200/300" alt="" srcset="">
                </div>
                <div class="flex-1">
                    <div class="flex flex-col h-full justify-between">
                <div>
                    <div>Flower</div>
                    <div>Just Flower</div>
                    <div>100 B</div>
                </div>
                <div>In stock</div>
            </div>
                </div>
            </div>
            
        </div>
        <div class="flex-auto w-32 p-4 bg-slate-200">Summary</div>
    </div>
  </UserLayoutVue>
</template>
