<template>
  <section
    class="bg-center bg-no-repeat bg-cover bg-gray-700 bg-blend-multiply text-white"
    :style="bgImage"
  >
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
      <h1
        class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl"
      >
        JOB JUNCTION
      </h1>
      <p class="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48">
        We make workers and companies click.
      </p>
      <div
        class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
      >
        <a href="#" class="btn-primary" aria-label="Get started with Job Junction">
          Get started
          <ArrowIcon class="w-3.5 h-3.5 ml-2" aria-hidden="true" />
        </a>
        <a href="#" class="btn-secondary" aria-label="Learn more about Job Junction">
          Learn more
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ArrowIcon from "@/components/icons/ArrowIcon.vue";

const bgImage = {
  backgroundImage:
    "url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')",
};
</script>

<style>
.btn-primary {
  @apply inline-flex items-center py-3 px-5 text-base font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900;
}

.btn-secondary {
  @apply inline-flex items-center py-3 px-5 text-base font-medium text-white border border-white rounded-lg hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-400;
}
</style>
