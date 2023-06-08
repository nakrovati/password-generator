<script setup>
useServerSeoMeta({
  title: "404 | Page Not Found",
});
</script>

<template>
  <div class="h-full min-h-screen bg-slate-50 dark:bg-zinc-900">
    <div class="flex flex-col">
      <section class="mx-auto mt-8 px-4 text-center lg:max-w-4xl">
        <h1 class="text-5xl font-bold dark:text-white">
          Error 404 - Password not found!
        </h1>

        <p class="mt-4 text-lg dark:text-white">
          Oops! Looks like you've stumbled onto an error page. Something went
          wrong with our password search. But don't worry, we're here to help
          you find that perfect password again!
        </p>

        <NuxtLink
          to="/"
          class="mx-auto mt-4 block w-fit rounded-md bg-blue-500 px-6 py-2 text-white"
          >Go Home</NuxtLink
        >
      </section>
    </div>
  </div>
</template>
