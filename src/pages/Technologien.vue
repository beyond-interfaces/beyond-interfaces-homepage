<template>
  <Layout>

    <section id="section-technologien" class='container relative'>
      <h1 class='text-bi-purple'>Technologien</h1>
      <article>
        <p>Auch wenn die eingesetzten Technologien nicht der einzige Faktor für den Erfolg einer Software sind, möchten wir Ihnen an dieser Stelle eine Übersicht über die Technologien geben in denen wir uns zuhause fühlen:</p>
      </article>

      <div class='flex flex-wrap justify-center mt-16'>
          <template v-for='logo in logos'>
            <div class='logo m-4' :key='logo.name'>
              <component :is='logo' :key='logo.name'></component>
            </div>
        </template>
      </div>
    </section>

  </Layout>
</template>

<script>
import Layout from '~/layouts/Default.vue';

import Angular from '~/assets/logos/angular.svg';
import ApacheKafka from '~/assets/logos/apache_kafka.svg';
import Docker from '~/assets/logos/docker.svg';
import Jest from '~/assets/logos/jest.svg';
import Kubernetes from '~/assets/logos/kubernetes.svg';
import Mongodb from '~/assets/logos/mongodb.svg';
import Netlify from '~/assets/logos/netlify.svg';
import NodeJs from '~/assets/logos/nodejs.svg';
import PostgreSQL from '~/assets/logos/PostgreSQL.svg';
import Reactivex from '~/assets/logos/reactivex.svg';
import Sass from '~/assets/logos/sass.svg';
import Spring from '~/assets/logos/spring.svg';
import Vuejs from '~/assets/logos/vuejs.svg';

export default {
  data() {
    return {
      logos: [
        Angular,
        ApacheKafka,
        Docker,
        Jest,
        Kubernetes,
        Mongodb,
        Netlify,
        NodeJs,
        PostgreSQL,
        Reactivex,
        Sass,
        Spring,
        Vuejs,
      ]
    };
  },
  metaInfo: {
    title: 'Technologien'
  },
  components: {
    Layout
  }
}
</script>
<style>
.logo {
  max-width: 120px;
  max-height: 120px;
}
.logo > svg {
  width: 100%;
  height: 100%;
}

#section-technologien::before {
    content: '';
    position: absolute;
    top: 3.2rem;
    right: -20%;
    width: 200%;
    height: 100%;
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 600' preserveAspectRatio='none'><rect width='100%' height='100%' x='0' y='0' fill='%23F7F7F7' transform='skewX(-4)'/></svg>") no-repeat;
    z-index: -1;
}
</style>
