// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/assets/styles.scss';
import DefaultLayout from '~/layouts/Default.vue';

export default function(Vue, { router, head, isClient }) {
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
