<template>
    <Documentation :subtitles="subtitles" :links="links" :showOnThisPage="true">
        <VueRemarkContent
            class="markdown-body remark-post pl-4"
        ></VueRemarkContent>
    </Documentation>
</template>

<page-query>
query ($id: ID!) {
  post: documentation (id: $id) {
    title
    content
    headings (depth: h1) {
      value
    }
    subtitles: headings {
      depth
      value
      anchor
    }
  }
}
</page-query>

<script>
import links from '~/data/documentation.yaml';
import Documentation from '~/layouts/Documentation';

export default {
    components: {
        Documentation,
    },
    computed: {
        links() {
            return links;
        },
        subtitles() {
            // Remove h1, h4, h5, h6 titles
            let subtitles = this.$page.post.subtitles.filter(function (
                value,
                index,
                arr,
            ) {
                return [2].includes(value.depth);
            });
            return subtitles;
        },
    },
    metaInfo() {
        const { title, headings } = this.$page.post;

        return {
            title: title || (headings.length ? headings[0].value : undefined),
        };
    },
};
</script>
