<template>
  <div class="layout">
    <Header />
    <main id="main">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
.layout {
  margin: 0 auto;
  padding: 0;
}
</style>
