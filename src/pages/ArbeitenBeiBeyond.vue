<template>
  <Layout>
    <section class="container u-padding-bottom-none">
      <h1>Arbeiten bei beyond</h1>
    </section>

    <SectionFullwidth :name="'team'">
      <template v-slot:title>
        Team
      </template>
      <template v-slot:description>
        <p>
          Entstanden aus einer Idee beim Mountainbiken im Jahr 2016 hat sich unser Team in den letzten 4 Jahren langsam aber
          stetig von einer "Two-Men Show" zu einem Zusammenschluss von hochmotivierten Software-Entwickler:innen und
          UX-Designer:innen weiterentwickelt.

          In diesem Prozess waren uns zwei Dinge immer besonders wichtig:

          <ul>
            <li>Wir wollen nicht um jeden Preis wachsen.</li>
            <li>Wir möchten mit Menschen zusammen arbeiten, die unsere Leidenschaft und Motivation für gute Software genau so teilen, wie wir selbst.</li>
          </ul>
        </p>
      </template>
    </SectionFullwidth>

    <SectionFullwidth :name="'culture'" :bgColor="'var(--color-background-dark)'" :shifted=true>
      <template v-slot:title>
        Culture over Skills
      </template>
      <template v-slot:description>
        <p>
          Aus diesem Grund legen wir unser Augenmerk bei der Mitarbeitersuche zunächst einmal auf dich und deine Persönlichkeit.
          Getreu dem Motto "Hire for Culture, train for skills" ist es uns wichtig, dass du dich bei uns im Team wohl fühlst und
          wir weiter gemeinsam und miteinander wachsen können. So suchen wir insbesondere nach Menschen die:

          <ul>
            <li>Spaß an der Arbeit in (verteilten) Teams haben</li>
            <li>neben der technischen Lösung auch ein Interesse an den fachlichen Herausforderungen des Projekts haben</li>
            <li>hohe Ansprüche an die eigene Arbeit stellen</li>
            <li>fähig sind konstruktive Kritik zu geben und anzunehmen</li>
            <li>nicht davor zurückschrecken neue Lösungswege zu gehen und alte Strategien über Bord zu werfen.</li>
          </ul>

          Wenn du dich in diesen Punkten wiederfindest würden wir uns wahnsinnig freuen dich bei einem ersten virtuellen Kaffee kennenzulernen!

        </p>
      </template>
    </SectionFullwidth>

    <SectionFullwidth :name="'newnormal'">
      <template v-slot:title>
        The New Normal: Remote First
      </template>
      <template v-slot:description>
        <p>
          Remote-Work hat bei uns nicht erst seit dem Beginn der Corona-Pandemie einen ganz besonderen Stellenwert.
          So arbeiten wir bereits seit vielen Jahren mit unseren internationalen Kunden wie in einer virtuellen Bürogemeinschaft.
          Dies führte dazu, dass sich im März 2020 zunächst einmal sehr wenig für uns änderte:
          alle unsere täglichen Werkzeuge waren ohnehin bereits auf die verteilte Arbeit ausgelegt und wir konnten ohne Probleme
          unsere Arbeit nach Hause verlagern.
        </p>
          Auf Basis unserer äußerst positiven Erfahrungen haben wir unsere Remote-Kultur seitdem stetig weiterentwickelt und verbessert.
          Neben täglichen Ritualen wie einem Good-Morning Kaffee in unserem Discord-Raum und wöchentlichen Knowledge-Sharing Sessions
          zählen dazu außerdem die vollständige Übernahme aller für das Home-Office anfallenden Kosten - sei es für einen neuen Bürostuhl,
          den Gaming Monitor oder auch für eine Palette deines Lieblings-Kaffees!
        </p>
       <!-- <p>
          (Wenn du mehr über unseren Ansatz und unser Remote-Strategie erfahren möchtest, möchten wir dich an dieser Stelle auf unseren
          Medium-Artikel zu dem Thema verweisen)
        </p> -->
      </template>
    </SectionFullwidth>

    <SectionFullwidth :name="'onsite'" :bgColor="'var(--color-background-darkest)'" :inverted=true  :shifted=true>
      <template v-slot:title>
        On-Site as a Tool
      </template>
      <template v-slot:description>
        <p>
          Anstelle unser schönes Büro im Herzen von Kalk aufzugeben haben wir uns dazu entschieden auch unseren Office-Space den neuen
          Anforderungen an modernes Arbeiten anzupassen und unseren Mitarbeitern auch weiterhin die Möglichkeit zu geben bei Bedarf
          Ihren eigenen vier Wänden entfliehen zu können.
        </p>
        <p>
          Neben Sitz- und Steh-Arbeitsplätzen stehen uns in den Räumen einer alten Kölsch-Kneipe eine gemütliche Loft-Küche,
          ein Maker-Space und ein schöner grüner Innenhof für entspanntes Arbeiten zur Verfügung. Als Gastgeber des Angular-Cologne-Meetup,
          des BÄM-Stammtischs und diverser weiterer Veranstaltungen wie dem Geile-Weine Tasting oder dem Dreigang-Supper-Club verstehen
          wir unseren Raum dabei nicht nur als Ort zum Arbeiten sondern auch als auch Treffpunkt der Kölner Digital-Gemeinschaft!
        </p>
      </template>
    </SectionFullwidth>

    <SectionFullwidth :name="'education'">
      <template v-slot:title>
        Mitarbeiter-Entwicklung & Weiterbildung
      </template>
      <template v-slot:description>
        <p>
          Wie die gesamte Digitalwelt bewegen auch wir uns im ständigen Spagat zwischen neuen Technologietrends und alt-bewährten Lösungswegen.
          Die Geschwindigkeit mit der sich unsere Industrie in den letzten Jahren weiterentwickelt hat ist dabei gleichermaßen beeindruckend wie überwältigend.
        </p>
        <p>
          Um langfristig zu bestehen ist es uns wichtig unseren Mitarbeitern ein Umfeld zu bieten in dem Sie sich sowohl in Soft- als auch in
          Hard-Skills dauerhaft weiterentwickeln können.
        <p>
          Wenn du dich für uns als Arbeitgeber entscheidest bieten wir dir:

          <ul>
            <li>ein festes Weiterbildungsbudget in Höhe von 2000 € / Jahr</li>
            <li>wöchentliche Knowledge-Sharing Sessions mit dem Team</li>
            <li>die Möglichkeit des gemeinsamen Besuch von Konferenzen und Meetups</li>
            <li>eine aktive Beteiligung in und an der (Kölner) IT-Community</li>
          </ul>

          Wenn du dich in diesen Punkten wiederfindest würden wir uns wahnsinnig freuen dich bei einem ersten virtuellen Kaffee kennenzulernen!

        </p>
      </template>
    </SectionFullwidth>

    <SectionFullwidth :name="'onsite'" :bgColor="'var(--color-background-darkest)'" :inverted="true">
      <template v-slot:title>
        Get in Touch!
      </template>
      <template v-slot:description>
        <p>
          Das klingt genau nach dem was du machen möchtest? Dann <a href="mailto:info@beyond-interfaces.com">ping</a> uns doch einfach direkt an. Wir freuen uns auf dich!
        </p>
         <ArrowLink :text="'Aktuelle Stellenauschreibungen'" :href="'/jobs/'" :color="'var(--color-white)'"/>
      </template>
    </SectionFullwidth>
  </Layout>
</template>

<script>
import SectionFullwidth from '~/components/SectionFullwidth.vue';
import ArrowLink from '~/components/ArrowLink.vue';

export default {
  name: 'workatbeyond',
  components: {SectionFullwidth, ArrowLink}
};
</script>
