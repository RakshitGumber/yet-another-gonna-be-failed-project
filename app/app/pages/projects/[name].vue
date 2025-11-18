<script setup lang="ts">
const route = useRoute();
const name = route.params.name;
</script>

<template>
  <div class="font-bold">{{ name }} - Project</div>
  <ul>
    <li><NuxtLink to="/">home</NuxtLink></li>
    <li><NuxtLink to="/projects">back</NuxtLink></li>
  </ul>
</template>
