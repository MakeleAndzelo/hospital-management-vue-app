import Vue from 'vue'
import Vuex from 'vuex'
import authModule from "./modules/auth.module";
import notificationsModule from "./modules/notifications.module";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {authModule, notificationsModule}
});
