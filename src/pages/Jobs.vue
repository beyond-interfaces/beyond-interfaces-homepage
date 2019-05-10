<template>
  <Layout>
    <section id='section-jobs' class='container'>
      <h1 class='text-bi-green'>Jobs</h1>
      <article class='section-background  relative  mb-24'>
        <h2 id='senior-frontend-developer' class='text-bi-blue'>Senior Frontend Developer</h2>
        <h4>Deine Aufgaben</h4>
          <ul>
            <li>Entwicklung von Webanwendungen auf Basis von Angular oder Vue.js</li>
            <li>Einsatz von modernen CSS-Architektur-Techniken zum Stylen der Anwendungen</li>
            <li>eigenverantwortliche Mitarbeit in einem agilen Entwicklungs-Umfeld</li>
          </ul>

        <h4>Wir bieten</h4>
        <ul>
          <li>ein junges interdisziplinäres Team</li>
          <li>Arbeit mit State-of-the Art Technologien</li>
          <li>Projekte mit grossen, internationalen Kunden</li>
          <li>die Möglichkeit dich im Alltag oder auf Schulungen und Konferenzen weiterzuentwickeln</li>
          <li>gemeinsames Kochen & Essen im Loftbüro mit gemütlichem Garten</li>
          <li>Job-Fahrrad</li>
          <li>Mate-Flatrate</li>
        </ul>
      </article>

      <article class='section-background  relative  mb-16'>
        <h2 id='junior-frontend-developer' class='text-bi-purple'>
          Junior Frontend Developer
        </h2>
        <h4>Deine Aufgaben</h4>
          <ul>
            <li>Entwicklung von Webanwendungen auf Basis von Angular oder Vue.js</li>
            <li>Einsatz von modernen CSS-Architektur-Techniken zum Stylen der Anwendungen</li>
            <li>eigenverantwortliche Mitarbeit in einem agilen Entwicklungs-Umfeld</li>
          </ul>

        <h4>Wir bieten</h4>
        <ul>
          <li>ein junges interdisziplinäres Team</li>
          <li>Arbeit mit State-of-the Art Technologien</li>
          <li>Projekte mit großen, internationalen Kunden</li>
          <li>die Möglichkeit dich im Alltag oder auf Schulungen und Konferenzen weiterzuentwickeln</li>
          <li>gemeinsames Kochen & Essen im Loftbüro mit gemütlichem Garten</li>
          <li>Job-Fahrrad</li>
          <li>Mate-Flatrate</li>
        </ul>
      </article>
    </section>

  </Layout>
</template>

<script>
import Layout from '~/layouts/Default.vue'

export default {
  metaInfo: {
    title: 'Jobs'
  },
  components: {
    Layout
  }
}
</script>
<style>
.section-background:before {
    content: '';
    position: absolute;
    top: 2.5rem;
    width: 200%;
    height: 100%;
    z-index: -1;
}
.section-background:nth-child(even):before {
    left: -20%;
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 600' preserveAspectRatio='none'><rect width='100%' height='100%' x='0' y='0' fill='%23F7F7F7' transform='skewX(4)'/></svg>") no-repeat;
}

.section-background:nth-child(odd):before {
    right: -20%;
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 600' preserveAspectRatio='none'><rect width='100%' height='100%' x='0' y='0' fill='%23F7F7F7' transform='skewX(-4)'/></svg>") no-repeat;
}


</style>
