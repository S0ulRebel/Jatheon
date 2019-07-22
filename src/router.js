import Vue from 'vue';
import Router from 'vue-router';
import TagManager from './views/TagManager.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tagManager',
      component: TagManager,
    },
  ],
});
