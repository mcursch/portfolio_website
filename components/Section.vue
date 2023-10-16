<script setup>
const props = defineProps({
  color : String,
  text : String,
  textColor : String
})

</script>
<template>
  <div class="w-full" :class="props.color"  >
    <div class="container mx-auto">
      <HeadingCard class="pt-4" :textColor="props.textColor">
        {{ props.text }}
      </HeadingCard>
      <div :class="props.textColor">
        <slot/>
      </div>
    </div>
    </div>
</template>