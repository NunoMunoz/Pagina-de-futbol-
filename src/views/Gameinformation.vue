<template>
  <div class="about">
    <v-container>
      <h1>NYSL Game Information</h1>
      <v-container>
        <p>
          <strong>FALL SCHEDULE</strong>
        </p>
        <p>
          <u>
            <i>*All games take place on Saturday</i>
          </u>
        </p>
        <v-container>
          <v-data-table :headers="headers" :items="info" class="elevation-1">
            <template v-slot:items="props">
              <td>{{ props.item.date }}</td>
              <td>
                <v-avatar size="40">
                  <img :src="props.item.escudo" />
                </v-avatar>
              </td>
              <td>{{ props.item.team }}</td>
              <td>
                <v-avatar size="40">
                  <img :src="props.item.escudo2" />
                </v-avatar>
              </td>
              <v-hover>
                <td slot-scope="{ hover }">
                  <a v-bind:href="props.item.location_url">{{
                    props.item.location
                  }}</a>
                  <iframe
                    :src="props.item.location_map"
                    align="center"
                    v-if="hover"
                  ></iframe>
                </td>
              </v-hover>
              <td>{{ props.item.time }}</td>
            </template>
          </v-data-table>
        </v-container>
        <p><strong>Facility Type:</strong> Outdoor</p>
        <p>
          <strong>Additional Information:</strong> If deemed necessary by NYSL,
          games may be shortened or cancelled due to extreme weather conditions.
        </p>
        <p>
          <strong>Please direct all questions to:</strong> Michael Randall,
          League Coordinator
        </p>
        <p><strong>Phone:</strong> (630) 690-8132</p>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Date",
          align: "left",
          sortable: false,
          value: "date"
        },
        { text: "", value: "teams", sortable: false },

        { text: "Teams", value: "teams", sortable: false },
        { text: "", value: "teams", sortable: false },
        { text: "Location", value: "location", sortable: false },
        { text: "Time", value: "", sortable: false }
      ],
      info: []
    };
  },
  mounted() {
    fetch("https://api.myjson.com/bins/ntuth", { method: "GET" })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(res => {
        this.info = res.informacion;
        console.log(this.info);

        return res.information;
      });
  }
};
</script>
