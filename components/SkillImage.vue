<script setup>
const props = defineProps({
  image: String
})

</script>
<template>
  <img class="rounded h-20 w-20" :src="props.image" alt="">
</template>