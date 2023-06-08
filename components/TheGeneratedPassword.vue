<script setup lang="ts">
import PhArrowClockwise from "~/assets/icons/PhArrowClockwise.vue";
import PhCopy from "~/assets/icons/PhCopy.vue";

const passwordOptions = usePasswordOptions();
const generatedPassword = useGeneratedPassword();

function copyPassword() {
  navigator.clipboard.writeText(generatedPassword.value);
}

function generateNewPassword() {
  generatedPassword.value = generateRandomString(passwordOptions.value);
}

function syncLength() {
  passwordOptions.value.length = generatedPassword.value.length;
}

onMounted(() => {
  generateNewPassword();
});
</script>

<template>
  <section class="mx-auto w-full px-4 lg:max-w-4xl">
    <div class="relative flex items-center">
      <input
        v-model="generatedPassword"
        type="text"
        class="mx-auto w-full rounded-md border-2 bg-inherit py-4 pl-4 pr-20 font-mono text-2xl shadow-sm dark:border-transparent dark:bg-zinc-800 dark:text-white dark:shadow-none"
        aria-label="Generated password"
        @input="syncLength"
      />
      <div class="absolute right-4 flex gap-2">
        <button
          aria-label="Generate random password"
          type="button"
          class="h-6 w-6 dark:text-white"
          @click="copyPassword"
        >
          <PhCopy class="h-auto w-full"></PhCopy>
        </button>
        <button
          aria-label="Generate random password"
          type="button"
          class="h-6 w-6 dark:text-white"
          @click="generateNewPassword"
        >
          <PhArrowClockwise class="h-auto w-full"></PhArrowClockwise>
        </button>
      </div>
    </div>
  </section>
</template>
