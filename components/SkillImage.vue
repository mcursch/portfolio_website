<script setup>
const props = defineProps({
  image: String
})

</script>
<template>
  <div>
    <img class="rounded-full " :src="props.image" alt="">

  </div>
</template>