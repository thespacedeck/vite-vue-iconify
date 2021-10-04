<template>
  <div>
    <p>Iconify</p>
    <Icon
      :icon="`@troop:tt-flags:pt`"
      :inline="true"
      class="w-6 h-6 bg-white rounded-full"
    />
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
