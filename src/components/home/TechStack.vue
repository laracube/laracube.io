<template>
  <div class="">
    <div class="max-w-7xl mx-auto py-12">
      <p class="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">Laracube is build on</p>
      <div class="mt-6 grid grid-cols-1 gap-0.5 md:grid-cols-3 lg:mt-8">
        <div class="col-span-1 flex justify-center py-8 px-8 bg-white">
          <g-image class="max-h-12" src="~/assets/images/laravel-logo.svg" alt="Laravel" />
        </div>

        <div class="col-span-1 flex justify-center py-8 px-8 bg-white">
          <g-image class="max-h-12" src="~/assets/images/vue-logo.svg" alt="VueJs" />
        </div>
        <div class="col-span-1 flex justify-center py-8 px-8 bg-white">
          <g-image class="max-h-12" src="~/assets/images/vuetify-logo.svg" alt="Vuetify" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TechStack",
};
</script>
