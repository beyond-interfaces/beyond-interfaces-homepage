<template>
  <Layout>
    <section id="hero-stage" class="section__spacing">
      <div class="container">
        <h1>the beyond formula</h1>
        <p>
          Den Kern unserer Philosphie bilden eine Reihe von Mantras die wir als “the beyond formula” zusammengefasst
          haben:
        </p>
      </div>
    </section>

    <section class="fullwidth">
      <div class="container">
        <article class="article" v-for="section in sections" :key="section.title">
          <div class="character">{{ section.character }}</div>
          <div class="description">
            <h2>{{ section.title }}</h2>
            <p>{{ section.description }}</p>
          </div>
        </article>
      </div>
    </section>

    <SectionFullwidth name="remote-first">
      <template v-slot:title>
        Get in Touch
      </template>
      <template v-slot:description>
        <p>
          Das klingt genau nach dem was du machen möchtest? Dann ping uns doch einfach direkt an. Wir freuen uns auf
          dich!
        </p>
      </template>
    </SectionFullwidth>
  </Layout>
</template>

<script>
import SectionFullwidth from '~/components/SectionFullwidth.vue';

export default {
  components: {
    SectionFullwidth
  },
  data() {
    return {
      sections: [
        {
          character: 'B',
          title: 'Focus on Solutions. No Bullshit',
          description:
            'Wir konzentrieren uns auf Businesslösungen die die beste Usability für den Nutzer und den größten Businessvalue für den Kunden ermöglichen.'
        },
        {
          character: 'E',
          title: 'One Team: der Kunde und wir',
          description:
            'Wir arbeiten eng mit unseren Kunden zusammen um in einem gemeinsamen Prozess Anforderungen richtig zu verstehen und zielgerichtet umzusetzen.'
        },
        {
          character: 'Y',
          title: 'Fewer People, More Experts',
          description:
            'Für jedes Projekt haben wir den richtigen Experten im Team um Herausforderungen in Lösungen zu übersetzen.'
        },
        {
          character: 'O',
          title: 'Designer + Developer = ❤️',
          description:
            'Bei uns sitzen technisch versierte UI/UX Designer und erfahrene Software-Entwickler an einem Tisch.'
        },
        {
          character: 'N',
          title: 'Mock it up before you f**k it up!',
          description:
            'Interaktive Prototypen helfen uns, Lösungsideen frühzeitig zu validieren und zu verbessern bevor sie in Code gegossen werden.'
        },
        {
          character: 'D',
          title: 'beyond the interface',
          description:
            'Der Blick über den Tellerrand, das Hinterfragen von Etabliertem und die Offenheit für Neues. We are beyond!'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  gap: var(--spacing-l);
}
.article {
  display: flex;
  align-items: center;
  height: 300px;
  gap: var(--spacing-xl);
}
.character {
  font-weight: 700;
  font-size: 300px;
  color: var(--color-grey);
}
.fullwidth {
  background: var(--color-background-dark);
}
</style>
