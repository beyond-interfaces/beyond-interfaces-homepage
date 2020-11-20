<template>
  <Layout>
    <section id="hero-stage">
      <div class="container">
        <h1>
          beyond interfaces entwickelt Business Anwendungen mit höchsten Ansprüchen an Benutzerfreundlich&shy;keit und
          Technik.
        </h1>
        <Crystal class="icon-crystal" />
      </div>
    </section>

    <section id="subtext">
      <div class="container">
        <p class="u-text-bold">
          Durch Integration von UX und Software Development schaffen wir Lösungen mit hoher Effizienz und Akzeptanz.
        </p>
      </div>
    </section>

    <section id="services">
      <div class="container">
        <div class="service" v-for="entry in entries" :key="entry.title">
          <div class="service__container">
            <article>
              <h2>{{ entry.title }}</h2>
              <p>{{ entry.description }}</p>
            </article>
          </div>
          <div class="service__image">
            <component :is="entry.svg" :key="entry.title"></component>
          </div>
        </div>
      </div>
    </section>

    <section id="arbeiten-bei-beyond">
      <div class="container">
        <h2>
          Arbeiten bei beyond
        </h2>
        <p>
          Consectetur veniam ea non fugiat. Consequat proident dolore esse occaecat ullamco tempor sint enim Lorem
          consectetur velit. Aute aliqua nulla mollit excepteur deserunt laboris proident ipsum esse nisi aliqua. Enim
          reprehenderit enim sit commodo id exercitation non nulla. Sunt pariatur ut non ullamco veniam aliquip do
          consectetur incididunt Lorem esse aute in commodo. Deserunt sunt ut consequat culpa et sit sint voluptate.
        </p>
        <g-link to="/about-us">Arbeiten bei beyond</g-link>
      </div>
    </section>

    <section id="meetups">
      <div class="container">
        <p>
          Mollit sit veniam pariatur quis pariatur pariatur dolor qui labore nulla adipisicing consectetur ea do.
          Cupidatat voluptate id esse nisi aliquip aute. Non ullamco reprehenderit ut eu ut ipsum minim voluptate
          occaecat consectetur consequat.
        </p>
      </div>
    </section>
  </Layout>
</template>

<script>
import Crystal from '~/assets/icons/crystal-01.svg';
import SolutionEngineering from '~/assets/icons/illu-solutionengineering.svg';
import SoftwareModernization from '~/assets/icons/illu-softwaremodernization.svg';
import UX from '~/assets/icons/illu-ux.svg';
import Training from '~/assets/icons/illu-training.svg';

export default {
  components: {
    Crystal,
    SolutionEngineering,
    SoftwareModernization,
    UX
  },
  data: function() {
    return {
      entries: [
        {
          title: 'Solution Engineering',
          description: `Die Art und Weise wie Software entwickelt, veröffentlicht und betrieben wird unterliegt einem steten Wandel. Wir denken lösungsoffen, ergebnisorientiert und technologieunabhängig – aber nicht in Hypes.`,
          svg: SolutionEngineering
        },
        {
          title: 'Software Modernization',
          description: `Jahrelang gewachsene IT-Infrastrukturen und veraltete Softwaresysteme sind oft Hemmschuh für Flexibilität und
        Innovation. Durch unsere Erfahrung aus zahlreichen Modernisierungsprojekten wissen wir, wie man bestehende
        Systemlandschaften nachhaltig umbaut.`,
          svg: SoftwareModernization
        },
        {
          title: 'UX/UI Design',
          description: `Die User Experience ist heute wesentlicher Erfolgsfaktor jedes digitalen Produktes oder Service. Wir sind
        überzeugt, daß Unternehmenssoftware die gleiche Benutzerfreundlichkeit und Ästhetik wie Consumer-Apps verdient
        und leben das in unseren Projekten.`,
          svg: UX
        },
        {
          title: 'Training / Consulting',
          description: `Der Wandel muss nicht zuletzt auch in den Köpfen derjenigen stattfinden, die ihn treiben sollen. Unsere auf
        Vorwissen und Projekt abgestimmten Schulungsangebote schaffen Basiswissen, unterstützen beim Kick-off oder
        begleiten Teams über das gesamte Projekt.`,
          svg: Training
        }
      ]
    };
  }
};
</script>

<style lang="scss">
section {
  display: flex;
}

.container {
  position: relative;
  max-width: map-get($breakpoints, 'm');
  margin: 0 auto;
  padding: 0 var(--spacing-m);

  @include breakpoint('m') {
    padding: var(--spacing-l) var(--spacing-xl);
  }
}

#hero-stage {
  margin: var(--spacing-xl) auto;

  & .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 360px;
  }

  h1 {
    z-index: 2;
  }

  .icon-crystal {
    position: absolute;
    right: 20px;
    bottom: 20px;
    fill: #94cfc0;
    z-index: 0;
    width: auto;
  }
}

#services {
  margin: var(--spacing-xl) 0;
  .service {
    display: flex;
    flex-direction: column;
    margin-top: var(--spacing-xl);

    &__container {
      flex: 1 1 100%;

      @include breakpoint('m') {
        flex-basis: 50%;
      }
    }

    &__image {
      display: flex;
      align-items: center;
      width: 100%;

      @include breakpoint('m') {
        width: 50%;
      }

      svg {
        width: 100%;
      }
    }

    @include breakpoint('m') {
      flex-direction: row;

      &:nth-child(odd) {
        .service__container {
          order: 0;
          article {
            padding: 0 60px 0 0;
          }
        }
      }

      &:nth-child(even) {
        .service__container {
          order: 1;
          article {
            padding: 0 0 0 60px;
          }
        }
      }
    }
  }
}

#arbeiten-bei-beyond {
  background: var(--color-secondary);
  color: var(--color-white);

  & .container {
    padding: var(--spacing-m);

    @include breakpoint('m') {
      padding: va(--spacing-l) var(--spacing-xl);
    }
  }
}

#meetups {
  background: white;
  & .container {
    padding: var(--spacing-m);

    @include breakpoint('m') {
      padding: va(--spacing-l) var(--spacing-xl);
    }
  }
}
</style>
