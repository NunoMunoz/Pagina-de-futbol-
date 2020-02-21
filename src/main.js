import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import * as firebase from "firebase";

Vue.config.productionTip = false;
firebase.initializeApp({
  apiKey: "AIzaSyDqVdul2u2YY0fQqpgklU4RDxQwNjRw3fs",
  authDomain: "miapp-3dd76.firebaseapp.com",
  databaseURL: "https://miapp-3dd76.firebaseio.com",
  projectId: "miapp-3dd76",
  storageBucket: "miapp-3dd76.appspot.com",
  messagingSenderId: "625930748442",
  appId: "1:625930748442:web:376f1578eee8d107"
});
// Se utilizara para enviar la información a la base de firebase y despues utilizarla para el chat.
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.commit("setLog", "YES");
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  } else {
    store.commit("setLog", "NO");
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
// Se mostrara el Login/Regis si no a iniciado sesión, pero si lo esta entonces se mostrara
// el Leave para que cierre sesion.
