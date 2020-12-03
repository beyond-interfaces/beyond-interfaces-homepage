<template>
  <Layout>
     <section class="container">
      <ArrowLink :text="'Team Lead / Senior Fullstack-Engineer (m/w/d)'" :href="'/jobs/team-lead'" :color="'var(--color-grey)'"/>
      <ArrowLink :text="'Senior Software-Engineer & Solution-Architect • Backend (m/w/d)'" :href="'/jobs/senior-backend-developer'" :color="'var(--color-primary)'"/>
      <ArrowLink :text="'Senior Software-Engineer & Solution-Architect • Frontend (m/w/d)'" :href="'/jobs/senior-frontend-developer'" :color="'var(--color-grey)'"/>
    </section>

    <section class="container u-padding-bottom-none">
      <h1>Senior Software Engineer & Solution Architect • Backend (m/w/d)</h1>
    </section>

    <SectionFullwidth :name="'we'" >
      <template v-slot:title>
        Wir bieten dir…
      </template>
      <template v-slot:description>
        <p>
          <ul>
            <li>ein großartiges Team aus echten Expert*innen im Bereich Software Entwicklung und User Experience Design</li>
            <li>wirklich spannende Projekte bei internationalen Kunden (mehr dazu im persönlichen Gespräch)</li>
            <li>einen Remote First Arbeitsplatz, bei dem Du selbst entscheidest wo und wie du am effizientesten arbeitest</li>
            <li>ein attraktives und leistungsbezogenes Gehalt</li>
            <li>die Möglichkeit, den Aufbau unseres Unternehmens mitzugestalten und Verantwortung zu übernehmen</li>
            <li>ein frei verfügbares Weiterbildungsbudget in Höhe von 2000 € / Jahr</li>
            <li>regelmäßige Teamevents und gemeinsame Aktivitäten (z.B. Wake-Boarding / Mountainbiken / Klettern)</li>
            <li>Kaffee, Tee und Wasserflatrate (auch im Home-Office!)</li>
            <li>ein JobTicket für den ÖPNV sowie die Möglichkeit, Dir ein Job-Bike auszusuchen</li>
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
            <li>tiefgehendes Know-how in mindestens einem der folgenden Frameworks: Spring / Spring Boot / Vert.x </li>
            <li>fundierte Kenntnisse im Aufbau moderner Software-Architekturen (Self-Contained Systems, CQRS, Domain driven Design, ...)</li>
            <li>einen sicheren Umgang in allen Bereichen des Software-Entwicklungs&shy;prozesses (Requirements-Engineering / SCRUM / XP )</li>
            <li>Erfahrungen im Bereich CI / CD, DevOps und Cloud-Architecture (insbesondere Kubernetes & AWS)</li>
            <li>einen hohen Qualitätsanspruch an Deine eigene Arbeit</li>
            <li>die Bereitschaft Dein Wissen mit anderen zu teilen (z.B. im Rahmen eines Mentorings)</li>
            <li>keine Angst davor, alte Gewohnheiten über Bord zu werfen und Lösungen zu hinterfragen</li>
          </ul>
        </p>
      </template>
    </SectionFullwidth>

    <SectionFullwidth :name="'contact-us'" :shifted=true :bgColor="'var(--color-primary'">
      <template v-slot:title>
        Interessiert?
      </template>
      <template v-slot:description>
        <p>
          Wir benötigen keine Arbeitszeugnisse oder von Floskeln übersähten Anschreiben, sondern möchten Dich
          gerne direkt kennenlernen! Schicke uns einfach eine kurze formlose E-Mail und
          wir vereinbaren einen ersten unverbindlichen Kennenlerntermin!
        </p>
        <ArrowLink :text="'Schreib uns eine E-mail!'" :href="'mailto:info@beyond-interfaces.com'" :color="'var(--color-grey)'"/>
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
