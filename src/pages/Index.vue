<template>
    <Layout>
        <hero></hero>
        <screenshot></screenshot>
        <tech-stack></tech-stack>
        <features></features>
        <cta-comp></cta-comp>
    </Layout>
</template>

<script>
import Hero from '~/components/home/Hero';
import Screenshot from '~/components/home/Screenshot';
import TechStack from '~/components/home/TechStack';
import Features from '~/components/home/Features';
import CtaComp from '~/components/home/Cta';
export default {
    components: { Features, TechStack, Screenshot, Hero, CtaComp },
    metaInfo: {
        title: 'Home',
    },
};
</script>
