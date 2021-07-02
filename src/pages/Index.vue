<template>
    <Layout>
        <hero></hero>
        <screenshot></screenshot>
        <tech-stack></tech-stack>
        <features></features>
    </Layout>
</template>

<script>
import Hero from '~/components/home/Hero';
import Screenshot from '~/components/home/Screenshot';
import TechStack from '~/components/home/TechStack';
import Features from '~/components/home/Features';
export default {
    components: { Features, TechStack, Screenshot, Hero },
    metaInfo: {
        title: 'Home',
    },
};
</script>
