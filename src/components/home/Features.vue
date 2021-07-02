<template>
    <div>
        <div
            class="
                max-w-7xl
                mx-auto
                py-16
                lg:py-12 lg:grid lg:grid-cols-3 lg:gap-x-8
            "
        >
            <div>
                <p class="text-3xl font-extrabold text-gray-900">
                    Simple Yet Powerful
                </p>
                <p class="mt-4 text-lg text-gray-500">
                    Laracube is a beautifully designed reporting platform for
                    Laravel. It can serve as a building blocks for any
                    analytical app.
                </p>
            </div>
            <div class="mt-12 lg:mt-0 lg:col-span-2">
                <dl
                    class="
                        space-y-10
                        sm:space-y-0
                        sm:grid
                        sm:grid-cols-2
                        sm:gap-x-6
                        sm:gap-y-10
                        lg:gap-x-8
                    "
                >
                    <div
                        class="relative"
                        v-for="(item, index) in features"
                        :key="index"
                    >
                        <dt>
                            <svg
                                class="absolute h-6 w-6 text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <p
                                class="
                                    ml-9
                                    text-lg
                                    leading-6
                                    font-medium
                                    text-gray-900
                                "
                            >
                                {{ item.title }}
                                <span
                                    v-if="item.comingSoon === 1"
                                    class="
                                        inline-flex
                                        items-center
                                        px-3
                                        py-0.5
                                        rounded-full
                                        text-xs
                                        font-medium
                                        bg-gray-100
                                        text-gray-800
                                    "
                                >
                                    Coming Soon
                                </span>
                            </p>
                        </dt>
                        <dd class="mt-2 ml-9 text-base text-gray-500">
                            {{ item.description }}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Features',
    data: function () {
        return {
            features: [
                {
                    title: 'Code Driven',
                    description:
                        'Configure your entire Analytic dashboard with simple PHP code. None of your Laracube configuration is stored in the database.',
                },
                {
                    title: 'Grid System',
                    description:
                        'Laracube comes with a 12 point grid system built using flexbox. The grid is used to create specific layouts within an application’s content.',
                },
                {
                    title: 'Visualizations',
                    description:
                        'Laracube supports many visualizations from simple table, paginated table, big numbers etc and many more to come.',
                },
                {
                    title: 'Authorization',
                    description:
                        'Laracube allows fine-grained authorization support to determine the user`s ability to view any report.',
                    comingSoon: 1,
                },
                {
                    title: 'Filters',
                    description:
                        'Write filters for your report to offer your users quick glances at different segments of your data.',
                    comingSoon: 1,
                },
                {
                    title: 'Charts Visualizations',
                    description:
                        'Laracube uses ChartJs for building chart visualization. Go out there and build something beautiful.',
                    comingSoon: 1,
                },
                {
                    title: 'Export Results',
                    description:
                        'Export generated reports to PDF, and CSV or send them via email! Laracube uses your application email driver so no additional configuration is needed.',
                    comingSoon: 1,
                },
                {
                    title: 'Caching',
                    description:
                        'Laracube supports caching of reporting based on the user and filters to improve the performance of your analytic dashboard.',
                    comingSoon: 1,
                },
                {
                    title: 'Custom Visualizations',
                    description:
                        'Need a Visualization that isn’t included with Laracube? No problem - Laracube allows you to generate a custom visualization and take total control over its implementation and design.',
                    comingSoon: 1,
                },
            ],
        };
    },
};
</script>
