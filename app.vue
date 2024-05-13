<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
<script setup lang="ts">
const { isCustom } = useDevice();

console.log('isCustom', isCustom);
</script>
