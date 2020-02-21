<template>
  <div class="about">
    <v-container>
      <h1>Chat</h1>
      <v-card width="100%" height="400" class="contenido" id="scrollable">
        <v-container>
          <v-layout v-for="(item, index) in messages" :key="index">
            <v-layout ml-3 row>
              <!-- <v-avatar size="50">
                <img :src="item.image" />
              </v-avatar>-->
              <p class="pr-2">{{ item.name }}:</p>
              <p>{{ item.text }}</p>
            </v-layout>
          </v-layout>
        </v-container>
      </v-card>
      <v-layout row wrap>
        <v-flex xs12 sm7 md7>
          <v-text-field
            placeholder="Te damos la bienvenida al chat."
            id="text"
          ></v-text-field>
          <v-btn color="info" v-on:click="enviar">Enviar</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      messages: ""
    };
  },
  updated() {
    // This will be called when the component updates
    this.scrollToEnd();
  },
  mounted() {
    this.recibir();
    this.name;
    // This will be called when the component renders
    this.scrollToEnd();
  },
  created() {
    this.recibir();
    this.name;
  },
  methods: {
    scrollToEnd() {
      // Allows to show always the last message sent when you enter the room.
      document.getElementById("scrollable").scrollTop = document.getElementById(
        "scrollable"
      ).scrollHeight;
    },

    enviar() {
      console.log("hola");

      var text = document.getElementById("text").value;
      var name = firebase.auth().currentUser.displayName;

      var objectSend = {
        text: text, //Clave y valor son el mismo puedes poner solo text PE.
        name: name,
        image: firebase.auth().currentUser.photoURL
      };
      firebase
        .database()
        .ref("chat")
        .push(objectSend); // Enviar datos a la base de datos, con push añade en vez de sobreescribir
    },
    recibir() {
      firebase.auth().currentUser.displayName;
      firebase
        .database()
        .ref("chat")
        .on("value", data => {
          this.messages = Object.values(data.val());
        });
    }
  }
};
</script>
<style scoped>
.contenido {
  overflow: auto;
}
</style>
