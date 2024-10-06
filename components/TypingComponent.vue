<script lang="ts" setup>
import VueWriter from 'vue-writer'

</script>

<template>
  <div>
    hi mom
    <ClientOnly>
      <VueWriter :array="['hello world']"></VueWriter>


    </ClientOnly>

  </div>
</template>

<style scoped></style>
