<script setup lang="ts">
const { data: posts } = await useAsyncData("project", () =>
  queryCollection("projects").all()
);
</script>

<template>
  <div>Projects</div>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
    </li>
    <li><NuxtLink to="/">Home</NuxtLink></li>
  </ul>
</template>
