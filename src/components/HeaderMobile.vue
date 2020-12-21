<template>
  <header id="header" :class="{ 'nav-open': navOpen }">
    <div class="header__wrapper">
      <g-link to="/" class="logo-link">
        <BrandLogo class="logo" />
      </g-link>
      <input type="checkbox" :checked="navOpen" @click="toggleMenu()" id="menu" />
      <label for="menu" class="nav-trigger">
        <span class="line"></span>
        <span class="line"></span>
      </label>
      <nav class="nav-container" id="navigation">
        <ul v-show="navOpen" class="nav-list">
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
  props: ['links'],
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

<style lang="scss" scoped>
$logo-width: 160px;
$header-height: 110px;
$navigation-width: 320px;
$hamburger-icon-size: 24px;

#header {
  position: relative;
  max-width: map-get($breakpoints, 'm');
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: $header-height;
  position: relative;
  padding: 0 var(--spacing-m);

  .logo-link {
    margin-left: calc(-1 * var(--spacing-s));
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
  }
}

.nav-trigger {
  position: fixed;
  z-index: 4;
  top: var(--spacing-m);
  right: var(--spacing-m);
  height: $hamburger-icon-size;
  width: $hamburger-icon-size;
  overflow: hidden;
  color: transparent;
  white-space: nowrap;
  text-indent: 100%;
}

.nav-container {
  background: var(--color-primary);
  height: 100%;
  max-width: $navigation-width;
  overflow: auto;
  padding: var(--spacing-m);
  position: fixed;
  right: 0;
  top: 0;
  transform: translateZ(0) translateX(100%);
  transition: transform 0.5s cubic-bezier(0.07, 0.23, 0.34, 1);
  width: calc(100vw - var(--spacing-m) * 2);
  z-index: 3;
}

.nav-open .nav-container {
  transform: translateX(0);
}

.nav-list a {
  color: #1f2b3d;
  display: block;
  padding: var(--spacing-xs) 0;
  text-decoration: none;
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
  height: $hamburger-icon-size;
  margin: 0 auto;
  position: relative;
  width: $hamburger-icon-size;
}

input#menu {
  display: none;
}

.line {
  position: absolute;
  left: 0;
  height: 2px;
  width: $hamburger-icon-size;
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

#menu:checked + .nav-trigger .line:nth-child(1) {
  transform: translateY(4px) rotate(-45deg);
}

#menu:checked + .nav-trigger .line:nth-child(2) {
  transform: translateY(-4px) rotate(45deg);
}
</style>
