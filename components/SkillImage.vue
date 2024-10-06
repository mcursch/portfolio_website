<script setup>
const props = defineProps({
  image: String,
  name: String
})
const testImage = props.image

</script>
<template>
  <div class="w-full h-full overflow-hidden group">
    <div class="relative overflow-hidden">
      <img class="rounded-full object-contain h-20 w-20  " :src="props.image" alt="" >
      <div class="absolute h-full w-full bg-black/70 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full">
        <span class=" text-white">{{props.name}}</span>

      </div>
    </div>
  </div>

</template>
