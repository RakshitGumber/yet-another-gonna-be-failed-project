<script setup lang="ts">
const route = useRoute();
const name = route.params.name as string;

useHead({
  title: `${name} | YAGBFP`,
});
</script>

<template>
  <div class="font-bold">{{ name }} - Project</div>
  <ul>
    <li><NuxtLink to="/">home</NuxtLink></li>
    <li><NuxtLink to="/projects">back</NuxtLink></li>
  </ul>
</template>
