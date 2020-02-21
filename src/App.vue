<template>
  <v-app :dark="goDark">
    <v-toolbar app dark class="indigo">
      <!-- Esta linea le dire el espacio entre el texto de la pagina, el color de la barra del menu
      y resaltara la opción de el modo Dark o noche-->
      <v-toolbar-side-icon
        class="black--text"
        @click="drawer = !drawer"
      ></v-toolbar-side-icon>
      <!-- En esta linea le estamos diciendo el orden de los menus y su el color de la letra -->
      <router-link to="/">
        <v-avatar class="pl-4">
          <v-img v-bind:src="logo"></v-img>
        </v-avatar>
        <!-- En esta linea he introducido un logo y el tamaño que tendra -->
        <v-spacer></v-spacer>
      </router-link>
      <!-- En esta linea es para enviar al usuario a la pagina de inicio cada vez que haga click
      en el logo-->
      <router-link to="/">
        <v-toolbar-title class="pl-4">
          NYSL
          <span class="font-weight-light">website</span>
          <!-- En estas 2 lineas se han pues de 2 formas distintas al nombre de la pagina, 
          para que sea-->
        </v-toolbar-title>
      </router-link>
      <!-- En esta linea tambien enviara al usuario a la pagina de inicio 
      si hace click en el nombre de la pagina-->
      <v-spacer></v-spacer>
      <!-- Para dar un margen y que no este todo tan pegado-->
      <router-link to="/regislogin" v-if="this.$store.getters.getLog == 'NO'">
        <v-list-tile-avatar>
          <v-btn color="info" v-on:click="loginregis">Login/Regis</v-btn>
          <!-- -->
        </v-list-tile-avatar>
      </router-link>
      <v-list-tile
        router
        :to="chat.route"
        v-if="this.$store.getters.getLog == 'YES'"
      >
        <v-btn color="info" v-on:click="logout">Leave</v-btn>
      </v-list-tile>

      <v-toolbar-items>
        <v-container fluid px-5>
          <v-switch
            :label="``"
            append-icon="brightness_3"
            v-model="goDark"
          ></v-switch>
        </v-container>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app class="green" temporary height>
      <v-list>
        <v-list-tile
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{
              link.text
            }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          router
          :to="chat.route"
          v-if="this.$store.getters.getLog == 'YES'"
        >
          <v-list-tile-action>
            <v-icon class="white--text">{{ chat.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{
              chat.text
            }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import firebase from "firebase";
export default {
  name: "App",
  data() {
    return {
      items: [{ icon: "account_box", title: "Login", route: "/regislogin" }],
      goDark: false,
      drawer: false,
      chat: { icon: "chat", text: "Chat", route: "/chat" },
      links: [
        { icon: "home", text: "Home", route: "/" },
        { icon: "info", text: "About NYSL", route: "/about" },
        { icon: "person", text: "Registration", route: "/registration" },
        {
          icon: "date_range",
          text: "Game Information",
          route: "/Gameinformation"
        },
        { icon: "announcement", text: "Rules", route: "/rules" },
        { icon: "contact_support", text: "Contact", route: "/Contact" }
        // {
        //   icon: "account_box",
        //   text: "Registration/Login",
        //   route: "/regislogin"
        // },

        // { icon: "login", text: "login", route: "/login" }
      ],
      logo: require("./assets/nysl_logo.png")
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
          // this.$store.commit("logout");
          this.$store.commit("setLog", "NO");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

// service firebase.storage { // match /b/{bucket}/o { // match /{allPaths=**} {
// allow read, write: if request.auth != null; // } // } // }

<style>
a {
  color: black !important;
  text-decoration: none;
}
</style>
