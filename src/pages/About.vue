<template>
  <Layout>
    <section id="hero-stage" class="section__spacing">
      <div class="container">
        <h1>Über beyond</h1>
        <h2>Ursprung</h2>
        <p>
          Christoph Höller und Tilman Reiff fanden über die Leidenschaft am Mountainbiken zueinander und erlebten in
          einem gemeinsamen Kundenprojekt die Effizienz und Qualität, die aus der Synergie von moderner
          Softwareentwicklung und professionellem UX entsteht. Weitere Entwickler wurden ins Team geholt und lernten
          schnell die Vorteile der interdisziplinären Zusammenarbeit aus UX/UI, Frontend und Backend schätzen. Über
          “word of mouth” wuchs die Gruppe und es entstand die Idee einer Firmengründung.
        </p>
        <p>
          In Martina Höfflin fanden Christoph und Tilman eine dritte Geschäftspartnerin, die mit ihrer langjährigen
          Erfahrung als Projektmanagerin für Onlineplattformen und der geteilten Leidenschaft für gutes UX das Team
          bereicherte. Im Januar 2019 legten die Drei durch Gründung der beyond interfaces GmbH & Co KG mit Sitz in Köln
          den Grundstein für eine gemeinsame berufliche Zukunft.
        </p>
      </div>
    </section>

    <SectionFullwidth
      name="schwerpunkt"
      data-aos="fade-up"
      :bgColor="'var(--color-secondary)'"
      :image="'~/assets/icons/crystal.svg?inline'"
    >
      <template v-slot:title>
        Schwerpunkt
      </template>
      <template v-slot:description>
        Unser Schwerpunkt liegt seither auf Systemarchitektur und Benutzerfreundlichkeit von Geschäftsanwendungen. Das
        mittlerweile 10-köpfige Team aus erfahrenen UX Designern, Frontendentwicklern und Softwarearchitekten konnte
        seine Expertise in diesem Bereich in diversen agilen Modernisierungs- und Entwicklungsprojekten weiter ausbauen.
      </template>
    </SectionFullwidth>

    <SectionFullwidth name="remote-first">
      <template v-slot:title>
        Remote first
      </template>
      <template v-slot:description>
        <p>
          In dem Corona-bedingten Wechsel ins Homeoffice sahen wir eine Chance um das Unternehmen organisatorisch neu
          auszurichten: mit “Remote First” haben wir uns unsere Erfahrung in der verteilten Zusammenarbeit zu Nutze
          gemacht um dauerhaft remote zu arbeiten. Die Anwesenheit im Büro geschieht seither auf freiwilliger Basis oder
          “on-site as a tool” gezielt für Meetings und Events.
        </p>

        <p>
          Den Wegfall von Teeküchen-Tratsch und Schulterblick kompensieren wir erfolgreich durch ganztägig offene
          Voicecalls, dediziertes Pairing sowie regelmässige virtuelle Kaffeepausen und Knowledge Sharing Sessions. Mit
          der Organisation der Meetups Angular.Cologne und Design Systems Cologne suchen wir auch über den eigenen
          Tellerrand hinaus den Austausch und die Vernetzung mit der Community.
        </p>
      </template>
    </SectionFullwidth>

    <section id="gruender" class="section__spacing">
      <div class="container">
        <h1>Die Gründer</h1>
        <section>
          <Person
            v-for="edge in $static.allPersons.edges"
            :key="edge.node.fullName"
            v-bind:name="edge.node.name"
            v-bind:fullName="edge.node.fullName"
            v-bind:description="edge.node.description"
            v-bind:imagePath="edge.node.imagePath"
          />
        </section>
      </div>
    </section>

    <section id="hq-slider" class="section__spacing">
      <div class="container">
        <ImageSlider v-bind:folder="'hq'" />
      </div>
    </section>
  </Layout>
</template>

<static-query>
query {
  allPersons(order: ASC) {
    edges {
      node {
        name
        fullName
        description
        imagePath
      }
    }
  }
}
</static-query>

<script>
import SectionFullwidth from '~/components/SectionFullwidth.vue';
import Person from '~/components/Person.vue';
import ImageSlider from '~/components/ImageSlider.vue';

export default {
  metaInfo: {
    title: 'About us'
  },
  components: {
    SectionFullwidth,
    Person,
    ImageSlider
  }
};
</script>
<style lang="scss" scoped>
#gruender {
  display: flex;
  flex-direction: column;

  section {
    margin-top: var(--spacing-xl);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xl);
  }
}
</style>
