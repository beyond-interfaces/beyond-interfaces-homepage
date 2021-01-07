<template>
  <footer id="footer">
    <div class="container">
      <header>
        <BrandLogo class="logo" />
      </header>
      <section>
        <address class="footer-info u-text-light">
          <div class="address">Eythstrasse 17<br />51103 Köln</div>
          <div class="contact">
            info@beyond-interfaces.com<br />0221 / 471 510 07
          </div>
        </address>
        <nav class="footer-links">
          <ul class="site-links">
            <li><g-link to="/">Home</g-link></li>
            <li><g-link to="/arbeiten-bei-beyond">Arbeiten bei beyond</g-link></li>
            <li><g-link to="/jobs">Jobs</g-link></li>
            <li><g-link to="/impressum">Impressum</g-link></li>
          </ul>
        </nav>
        <div class="footer-social">
          <ul class="social-links">
            <li>
              <g-link to="https://www.xing.com/companies/beyondinterfacesgmbh%26co.kg"><XingIcon /></g-link>
            </li>
            <li>
              <g-link to="https://medium.com/@beyondinterfaces/about"><MediumIcon /></g-link>
            </li>
            <li>
              <g-link to="https://www.instagram.com/beyondinterfaces/"><InstagramIcon /></g-link>
            </li>
            <li>
              <g-link to="https://www.linkedin.com/company/beyond-interfaces/"><LinkedInIcon /></g-link>
            </li>
          </ul>
        </div>
      </section>
    </div>
    <CrystalIcon class="icon-crystal" />
  </footer>
</template>

<script>
import BrandLogo from '~/assets/icons/bi-logo--white.svg?inline';
import CrystalIcon from '~/assets/icons/crystal.svg?inline';
import XingIcon from '~/assets/icons/icon_xing.svg?inline';
import MediumIcon from '~/assets/icons/icon_medium.svg?inline';
import InstagramIcon from '~/assets/icons/icon_instagram.svg?inline';
import LinkedInIcon from '~/assets/icons/icon_linkedin.svg?inline';

export default {
  components: { BrandLogo, CrystalIcon, XingIcon, MediumIcon, LinkedInIcon, InstagramIcon }
};
</script>

<style lang="scss" scoped>
$footer-height: 460px;
$logo-width: 160px;

* {
  font-size: 16px;
  line-height: 24px;
}

header {
  width: 100%;
}

section {
  display: flex;
  flex-direction: column;

  & > * {
    z-index: 1;
  }

  @include breakpoint('s', 'max') {
    .footer-info {
      order: 3;
    }
    .footer-links {
      order: 1;
    }
    .footer-social {
      order: 2;
    }
  }

  @include breakpoint('m') {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}

.contact {
  margin-top: var(--spacing-s);
}

.icon-crystal {
  position: absolute;
  right: -10%;
  bottom: -10%;
  width: 50vw;
  height: 40vh;
  fill: white;
  z-index: 0;
}

#footer {
  background: var(--color-background-dark);
  max-width: 100%;
  padding: var(--spacing-xl) auto;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;

  @include breakpoint('m') {
    flex-direction: column;
    min-height: $footer-height;
  }

  .logo {
    width: $logo-width;

    @include breakpoint('m') {
      margin-left: -$logo-width / 2;
    }
  }

  &-info {
    display: flex;
    align-content: center;
    justify-content: space-around;
    margin-top: 40px;
    font-size: 20px;
    line-height: 30px;
  }
}

.site-links {
  list-style: none;
  padding: 0;

  & a {
    padding: 0;
    margin: 0;
  }
}

.social-links {
  list-style: none;
  padding: 0;
  display: flex;

  li + li {
    margin-left: var(--spacing-s);
  }

  svg {
    fill: var(--color-grey);
    width: 24px;
    height: 24px;
  }
}
</style>
