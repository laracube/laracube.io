// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const postcssPlugins = [require("tailwindcss"), require("autoprefixer")];

module.exports = {
  siteName: "Laracube",
  plugins: [
    {
      use: "@gridsome/vue-remark",
      options: {
        index: ["README"],
        baseDir: "./docs/1-x",
        pathPrefix: "/docs/1-x",
        typeName: "DocumentationVersionOne",
        template: "./src/templates/DocumentationPageVersionOne.vue",
        plugins: [["gridsome-plugin-remark-shiki", { theme: "material-theme-palenight", skipInline: true }]],
        remark: {
          autolinkHeadings: {
            content: {
              type: "text",
              value: "#",
            },
          },
        },
      },
    },
    {
      use: "gridsome-plugin-gtag",
      options: {
        config: {
          id: "GTM-M8Z9FSB",
        },
      },
    },
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
};
