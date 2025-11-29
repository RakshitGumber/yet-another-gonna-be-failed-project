<template>
  <section
    id="hero"
    class="w-screen px-24 py-14 items-end flex justify-between"
  >
    <div class="p-[26px] flex gap-14">
      <div class="relative w-[228px] h-[250px]">
        <div
          id="avatar-caricature"
          class="absolute top-1/2 left-1/2 -translate-1/2 z-30 w-48 -rotate-8 rounded-lg cursor-pointer"
          style="border: 8px solid #b8bacfb3"
        >
          <img src="/images/avatar/caricature.png" />
        </div>
        <div
          id="avatar-real"
          style="border: 8px solid #b8bacfb3"
          class="absolute top-1/2 left-1/2 -translate-1/2 z-20 w-48 rotate-12 rounded-lg cursor-pointer"
        >
          <img src="/images/avatar/realpfp.png" />
        </div>
        <div
          class="absolute w-48 h-48 bg-bgsecond rounded-full blur-2xl top-2/3 left-1/2 -translate-1/2 z-10"
        ></div>
      </div>
      <div class="flex h-full flex-col">
        <div class="py-6 flex flex-col gap-1">
          <span class="text-2xl">I am</span>
          <h1 class="text-heading font-heading text-5xl font-semibold">
            Rakshit Gumber
          </h1>
        </div>
        <div class="flex">
          <span class="text-2xl">22 - Fullstack Developer</span>
        </div>
      </div>
    </div>
    <div class="flex h-full justify-end px-6 py-9 text-4xl gap-9">
      <div>
        <NuxtLink to="">
          <Icon
            name="simple-icons:medium"
            :ssr="true"
            class="flex cursor-pointer"
          />
        </NuxtLink>
      </div>
      <div>
        <NuxtLink to="">
          <Icon
            name="simple-icons:github"
            :ssr="true"
            class="flex cursor-pointer"
        /></NuxtLink>
      </div>
      <div>
        <NuxtLink to="">
          <Icon name="simple-icons:x" :ssr="true" class="flex cursor-pointer" />
        </NuxtLink>
      </div>
      <div>
        <NuxtLink to="">
          <Icon
            name="simple-icons:linkedin"
            :ssr="true"
            class="flex cursor-pointer"
        /></NuxtLink>
      </div>
    </div>
  </section>
</template>
