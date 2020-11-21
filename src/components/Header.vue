<template>
  <header id="header" :class="{ 'nav-open': navOpen }">
    <g-link to="/" class="logo-link">
      <BrandLogo class="logo" />
    </g-link>
    <input type="checkbox" :checked="navOpen" @click="navOpen = !navOpen" id="menu" />
    <label for="menu" class="nav-trigger">
      <span class="line"></span>
      <span class="line"></span>
    </label>
    <nav class="nav-container" id="navigation">
      <header>
        <h2>
          Navigation
        </h2>
      </header>
      <ul v-show="navOpen" class="nav-list">
        <li><g-link class="nav__link" to="/">Home</g-link></li>
        <li><g-link class="nav__link" to="/arbeiten-bei-beyond/">Arbeiten bei beyond</g-link></li>
        <li><g-link class="nav__link" to="/jobs/">Jobs</g-link></li>
        <li><g-link class="nav__link" to="/impressum/">Impressum</g-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import BrandLogo from '~/assets/icons/bi-logo.svg?inline';

export default {
  components: { BrandLogo },
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
    margin-left: calc(-1 * var(--spacing-s));
    margin-top: var(--spacing-m);
    @include breakpoint('m') {
      margin-top: var(--spacing-m);
      margin-left: -$logo-width / 2;
    }
  }

  .logo {
    width: $logo-width;
  }
}

.nav-list {
  list-style: none;
  padding: 0;

  & li a {
    text-decoration: none;
    color: grey;
    &:hover {
      color: var(--color-primary);
    }
  }
}

.nav-trigger {
  position: fixed;
  z-index: 4;
  top: var(--spacing-m);
  right: var(--spacing-m);
  height: 24px;
  width: 24px;
  overflow: hidden;
  color: transparent;
  white-space: nowrap;
  text-indent: 100%;
}

.nav-container {
  position: fixed;
  z-index: 3;
  top: 0;
  right: 0;
  height: 100%;
  width: 90%;
  max-width: 460px;
  padding: var(--spacing-m);
  background: var(--color-primary);
  overflow: auto;
  transform: translateZ(0);
  transform: translateX(100%);
  transition: transform 0.5s cubic-bezier(0.07, 0.23, 0.34, 1);
}
.nav-open .nav-container {
  transform: translateX(0);
}

.nav-list a {
  display: block;
  padding: var(--spacing-xs) 0;
  text-decoration: none;
  color: #1f2b3d;
  transform: translateZ(0);
}

.nav-open .nav-list a {
  animation: slide-in 0.4s 0.2s backwards;
}

.nav-open .nav-list li:nth-of-type(2) a {
  animation-delay: 0.3s;
}

.nav-open .nav-list li:nth-of-type(3) a {
  animation-delay: 0.4s;
}

.nav-open .nav-list li:nth-of-type(4) a {
  animation-delay: 0.5s;
}

.nav-open .nav-list li:nth-of-type(5) a {
  animation-delay: 0.6s;
}

@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateX(80px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
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
