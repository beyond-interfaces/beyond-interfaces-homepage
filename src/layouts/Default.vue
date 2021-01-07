<template>
  <div class="layout">
      <HeaderMobile :links="links" />
    <main id="main">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import HeaderDesktop from '~/components/HeaderDesktop.vue';
import HeaderMobile from '~/components/HeaderMobile.vue';
import Footer from '~/components/Footer.vue';
import { mobileDetection } from '~/mixins/mobileDetection';

export default {
  components: {
    HeaderDesktop,
    HeaderMobile,
    Footer
  },
  mixins: [mobileDetection],
  data() {
    return {
      isMobileLayout: false,
      links: [
        {
          title: 'Arbeiten bei beyond',
          url: '/arbeiten-bei-beyond'
        },
        {
          title: 'Jobs',
          url: '/jobs'
        }
        // { title: '/about-us/', url: 'Über uns' }
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      this.onResizeWindow();
    },100)
    if (process.isClient) {
      window.addEventListener('resize', this.onResizeWindow);
    }
  },
  destroyed() {
    if (process.isClient) {
    window.removeEventListener('resize', this.onResizeWindow);
    }
  },
  methods: {
    onResizeWindow(e) {
      this.isMobileLayout = this.isMobile();
    }
  }
};
</script>

<style lang="scss">
.layout {
  margin: 0 auto;
  padding: 0;
}
@include breakpoint('m') {
  #main {
    padding-top: 120px;
  }
}
</style>
