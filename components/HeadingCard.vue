<script setup>
const props = defineProps({
  textColor : String

})

</script>
<template>
  <div class="text-4xl font-mono font-bold" :class="props.textColor">
    <slot/>
  </div>
</template>