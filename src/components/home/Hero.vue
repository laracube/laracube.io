<template>
    <div class="text-center mx-auto max-w-7xl">
        <h1 class="text-3xl font-normal text-gray-900 sm:text-4xl md:text-5xl">
            <span class="block xl:inline">Open Source</span>
        </h1>
        <h1
            class="
                mt-3
                text-3xl
                font-normal
                text-gray-900
                sm:text-4xl
                md:text-5xl
            "
        >
            <span class="block xl:inline">
                Reporting Platform for Laravel
            </span>
        </h1>
        <p
            class="
                mt-8
                max-w-md
                mx-auto
                text-base text-gray-500
                sm:text-lg
                md:text-xl md:max-w-3xl
            "
        >
            Laracube is great for building internal reports, dashboards or
            adding customer‑facing analytics to existing applications
        </p>
        <div class="mt-8 max-w-md mx-auto sm:flex sm:justify-center">
            <div class="rounded-md">
                <g-link
                    class="
                        w-full
                        flex
                        items-center
                        justify-center
                        px-8
                        py-3
                        border border-none
                        text-base
                        font-medium
                        rounded-md
                        text-white
                        bg-gradient-to-r
                        from-primary-500
                        to-primary-600
                        md:py-4 md:text-lg md:px-10
                    "
                    to="/docs"
                >
                    Get started
                </g-link>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                    href="https://demo.laracube.io/"
                    target="_blank"
                    class="
                        w-full
                        flex
                        items-center
                        justify-center
                        px-8
                        py-3
                        border border-transparent
                        text-base
                        font-medium
                        rounded-md
                        text-primary-600
                        bg-white
                        hover:bg-gray-50
                        md:py-4 md:text-lg md:px-10
                    "
                >
                    Live demo
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hero',
};
</script>
