<script setup lang="ts">
useSeoMeta({
  title: "My Amazing Site",
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div class="font-bold">Hello</div>
  <ul>
    <li><NuxtLink to="/learnings">learning</NuxtLink></li>
    <li><NuxtLink to="/projects">Projects</NuxtLink></li>
  </ul>
</template>
