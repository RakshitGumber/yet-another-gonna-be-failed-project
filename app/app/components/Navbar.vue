<template>
  <header class="h-32 px-24 flex items-center justify-between">
    <div class="p-4">
      <h1
        class="text-heading font-heading tracking-widest font-semibold text-4xl"
      >
        YAGBFP
      </h1>
    </div>
    <nav class="px-4 flex gap-6 items-center justify-end">
      <div class="flex items-center gap-3">
        <NuxtLink
          to="/blogs"
          class="px-4 py-2 text-xl font-medium hover:underline underline-offset-2"
          >Blogs</NuxtLink
        >
        <NuxtLink
          to="/learnings"
          class="px-4 py-2 text-xl font-medium hover:underline underline-offset-2"
          >Learnings</NuxtLink
        >
        <NuxtLink
          to="/projects"
          class="px-4 py-2 text-xl font-medium hover:underline underline-offset-2"
          >Projects</NuxtLink
        >
        <div class="flex items-center">
          <!-- TODO: hover effect, button print resume  -->
          <button class="text-2xl px-4 py-2 cursor-pointer">
            <Icon name="solar:file-broken" :ssr="true" class="flex" />
          </button>
          <!-- TODO: hover effect, Theme Change  -->
          <button class="text-2xl px-4 py-2 cursor-pointer">
            <Icon name="solar:moon-broken" :ssr="true" class="flex" />
          </button>
        </div>
      </div>
      <!-- TODO: animate/connect -->
      <button
        class="text-background font-semibold text-xl py-3 px-6 bg-success rounded-xl cursor-pointer"
      >
        Let's Work
      </button>
    </nav>
  </header>
</template>
