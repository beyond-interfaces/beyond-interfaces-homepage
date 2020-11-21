<template>
  <div><ArrowRight /> <g-link to="https://www.meetup.com/de-DE/angular-cologne/">angular.cologne</g-link></div>
</template>

<script>
import ArrowRight from '~/assets/icons/icon_arrow--right.svg?inline';

export default {
  components: { ArrowRight },
  data() {
    return {
      navOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.navOpen = !this.navOpen;
    }
  }
};
</script>

<style lang="scss"></style>
