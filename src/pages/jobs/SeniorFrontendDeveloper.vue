<template>
  <Layout>
     <section class="container u-padding-bottom-none">
      <ArrowLink :text="'Senior Software-Engineer & Solution-Architect • Backend (m/w/d)'" :href="'/jobs/senior-backend-developer'" :color="'var(--color-grey)'"/>
      <ArrowLink :text="'Senior Software-Engineer & Solution-Architect • Frontend (m/w/d)'" :href="'/senior-frontend-developer'" :color="'var(--color-primary)'"/>
    </section>

    <section class="container u-padding-bottom-none">
      <h1>Senior Software-Engineer & Solution-Architect • Frontend (m/w/d)</h1>
    </section>

    <SectionFullwidth :name="'we'" >
      <template v-slot:title>
        Wir bieten dir…
      </template>
      <template v-slot:description>
        <p>
          <ul>
            <li>ein abgeschlossenes technisches Studium oder eine vergleichbare Ausbildung</li>
            <li>lanjährige Erfahrung in der Entwicklung von Web-Anwendungen auf Basis von Angular und TypeScript</li>
            <li>fundiertes Know-How im Styling von Web-Anwendungen mit (S)CSS und Kenntnisse von gängigen CSS-Architekturen (BEM / IT-CSS)</li>
            <li>Kenntnisse im Bereich Testautomatisierung für Web-Applikationen (Cypress / Wiremock / Contract-Testing)</li>
            <li>erste Erfahrungen im Bereich CI / CD, DevOps und Cloud-Architecture (insbesondere AWS)</li>
            <li>ein grundlegendes Verständnis für moderne Software-Architekturen und gutes Schnittstellen-Design</li>
            <li>einen hohen Qualitätanspruch an deine eigene Arbeit</li>
            <li>die Bereitschaft dein Wissen mit anderen zu teilen (z.B. im Rahmen eines Mentorings)</li>
            <li>keine Angst davor alte Gewohnheiten über Bord zu werfen und Lösungen zu hinterfragen</li>
          </ul>
        </p>
      </template>
    </SectionFullwidth>

    <SectionFullwidth :name="'you'" :bgColor="'var(--color-background-darkest)'" :inverted=true :shifted=true>
      <template v-slot:title>
        Du hast…
      </template>
      <template v-slot:description>
        <p>
          <ul>
            <li>ein abgeschlossenes technisches Studium oder eine vergleichbare Ausbildung</li>
            <li>langjährige Erfahrung in der Entwicklung von komplexen Business-Anwendungen auf Basis von Java oder Kotlin</li>
            <li>tiefgehendes Know-How in mindestens einem der folgenden Frameworks: Spring / Spring Boot / Vert.x /</li>
            <li>fundierte Kenntnisse im Aufbau moderner Software-Architekturen (Self-Contained Systems, CQRS, Domain driven Design, ...)</li>
            <li>einen sicheren Umgang in allen Bereichen des Software-Entwicklungs&shy;prozesses (Requirements-Engineering / SCRUM / XP )</li>
            <li>Erfahrungen im Bereich CI / CD, DevOps und Cloud-Architecture (insbesondere Kubernetes & AWS)</li>
            <li>einen hohen Qualitätsanspruch an deine eigene Arbeit</li>
            <li>die Bereitschaft dein Wissen mit anderen zu teilen (z.B. im Rahmen eines Mentorings)</li>
            <li>keine Angst davor alte Gewohnheiten über Bord zu werfen und Lösungen zu hinterfragen</li>
          </ul>
        </p>
      </template>
    </SectionFullwidth>

    <SectionFullwidth :name="'match'" :shifted=false>
      <template v-slot:title>
        Das klingt nach dir?
      </template>
      <template v-slot:description>
        <p>
          Dann bist du bei uns genau richtig!
        </p>
      </template>
    </SectionFullwidth>

    <SectionFullwidth :name="'contact-us'" :shifted=true :bgColor="'var(--color-primary'">
      <template v-slot:title>
        Interessiert?
      </template>
      <template v-slot:description>
        <p>
          Wir benötigen keine Arbeitszeugnisse oder von Floskeln übersähten Anschreiben, sondern möchten dich
          gerne direkt kennenlernen! Schicke uns einfach eine kurze formlose E-Mail oder eine Whatsapp und
          wir vereinbaren einen ersten unverbindlichen Kennenlern-Termin!
        </p>
        <ArrowLink :text="'Schreib uns eine Mail!'" :href="'mailto:info@beyond-interfaces.com'" :color="'var(--color-grey)'"/>
      </template>
    </SectionFullwidth>

  </Layout>
</template>

<script>
import SectionFullwidth from '~/components/SectionFullwidth.vue';
import ArrowLink from '~/components/ArrowLink.vue';

export default {
  components: {
    SectionFullwidth,
    ArrowLink
  }
};
</script>
