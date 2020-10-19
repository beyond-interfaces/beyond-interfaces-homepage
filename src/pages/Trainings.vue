<template>
  <Layout>
    <section id='section-training' class='container relative'>
      <h1 class='text-bi-blue'>Angular Training</h1>
      <article>
        <p class=''>Egal ob Sie noch ganz am Anfang stehen, bereits tiefer gehende Erfahrungen mit Angular gesammelt haben oder vielleicht noch gar nicht genau wissen ob das Framework die richtige Wahl für Sie ist: Wir haben das richtige Training für Sie!</p>
        <p class='mt-8'>In einem ersten telefonischen Gespräch klären wir hierfür zunächst die Rahmenbedingungen: Benötigen Sie einen umfassenden Überblick über alle Teilbereich, liegt Ihr Schwerpunkt eher auf der Verabeitung von komplexen Nutzerzeingaben oder brauchen Sie Unterstützung bei weiterführenden Themen wie Performance-Optimierungen oder State-Management.</p>
        <p class='mt-8'>Nach diesem Gespräch erarbeiten wir Ihnen eine Agenda für einen persönlich auf Sie & Ihr Team zugeschnittenen Workshop - so können Sie bereits von Beginn an sicherstellen, dass Sie das Maximum aus der Schulung herausholen.</p>
        <p class='mt-8'>Die folgende Liste gibt Ihnen einen ersten Überblick über die Themen die in unseren Trainings behandelt werden:</p>
        <ul>
            <li>TypeScript Basics</li>
            <li>Einführung in das Angular Commandline Interface (CLI)</li>
            <li>Angular Komponente & Schnittstellen zwischen Komponenten</li>
            <li>Routing</li>
            <li>Formulare</li>
            <li>Anbindung von Services über HTTP</li>
            <li>Reaktive Anwendungen mit RxJS</li>
            <li>Testen von Angular Anwendungen</li>
        </ul>
      </article>
    </section>

    <section class='container mt-16'>
        <h1 class='text-bi-green'>Ihr Trainer</h1>
        <div class="flex flex-col items-center md:items-start md:flex-row">
            <g-image class="rounded-full h-32 w-32 mb-4" alt="Christoph Höller" src="~/assets/team/christoph_hoeller.jpg"/>
            <p class="md:ml-8">Christoph Höller arbeitet seit vielen Jahren als Software-Entwickler und Architekt mit dem Framework Angular. Als erfahrener Trainer & Autor des Fachbuchs 'Angular - Das umfassende Handbuch' hat er bereits viele Unternehmen bei der Einführung von Angular in Ihren Unternehmensstack begleitet.</p>
        </div>
    </section>
  </Layout>
</template>

<script>
import Layout from '~/layouts/Default.vue'

export default {
  metaInfo: {
    title: 'Trainings'
  },
  components: {
    Layout
  }
}
</script>
<style>
#section-training::before {
    content: '';
    position: absolute;
    top: 3.2rem;
    left: -20%;
    width: 200%;
    height: 100%;
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 600' preserveAspectRatio='none'><rect width='100%' height='100%' x='0' y='0' fill='%23F7F7F7' transform='skewX(4)'/></svg>") no-repeat;
    z-index: -1;
}
</style>
