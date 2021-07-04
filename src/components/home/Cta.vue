<template>
    <div class="bg-gray-50">
        <div
            class="
                max-w-7xl
                mx-auto
                py-12
                lg:py-16 lg:flex lg:items-center lg:justify-between
            "
        >
            <h2
                class="
                    text-3xl
                    font-normal
                    tracking-tight
                    text-gray-900
                    sm:text-3xl
                "
            >
                <span class="block">Get started with Laracube</span>
            </h2>
            <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div class="inline-flex rounded-md shadow">
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
                <div class="ml-3 inline-flex rounded-md shadow">
                    <a
                        href="https://github.com/laracube/laracube/projects/1"
                        target="_blank"
                        class="
                            inline-flex
                            items-center
                            justify-center
                            px-5
                            py-3
                            border border-transparent
                            text-base
                            font-medium
                            rounded-md
                            text-primary-600
                            bg-white
                            hover:bg-indigo-50
                        "
                    >
                        Roadmap
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cta',
};
</script>

<style scoped></style>
