<template>
  <div class="about">
    <v-container>
      <h1>Registration User/Login User</h1>
      <v-form v-model="valid">
        <v-container>
          <v-layout>
            Registration:
            <v-container>
              <v-flex xs12 md11>
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  append-icon="person"
                  label="Name"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md11>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  append-icon="email"
                  label="Email"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md11>
                <v-text-field
                  v-model="password"
                  :rules="keyRules"
                  :type="show1 ? 'text' : 'password'"
                  :append-icon="show1 ? 'visibility' : 'visibility_off'"
                  label="Password"
                  required
                  @click:append="show1 = !show1"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md11>
                <v-text-field
                  v-model="repeat"
                  :rules="comparePassword"
                  :type="show1 ? 'text' : 'password'"
                  :append-icon="show1 ? 'visibility' : 'visibility_off'"
                  label="Repeat the password"
                  required
                  @click:append="show1 = !show1"
                ></v-text-field>
              </v-flex>
              <p>
                <v-btn color="info" v-on:click="signUp">Register</v-btn>
              </p>
            </v-container>
            <p>Login:</p>
            <v-container>
              <v-flex xs12 md12>
                <v-text-field
                  v-model="email2"
                  :rules="emailRules"
                  append-icon="email"
                  label="Email"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md12>
                <v-text-field
                  v-model="password2"
                  :rules="keyRules"
                  :type="show2 ? 'text' : 'password'"
                  :append-icon="show2 ? 'visibility' : 'visibility_off'"
                  label="Password"
                  required
                  @click:append="show2 = !show2"
                ></v-text-field>
              </v-flex>
              <p>
                <v-btn color="info" v-on:click="loggin">Login</v-btn>
                <v-btn color="info" v-on:click="login">
                  <v-icon dark>G+</v-icon>
                </v-btn>
                <!-- <v-btn color="info" v-on:click="logout">Leave</v-btn> -->
              </p>
            </v-container>
          </v-layout>
        </v-container>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data: () => ({
    name: "",
    valid: "",
    firstname: "",
    email: "",
    email2: "",
    emailRules: [
      v =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid"
    ],
    keyRules: [
      v => !!v || "Password is required",
      v =>
        (v && v.length >= 8) ||
        "The password must have at least 8 characters and less than 16, also a capital letter and a number.",
      v =>
        (v && v.length <= 16) ||
        "The password must have at least 8 characters and less than 16, also a capital letter and a number."
    ],
    nameRules: [
      v => !!v || "Name is required",
      v =>
        (v && v.length >= 8) ||
        "The name must have at least 8 characters and less than 16, also a capital letter and a number.",
      v =>
        (v && v.length <= 16) ||
        "The name must have at least 8 characters and less than 16, also a capital letter and a number."
    ],
    show1: false,
    show2: false,
    password: "",
    password2: "",
    repeat: "",
    phrase: [
      "The password are different, please check and repeat the password"
    ],
    rules: [value => !!value || "Field is required."],
    passwords: [
      value => !!value || "Required.",
      v => v.length >= 8 || "Min 8 characters"
    ]
  }),
  computed: {
    comparePassword() {
      if (
        (this.password !== this.repeat &&
          this.repeat.length >= this.password.length) ||
        (this.password !== this.repeat &&
          this.repeat.length <= this.password.length)
      ) {
        return this.phrase;
      } else {
        return true;
      }
    }
  },
  methods: {
    signUp() {
      console.log({
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword
      });
      this.$emit("register");

      if (
        this.name != "" ||
        this.email != "" ||
        this.password != "" ||
        this.repeat != ""
      ) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.$router.replace("/chat");
            let user = firebase.auth().currentUser;
            user.updateProfile({
              displayName: this.name
            });
            console.log(firebase.auth().currentUser);
            this.$store.commit("setLog", "YES");
            this.$emit("register"); //emmmit -> enviar dades d'un element a un altre
          })
          .catch(error => console.log(error));
      }
    },
    login() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$router.replace("/chat");
          this.$store.commit("setLog", "YES");
          // this.$router.replace("/chat");
        });
      console.log("login");
    },
    loggin() {
      console.log("logggggggggggggin");
      console.log(this.email2, this.password2);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email2, this.password2)
        .then(() => {
          console.log("hola");
          this.$store.commit("setLog", "YES");
          this.$router.replace("/chat");
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === "auth/wrong-password") {
            alert("Wrong password.");
          } else {
            alert(errorMessage);
          }
        });
      console.log("loggin");
    },
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
