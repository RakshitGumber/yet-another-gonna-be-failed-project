<script setup lang="ts">
useSeoMeta({
  title: "YAGBFP",
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});

// const { data: home } = await useAsyncData(() =>
//   queryCollection("content").path("/").first()
// );
// useSeoMeta({
//   title: home.value?.title,
//   description: home.value?.description,
// });
</script>

<template>
  <Navbar />
  <Hero />
  <hr class="mx-24 h-0.5" />
  <!-- <ContentRenderer v-if="home" :value="home" />
  <div v-else>Home not found</div> -->
</template>
