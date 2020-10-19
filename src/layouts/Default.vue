<template>
    <div class="layout flex flex-col items-center content-between h-screen overflow-x-hidden relative">
        <header id="header" class="w-full">
            <div class="container flex md:items-center justify-between pt-8 pb-12 flex-col md:flex-row">
                <div class="flex items-center justify-between md:w-auto w-full">
                    <g-link to="/">
                      <Logo/>
                    </g-link>
                    <button v-on:click="toggleNav()" class="burger-menu md:hidden" aria-label="Toggle Navigation">
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                </div>
                <nav v-bind:class="{ 'hidden': !isNavigationOpen, 'flex': isNavigationOpen }" class="list-reset md:flex flex-col justify-start md:flex-row">
                    <!-- <g-link class='mr-6' to='/team'>Team</g-link> -->
                    <g-link class='mr-6' to='/jobs'>Jobs</g-link>
                    <g-link class='mr-6' to='/technologien'>Technologien</g-link>
                    <g-link class='mr-6' to='/trainings'>Trainings</g-link>
                </nav>
            </div>
        </header>

        <main id="main" class="w-full flex-1">
            <slot/>
        </main>

        <footer id="footer" class="relative w-full mt-32 pb-12 md:pb-0">
            <FooterBackground class="absolute h-full md:h-64 w-full"/>
            <div class="container md:flex pt-12">
                <div id="footer-contact" class="md:w-3/5 md:flex leading-tight">
                    <div class="footer-contact__address md:flex-1 flex">
                        <LineElement class="fill-current text-bi-pink z-10"/>
                        <p class="opacity-50 pl-3">
                            beyond interfaces GmbH & Co KG<br>
                            Eythstrasse 17<br>
                            51103 Köln
                        </p>
                    </div>

                    <div class="footer-contact__phone md:flex-1 pt-12 md:pt-0 flex">
                        <LineElement class="fill-current text-bi-purple z-10"/>
                        <p class="opacity-50 pl-3">
                            T. 0221 - 471 51 007<br>
                            M. <a href="mailto:info@beyond-interfaces.com">info@beyond-interfaces.com</a>
                        </p>
                    </div>
                </div>

                <div id="footer-nav" class="md:w-2/5 pt-12 md:pt-20 md:pl-20 flex">
                    <div class="footer-nav__links flex">
                        <LineElement class="fill-current text-bi-blue z-10"/>
                        <nav class="flex flex-wrap opacity-50 pl-3">
                            <g-link class="w-full" to="/impressum">Impressum</g-link>
                            <!-- <g-link class="w-full" to="/datenschutz">Datenschutzerklärung</g-link> -->
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import Logo from '~/assets/bif_logo.svg';
import LineElement from '~/assets/line.svg';
import FooterBackground from '~/assets/footer-background.svg';

export default {
    components: {
        FooterBackground,
        Logo,
        LineElement
    },
  data: () => ({
      isNavigationOpen: false,
  }),
  methods: {
    toggleNav: function () {
      this.isNavigationOpen = !this.isNavigationOpen;
    }
  }
}
</script>

<style>
@tailwind preflight;
@tailwind components;
@tailwind utilities;

body {
    font-family: ff-dax-pro-wide,sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 18px;
    margin: 0;
    padding: 0;
    line-height: 2;
}

h1 {
  font-size: config('textSizes.4xl');
  font-weight: 400;
}

h2 {
  font-size: config('textSizes.3xl');
  font-weight: 400;
}

h3 {
  font-size: config('textSizes.2xl');
  font-weight: 400;
}

h4 {
  font-size: config('textSizes.1xl');
  font-weight: 400;
}

@media only screen and (min-device-width: config('screens.md')) {
  h1 {
    font-size: config('textSizes.5xl');
    font-weight: 400;
  }

  h2 {
    font-size: config('textSizes.4xl');
    font-weight: 400;
  }

  h3 {
    font-size: config('textSizes.3xl');
    font-weight: 400;
  }

  h4 {
    font-size: config('textSizes.2xl');
    font-weight: 400;
  }
}


a {
  color: config('colors.bi-blue');
  text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

.burger-menu {
  width: 30px;
  outline: 0;
}

.burger-menu > span {
  display: block;
  width: 100%;
  height: 3px;
  margin-bottom: 6px;
  background: #000;
}
</style>
