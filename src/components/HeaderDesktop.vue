<template>
  <header id="header">
    <div class="header__wrapper">
      <g-link to="/" class="logo-link">
        <BrandLogo class="logo" />
      </g-link>
      <nav class="header__nav" id="navigation">
        <ul class="nav-list">
          <li v-for="link in links" :key="link.title">
            <g-link class="nav__link" :to="link.url">{{ link.title }}</g-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import BrandLogo from '~/assets/icons/bi-logo.svg?inline';

export default {
  components: { BrandLogo },
  props: ['links']
};
</script>

<style lang="scss" scoped>
$logo-width: 160px;

#header {
  position: fixed;
  width: 100%;
  z-index: 100;
  background: var(--color-white);
  padding: 0;

  .logo-link {
    margin-left: var(--spacing-m);

    @include breakpoint('l') {
      margin-left: -$logo-width / 2;
    }
  }

  .logo {
    width: $logo-width;
  }

  .header__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-s) 0;
    width: 100%;

    @include breakpoint('m') {
      width: map-get($breakpoints, 'm');
      margin-left: calc(50% - #{map-get($breakpoints, 'm')} / 2);
    }
  }
}

.nav-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin-right: var(--spacing-m);

  @include breakpoint('l') {
    margin: 0;
  }

  & li {
    color: var(--color-primary);
    font-weight: bold;

    & + li {
      margin-left: var(--spacing-l);
    }
  }

  & li a {
    text-decoration: none;
    &:hover,
    &.active {
      padding-bottom: var(--spacing-xs);
      border-bottom: 2px solid var(--color-primary);
    }
  }
}
</style>
