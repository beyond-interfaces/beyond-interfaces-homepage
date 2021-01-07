// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/assets/styles.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DefaultLayout from '~/layouts/Default.vue';

export default function(Vue, { router, head, isClient }) {
  const config = {
    duration: 400,
    once: true
  };
  if (process.isClient) {
    AOS.init(config);
  }
  Vue.mixin({
    updated() {
      this.$nextTick(function() {
        AOS.refreshHard(); // This is needed to avoid the un-animate aos effect
      });
    }
  });

  Vue.component('Layout', DefaultLayout);

  head.meta.push({
    name: 'keywords',
    content: 'UX Design, UI Design, JavaScript, Typescript, SPA, Single Page Applications, Development, SCRUM'
  });

  // head.meta.push({
  //   name: 'description',
  //   content: ''
  // });
}
