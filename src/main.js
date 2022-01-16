// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
require("~/assets/css/style.css");
require("~/assets/css/github-markdown.css");
import NProgress from "nprogress";
import "nprogress/nprogress.css";
require("fontsource-poppins");

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  router.beforeEach((to, from, next) => {
    if (!to.hash && typeof document !== "undefined") {
      NProgress.start();
    }
    next();
  });

  router.afterEach((to, from) => {
    if (!to.hash && typeof document !== "undefined") {
      NProgress.done();
    }
  });
}
