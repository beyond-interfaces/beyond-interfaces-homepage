<template>
  <header id="header">
    <g-link to="/" class="logo-link">
      <BrandLogo class="logo" />
    </g-link>
    <nav class="nav">
      <input type="checkbox" v-bind:checked="navOpen" id="menu" />
      <label for="menu" class="menu">
        <span class="line"></span>
        <span class="line"></span>
      </label>
      <ul v-show="navOpen" class="nav-list">
        <li><g-link class="nav__link" to="/">Home</g-link></li>
        <li><g-link class="nav__link" to="/about/">About</g-link></li>
        <li><g-link class="nav__link" to="/jobs/">Jobs</g-link></li>
        <li><g-link class="nav__link" to="/impressum/">Impressum</g-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import BrandLogo from '~/assets/icons/bi-logo.svg';

export default {
  name: 'Header',
  components: [BrandLogo],
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

<style lang="scss">
$logo-width: 160px;
$header-height: 80px;

#header {
  max-width: map-get($breakpoints, 'm');
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: $header-height;
  position: relative;
  padding: 0 var(--spacing-m);

  @include breakpoint('m') {
    padding: 0;
  }

  .logo-link {
    margin-top: var(--spacing-m);
    margin-left: -$logo-width / 2;
  }

  .logo {
    width: $logo-width;
  }
}

.nav-list {
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  & li a {
    text-decoration: none;
    color: grey;
    &:hover {
      color: var(--color-primary);
    }
  }
}

label.menu {
  display: block;
  width: 24px;
  height: 24px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}

input#menu {
  display: none;
}

.line {
  position: absolute;
  left: 0;
  height: 2px;
  width: 24px;
  background: var(--color-grey);
  border-radius: 2px;
  display: block;
  transition: 0.5s;
  transform-origin: center;
}

.line:nth-child(1) {
  top: 8px;
}
.line:nth-child(2) {
  top: 16px;
}

#menu:checked + .menu .line:nth-child(1) {
  transform: translateY(4px) rotate(-45deg);
}

#menu:checked + .menu .line:nth-child(2) {
  transform: translateY(-4px) rotate(45deg);
}
</style>
