<template>
  <footer id="footer">
    <BrandLogo class="logo" />
    <address class="footer-info u-text-light">
      <div class="address">beyond interfaces GmbH & Co KG<br />Eythstrasse 17<br />51103 Köln</div>
      <div class="contact"><a href="tel:+4922147151007">+49 / 221 / 471 51 007</a><br />info@beyond-interfaces.com</div>
    </address>
  </footer>
</template>

<script>
import BrandLogo from '~/assets/icons/bi-logo.svg';

export default {
  name: 'Footer',
  components: [BrandLogo]
};
</script>

<style lang="scss">
#footer {
  background: #c9cecd;
  max-width: 100%;
  padding: 100px 140px;
  display: flex;
  padding: var(--spacing-s);

  @include breakpoint('m') {
    flex-direction: column;
    padding: 0;
  }

  &-info {
    display: flex;
    align-content: center;
    justify-content: space-around;
    margin-top: 40px;
    font-size: 20px;
    line-height: 30px;
  }

  & .logo #line {
    fill: white;
  }
}
</style>
