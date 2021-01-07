<template>
  <Layout>
    <section class="container">
      <ArrowLink
        :text="'Team Lead / Senior Fullstack-Engineer (m/w/d)'"
        :href="'/jobs/team-lead/'"
        :color="'var(--color-primary)'"
      />
      <ArrowLink
        :text="'Senior Software-Engineer / Solution-Architect • Backend (m/w/d)'"
        :href="'/jobs/senior-backend-developer/'"
        :color="'var(--color-grey)'"
      />
      <ArrowLink
        :text="'Senior Software-Engineer / Solution-Architect • Frontend (m/w/d)'"
        :href="'/jobs/senior-frontend-developer/'"
        :color="'var(--color-grey)'"
      />
    </section>

    <section class="container u-padding-bottom-none">
      <h1>Team Lead / Senior Fullstack-Engineer (m/w/d)</h1>
    </section>

    <SectionFullwidth name="we" data-aos="fade-up" data-aos-delay="400">
      <template v-slot:description>
        <div class="introduction">
          Die beyond interfaces GmbH & Co. KG entwickelt Business Anwendungen mit höchsten Ansprüchen an
          Benutzerfreundlich&shy;keit und Technik. Zum Aufbau eines weiteren Teil-Teams suchen wir zum nächstmöglichen
          Zeitpunkt nach Verstärkung.
        </div>
        <h2>Wir bieten dir…</h2>
        <div>
          <ul>
            <li>
              ein großartiges Team aus echten Expert*innen im Bereich Software Entwicklung und User Experience Design
            </li>
            <li>spannende Projekte bei internationalen Kunden (mehr dazu im persönlichen Gespräch)</li>
            <li>
              einen Remote First Arbeitsplatz bei dem du selbst entscheidest, wo und wie Du am effizientesten arbeitest
            </li>
            <li>ein attraktives und leistungsbezogenes Gehalt</li>
            <li>die Möglichkeit, den Aufbau unseres Unternehmens mitzugestalten und Verantwortung zu übernehmen</li>
            <li>ein frei verfügbares Weiterbildungsbudget in Höhe von 2000 € / Jahr</li>
            <li>regelmäßige Teamevents und gemeinsame Aktivitäten (z.B. Wake-Boarding / Mountainbiken / Klettern)</li>
            <li>Kaffee, Tee und Wasserflatrate (auch im Home-Office!)</li>
            <li>ein JobTicket für den ÖPNV sowie die Möglichkeit dir ein Job-Bike auszusuchen</li>
          </ul>
        </div>
      </template>
    </SectionFullwidth>

    <SectionFullwidth
      name="you"
      :bgColor="'var(--color-background-darkest)'"
      :inverted="true"
      :shifted="true"
      data-aos="fade-up"
    >
      <template v-slot:title>
        Du hast…
      </template>
      <template v-slot:description>
        <div>
          <ul>
            <li>Erfahrung in der Führung von Teams & in der direkten Kommunikation mit Stakeholdern</li>
            <li>
              fundiertes Know-how in der Entwicklung von komplexen Business-Anwendungen auf Basis von Java oder Kotlin
            </li>
            <li>Kenntnisse in der Entwicklung von Web-Applikationen auf Basis von Angular und TypeScript</li>
            <li>Erfahrungen im Bereich CI / CD, DevOps und Cloud-Architecture (insbesondere Kubernetes & AWS)</li>
            <li>ein grundlegendes Verständnis für moderne Softwarearchitekturen und gutes Schnittstellendesign</li>
            <li>einen hohen Qualitätanspruch an Deine eigene Arbeit</li>
            <li>die Bereitschaft, Dein Wissen mit anderen zu teilen (z.B. im Rahmen eines Mentorings)</li>
            <li>keine Angst davor, alte Gewohnheiten über Bord zu werfen und Lösungen zu hinterfragen</li>
          </ul>
        </div>
      </template>
    </SectionFullwidth>

    <SectionFullwidth name="contact-us" :shifted="true" :bgColor="'var(--color-primary)'" data-aos="fade-up">
      <template v-slot:title>
        Interessiert?
      </template>
      <template v-slot:description>
        <div>
          <p>
            Wir benötigen keine Arbeitszeugnisse oder von Floskeln übersähten Anschreiben, sondern möchten Dich gerne
            direkt kennenlernen! Schicke uns einfach eine kurze formlose E-Mail und wir vereinbaren einen ersten
            unverbindlichen Kennenlerntermin!
          </p>
          <ArrowLink
            :text="'Schreib uns eine Mail!'"
            :href="'mailto:info@beyond-interfaces.com'"
            :color="'var(--color-grey)'"
          />
        </div>
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

<style>
.introduction {
  padding-bottom: var(--spacing-l);
}
</style>
