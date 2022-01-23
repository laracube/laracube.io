<template>
  <div class="py-4 px-8" :class="additionalClass">
    <nav class="mx-auto" :class="navClass">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        <div class="flex items-center sm:place-content-start place-content-center">
          <g-link to="/" class="sm:place-content-start place-content-center flex items-center">
            <g-image src="~/assets/images/logo.svg" class="h-8 w-auto sm:h-10"> </g-image>
            <span class="pl-2 font-bold"> laracube </span>
          </g-link>
        </div>
        <div class="text-right hidden md:block">
          <div class="">
            <div class="space-x-10">
              <g-link class="font-medium text-gray-500 hover:text-gray-900" to="/docs"> Documentation </g-link>
              <a href="https://github.com/laracube" target="_blank" class="font-medium text-gray-500 hover:text-gray-900">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    additionalClass: {
      required: false,
    },
    navClass: {
      required: false,
      default: "max-w-7xl",
    },
  },
};
</script>
