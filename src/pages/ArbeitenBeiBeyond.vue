<template>
  <Layout>
    <section class="container u-padding-bottom-none"  >
      <h1>Arbeiten bei beyond</h1>
    </section>

    <SectionFullwidth name="team" data-aos="fade-up">
      <template v-slot:title>
        Team
      </template>
      <template v-slot:description>
        <div>
          <p>
            Entstanden aus einer Idee beim Mountainbiken im Jahr 2016, hat sich unser Team in den letzten 4 Jahren
            langsam aber stetig von einer "Two-Men Show" zu einem Zusammenschluss von hochmotivierten
            Software-Entwickler*innen und UX-Designer*innen weiterentwickelt. In diesem Prozess sind uns zwei Dinge
            besonders wichtig:
          </p>
          <ul>
            <li>Wir wollen nicht um jeden Preis wachsen.</li>
            <li>
              Wir möchten mit Menschen zusammen arbeiten, die unsere Leidenschaft und Motivation für gute Software genau
              so teilen, wie wir selbst.
            </li>
          </ul>
        </div>
      </template>
    </SectionFullwidth>

    <SectionFullwidth
      :name="'culture'"
      :bgColor="'var(--color-background-dark)'"
      :shifted="true"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <template v-slot:title>
        Culture over Skills
      </template>
      <template v-slot:description>
        <p>
          Aus diesem Grund legen wir unser Augenmerk bei der Mitarbeiter*innensuche zunächst einmal auf dich und
          deine Persönlichkeit. Getreu dem Motto "Hire for Culture, train for skills" ist es uns wichtig,  dass du dich bei uns im Team wohl fühlst
          und wir weiter gemeinsam und miteinander wachsen können. So suchen wir insbesondere nach Menschen, die:
        </p>

        <ul>
          <li>Spaß an der Arbeit in (verteilten) Teams haben</li>
          <li>
            neben der technischen Lösung auch ein Interesse an den inhaltlichen Herausforderungen des Projekts haben
          </li>
          <li>hohe Ansprüche an die eigene Arbeit stellen</li>
          <li>fähig sind, konstruktive Kritik zu geben und anzunehmen</li>
          <li>nicht davor zurückschrecken, neue Lösungswege zu gehen und alte Strategien über Bord zu werfen.</li>
        </ul>

        <p>
          Wenn du dich in diesen Punkten wiederfindest, würden wir uns wahnsinnig freuen dich bei einem ersten
          virtuellen Kaffee kennenzulernen!
        </p>
      </template>
    </SectionFullwidth>

    <SectionFullwidth :name="'newnormal'" data-aos="fade-up">
      <template v-slot:title>
        The New Normal: Remote First
      </template>
      <template v-slot:description>
        <div>
          <p>
            Remote-Work hat bei uns nicht erst seit dem Beginn der Corona-Pandemie einen ganz besonderen Stellenwert. So
            arbeiten wir bereits seit vielen Jahren mit unseren internationalen Kunden wie in einer virtuellen
            Bürogemeinschaft. Dies führte dazu, dass sich im März 2020 zunächst einmal sehr wenig für uns änderte: alle
            unsere täglichen Werkzeuge waren ohnehin bereits auf die verteilte Arbeit ausgelegt und wir konnten ohne
            Probleme unsere Arbeit nach Hause verlagern.
          </p>
          <p>
            Auf Basis unserer äußerst positiven Erfahrungen haben wir unsere Remote-Kultur seitdem stetig
            weiterentwickelt und verbessert. Neben täglichen Ritualen wie einem Good Morning Kaffee in unserem
            Discord-Raum und wöchentlichen Knowledge Sharing Sessions zählen dazu außerdem die vollständige Übernahme
            aller für das Homeoffice anfallenden Kosten - sei es für einen neuen Bürostuhl, den Gaming Monitor oder auch
            für eine Palette deines Lieblings-Kaffees!
          </p>
          <p>
            (Im folgenden Medium-Artikel findest du mehr Details zu unserer Remote-Strategie:
            <a href="https://beyondinterfaces.medium.com/how-we-transformed-our-company-8c7dcd1bea94"
              >https://beyondinterfaces.medium.com/how-we-transformed-our-company-8c7dcd1bea94</a
            >)
          </p>
        </div>
      </template>
    </SectionFullwidth>

    <SectionFullwidth
      :name="'onsite'"
      :bgColor="'var(--color-background-darkest)'"
      :inverted="true"
      :shifted="true"
      data-aos="fade-up"
    >
      <template v-slot:title>
        On-Site as a Tool
      </template>
      <template v-slot:description>
        <div>
          <p>
            Anstelle unser schönes Büro im Herzen von Kalk aufzugeben, haben wir uns dazu entschieden auch unseren
            Office Space den neuen Anforderungen an modernes Arbeiten anzupassen und unseren Mitarbeiter*innen auch
            weiterhin die Möglichkeit zu geben, bei Bedarf Ihren eigenen vier Wänden entfliehen zu können.
          </p>
          <p>
            Neben Sitz- und Steharbeitsplätzen stehen uns in den offenen Räumen einer alten Kölschkneipe eine große
            Loftküche, eine Sofalounge, ein Maker Space und ein gemütlicher, grüner Innenhof für entspanntes Arbeiten
            zur Verfügung. Als Gastgeber des Angular Cologne Designsystems Cologne Meetup, sowie diverser
            Veranstaltungen wie dem BÄM Stammtisch, Geile Weine Tasting oder dem Dreigang Supper Club verstehen wir
            unseren Raum dabei nicht nur als Ort zum Arbeiten sondern auch als auch Treffpunkt für uns und die
            Community.
          </p>
        </div>
      </template>
    </SectionFullwidth>

    <SectionFullwidth :name="'education'" data-aos="fade-up">
      <template v-slot:title>
        Mitarbeiterentwicklung & Weiterbildung
      </template>
      <template v-slot:description>
        <div>
          <p>
            Wie die gesamte Digitalwelt bewegen auch wir uns im ständigen Spagat zwischen neuen Technologietrends und
            altbewährten Lösungswegen. Die Geschwindigkeit mit der sich unsere Branche in den letzten Jahren
            weiterentwickelt hat ist dabei gleichermaßen beeindruckend wie überwältigend.
          </p>
          <p>
            Um langfristig zu bestehen ist es uns wichtig, unseren Mitarbeitern ein Umfeld zu bieten in dem Sie sich
            sowohl in Soft- als auch in Hardskills dauerhaft weiterentwickeln können.
          </p>
          <p>
            Wir bieten unseren Arbeitnehmern:
          </p>
          <ul>
            <li>ein festes Weiterbildungsbudget in Höhe von 2000 € / Jahr</li>
            <li>wöchentliche Knowledge Sharing Sessions mit dem Team</li>
            <li>die Möglichkeit des gemeinsamen Besuchs von Konferenzen und Meetups</li>
            <li>eine aktive Beteiligung in und an der (Kölner) IT-Community</li>
          </ul>

          <p>
            Wenn du Dich in diesen Punkten wiederfindest würden wir uns wahnsinnig freuen, Dich bei einem ersten
            virtuellen Kaffee kennenzulernen!
          </p>
        </div>
      </template>
    </SectionFullwidth>

    <SectionFullwidth :name="'onsite'" :bgColor="'var(--color-background-darkest)'" :inverted="true" data-aos="fade-up">
      <template v-slot:title>
        Get in Touch!
      </template>
      <template v-slot:description>
        <div>
          <p>
            Das klingt genau nach dem was Du machen möchtest? Dann
            <a href="mailto:info@beyond-interfaces.com">schreib</a> uns doch einfach direkt an. Wir freuen uns auf Dich!
          </p>
          <ArrowLink
            :text="'Aktuelle Stellenauschreibungen'"
            :href="'/jobs/'"
            :color="'var(--color-white)'"
            data-aos="fade-right"
            data-aos-delay="400"
          />
        </div>
      </template>
    </SectionFullwidth>
  </Layout>
</template>

<script>
import SectionFullwidth from '~/components/SectionFullwidth.vue';
import ArrowLink from '~/components/ArrowLink.vue';
import AOS from 'aos';

export default {
  name: 'workatbeyond',
  components: { SectionFullwidth, ArrowLink },
    mounted() {
    if (process.browser && window) {
       AOS.refresh();
    }
  },
};
</script>
