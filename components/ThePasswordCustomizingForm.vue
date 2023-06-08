<script setup lang="ts">
const passwordOptionsState = usePasswordOptions();
const generatedPassword = useGeneratedPassword();

const inputLength = ref(14);
const passwordOptions = reactive({
  length: 14,
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: true,
});

passwordOptionsState.value = passwordOptions;

const otherOptions = Object.values(toRefs(passwordOptions)).filter(
  (prop) => toValue(prop.value) !== passwordOptions.length
);

watch(otherOptions, () => {
  generatedPassword.value = generateRandomString(passwordOptions);
});

watch(
  () => passwordOptionsState.value.length,
  (length) => {
    inputLength.value = length;
  }
);

function triggerGeneratePassword() {
  generatedPassword.value = generateRandomString(passwordOptions);
  inputLength.value = passwordOptions.length;
}

function handleLengthChange() {
  const length = Math.max(1, Math.min(128, inputLength.value));
  inputLength.value = length;
  passwordOptions.length = length;
  generatedPassword.value = generateRandomString(passwordOptions);
}
</script>

<template>
  <section class="mx-auto w-full px-4 lg:max-w-4xl">
    <form
      class="mx-auto rounded-md border-2 p-4 shadow-sm dark:border-transparent dark:bg-zinc-800 dark:shadow-none"
      @submit.prevent="handleLengthChange"
    >
      <h3 class="col-span-full mb-8 text-2xl font-bold dark:text-white">
        Password customization
      </h3>
      <div class="grid gap-8 sm:grid-cols-2">
        <div>
          <label
            for="password-length"
            class="mb-4 block text-lg dark:text-white"
          >
            Password length</label
          >
          <div class="flex items-center gap-4">
            <input
              id="password-length"
              v-model="inputLength"
              type="number"
              min="1"
              max="128"
              step="1"
              class="rounded-md border-2 bg-inherit p-2 text-center text-lg shadow-sm dark:border-transparent dark:bg-zinc-700 dark:text-white"
              @change="handleLengthChange"
            />
            <label class="w-full">
              <input
                v-model="passwordOptions.length"
                class="w-full"
                type="range"
                min="1"
                max="128"
                step="1"
                aria-label="Password length"
                @input="triggerGeneratePassword"
            /></label>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <label class="flex items-center gap-2 dark:text-white">
            <input
              v-model="passwordOptions.uppercase"
              type="checkbox"
              class="h-full w-5"
            />
            Uppercase
          </label>

          <label class="flex items-center gap-2 dark:text-white">
            <input
              v-model="passwordOptions.lowercase"
              type="checkbox"
              class="h-full w-5"
            />
            Lowercase
          </label>

          <label class="flex items-center gap-2 dark:text-white">
            <input
              v-model="passwordOptions.numbers"
              type="checkbox"
              class="h-full w-5"
            />
            Numbers
          </label>

          <label class="flex items-center gap-2 dark:text-white">
            <input
              v-model="passwordOptions.symbols"
              type="checkbox"
              class="h-full w-5"
            />
            Symbols
          </label>
        </div>
      </div>
    </form>
  </section>
</template>
