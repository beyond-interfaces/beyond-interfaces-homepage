<template>
  <Layout>
    <section id="hero-stage" class="section__spacing">
      <div class="container">
        <h1>
          beyond interfaces entwickelt Business Anwendungen mit höchsten Ansprüchen an Benutzerfreundlich&shy;keit und
          Technik.
        </h1>
        <CrystalIcon class="icon-crystal" />
      </div>
    </section>

    <section id="subtext" class="section__spacing">
      <div class="container">
        <p class="u-text-bold">
          Durch Integration von UX und Software Development schaffen wir Lösungen mit hoher Effizienz und Akzeptanz.
        </p>
      </div>
    </section>

    <section id="services" class="section__spacing">
      <div class="container">
        <div class="service" v-for="edge in $static.allServices.edges" :key="edge.node.id">
          <Service v-bind:title="edge.node.title" :description="edge.node.description" :image="edge.node.image" />
        </div>
      </div>
    </section>

    <SectionFullwidth :bgColor="'secondary'" :image="'~/assets/icons/crystal.svg?inline'">
      <template v-slot:title>
        Wir brauchen Verstärkung!
      </template>
      <template v-slot:description>
        Pariatur et do velit est cupidatat. In commodo cupidatat occaecat nisi mollit mollit ea duis dolore sint velit
        ullamco. Exercitation reprehenderit eu ex anim. Aliquip pariatur eiusmod do cillum eu Lorem ea. Mollit laborum
        id elit esse fugiat excepteur consequat minim consequat ut ad. Velit voluptate minim deserunt non aute voluptate
        veniam labore qui ad deserunt ipsum. Eu ipsum aute est ullamco eiusmod aliquip fugiat laboris ut aliquip
        proident ipsum.
        <div class="link-list">
          <g-link to="/arbeiten-bei-beyond">Arbeiten bei beyond</g-link>
          <g-link to="/jobs">Stellenausschreibungen</g-link>
        </div>
      </template>
    </SectionFullwidth>

    <SectionFullwidth>
      <template v-slot:image>
        <AngularCologneLogo class="logo" />
      </template>
      <template v-slot:title>
        Angular Cologne Meetup
      </template>
      <template v-slot:description>
        Angular Cologne ist der Treffpunkt für die Kölner Angular-Szene. Willkommen ist jeder der sich für Angular
        interessiert und Teil unserer Community werden möchte.
        <div class="link-list">
          <g-link to="https://angular.cologne">angular.cologne</g-link>
        </div>
      </template>
    </SectionFullwidth>
  </Layout>
</template>

<static-query>
query {
  allServices(order: ASC) {
    edges {
      node {
        title
        description
        image
      }
    }
  }
}
</static-query>

<script>
import CrystalIcon from '~/assets/icons/crystal.svg?inline';
import Service from '~/components/Service.vue';
import SectionFullwidth from '~/components/SectionFullwidth.vue';
import AngularCologneLogo from '~/assets/icons/ng-cologne.svg?inline';
// import ArrowIcon from '~/assets/icons/arrow.svg?inline';

export default {
  metaInfo: {
    title: 'UX Design | Web Development',
    meta: [
      {
        name: 'author',
        content: 'beyond interfaces'
      }
    ]
  },
  components: {
    // ArrowIcon,
    AngularCologneLogo,
    CrystalIcon,
    Service,
    SectionFullwidth
  }
};
</script>

<style lang="scss">
$section-min-height: 460px;

section {
  display: flex;
}

.container {
  position: relative;
  max-width: map-get($breakpoints, 'm');
  margin: 0 auto;
  padding: 0 var(--spacing-m);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @include breakpoint('m') {
    padding: var(--spacing-l) var(--spacing-xl);
  }
}

.section__spacing {
  padding: var(--spacing-m) 0;

  @include breakpoint('m') {
    padding: var(--spacing-xl) auto;
  }
}

.link-list {
  margin-top: var(--spacing-m);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  & a {
    font-weight: 700;
  }
}

.container.inverted {
  .link-list {
    & a {
      color: var(--color-white);
    }
  }
}

#hero-stage {
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
    right: -20%;
    bottom: 20px;
    fill: #94cfc0;
    z-index: 0;
    width: 50%;
    transform: rotate(-15deg);

    @include breakpoint('m') {
      width: auto;
      transform: rotate(0);
      right: 20px;
    }
  }
}

#services {
  .service {
    display: flex;
    flex-direction: column;

    & + .service {
      margin-top: var(--spacing-xl);
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

#meetups {
  background: white;
  min-height: $section-min-height;

  & .logo {
    height: 200px;
  }

  & .container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--spacing-m);

    & article {
    }

    @include breakpoint('m') {
      padding: va(--spacing-l) var(--spacing-xl);
    }
  }
}
</style>
