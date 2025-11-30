<script setup lang="ts">
const route = useRoute();
const name = route.params.name as string;

const { data: posts } = await useAsyncData("blog", () =>
  queryCollection("projects").path(route.path).first()
);

useSeoMeta({
  title: posts.value?.title,
  description: posts.value?.description,
});
</script>

<template>
  <div class="font-bold">{{ name }} - Project</div>
  <ul>
    <li><NuxtLink to="/">home</NuxtLink></li>
    <li><NuxtLink to="/projects">back</NuxtLink></li>
  </ul>
  <ContentRenderer v-if="posts" :value="posts" />
  <div v-else>Home not found</div>
</template>
