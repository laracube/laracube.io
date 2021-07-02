<template>
    <div class="relative bg-gray-100 bg-opacity-50 overflow-hidden relative">
        <navigation></navigation>
        <main class="mt-16 px-8 sm:mt-24">
            <slot />
            <footer-comp></footer-comp>
        </main>
    </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navigation from '~/components/global/Navigation';
import FooterComp from '../components/global/Footer';
export default {
    components: {
        FooterComp,
        Navigation,
    },
};
</script>
