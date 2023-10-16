<script setup>
const props = defineProps({
  title: String
})
</script>
<template>
  <div class=" border-2 border-solid border-black rounded-lg h-[200px]">
    <h1 class="font-bold">
      {{ props.title }}

    </h1>
    <slot/>
  </div>
</template>