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
        <div
          class="service"
          v-for="(edge, index) in $static.allServices.edges"
          :key="edge.node.id"
        >
          <Service v-bind:title="edge.node.title" :description="edge.node.description" :image="edge.node.image" />
        </div>
      </div>
    </section>

    <SectionFullwidth
      :name="'arbeiten-bei-beyond'"
      :bgColor="'var(--color-secondary)'"
      :inverted="true"
      :image="'~/assets/icons/crystal.svg?inline'"
    >
      <template v-slot:title>
        Wir brauchen Verstärkung!
      </template>
      <template v-slot:description>
        Wir sind ständig auf der Suche nach Verstärkung für unser Team. Anstelle von schnellem Wachstum setzen wir dabei
        auf Mitarbeiter*innen, die unsere Leidenschaft für gute und benutzerfreundliche Software genauso teilen wir wir
        selbst.
        <div class="link-list">
          <ArrowLink color="white" :text="'Arbeiten bei beyond'" :href="'/arbeiten-bei-beyond'"  />
          <ArrowLink
            color="white"
            :text="'Stellenausschreibungen'"
            :href="'/jobs'"
          />
        </div>
      </template>
    </SectionFullwidth>

    <SectionFullwidth :name="'meetups'" >
      <template v-slot:image>
        <AngularCologneLogo />
      </template>
      <template v-slot:title>
        Angular Cologne Meetup
      </template>
      <template v-slot:description>
        <p>
          Angular Cologne ist der Treffpunkt für die Kölner Angular-Szene. Willkommen ist jeder der sich für Angular
          interessiert und Teil unserer Community werden möchte.
        </p>
        <ArrowLink text="angular.cologne" href="https://angular.cologne/" />
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
import ArrowLink from '~/components/ArrowLink.vue';
import AngularCologneLogo from '~/assets/icons/ng-cologne.svg?inline';

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
    AngularCologneLogo,
    CrystalIcon,
    Service,
    SectionFullwidth,
    ArrowLink
  }
};
</script>
