<template>
    <div class="py-6" :class="additionalClass">
        <nav class="mx-auto px-4 sm:px-6 max-w-7xl">
            <div class="grid grid-cols-2 gap-4 items-center">
                <div>
                  <g-link to="/" class="flex items-center">
                     <g-image
                        src="~/assets/images/logo.svg"
                        class="h-8 w-auto sm:h-10">
                     </g-image>
                        <span class="pl-2 font-bold"> laracube </span>
                  </g-link>
                </div>
                <div class="text-right">
                    <div class="hidden md:block">
                        <div class="space-x-10">
                          <g-link class="font-medium text-gray-500 hover:text-gray-900" to="/docs">
                            Documentation
                          </g-link>
                            <a
                                href="https://github.com/laracube"
                                target="_blank"
                                class="
                                    font-medium
                                    text-gray-500
                                    hover:text-gray-900
                                "
                            >
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
    name: 'Navigation',
    props: {
        additionalClass: {
            required: false,
        },
        navClass: {
            required: false,
            default: 'max-w-7xl',
        },
    },
};
</script>
