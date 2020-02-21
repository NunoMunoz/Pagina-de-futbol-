<template>
  <div class="about">
    <v-container>
      <h1>Registration Form</h1>
      <v-form v-model="valid">
        <v-container>
          <v-layout>
            <v-flex xs12 md4>
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                append-icon="person"
                label="Player's First name"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 md4>
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                append-icon="person"
                label="Last name"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 md4>
              <v-text-field
                v-model="streetaddress"
                :rules="nameRules"
                append-icon="map"
                label="Street Address"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12 md4>
              <v-text-field
                v-model="city"
                :rules="nameRules"
                append-icon="location_city"
                label="City"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 md4>
              <v-text-field
                v-model="zipcode"
                :rules="numberRules"
                append-icon="notes"
                :counter="8"
                label="Zip Code"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 md4>
              <v-text-field
                v-model="birthdate"
                :rules="nameRules"
                append-icon="date_range"
                label="Birth Date"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12 md4>
              <v-text-field
                v-model="parentguardianname"
                :rules="nameRules"
                append-icon="account_box"
                label="Parent/Guardian Name"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 md4>
              <v-text-field
                v-model="contactphone"
                :rules="numberRules"
                append-icon="phone"
                :counter="8"
                label="Contact Phone"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 md4>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                append-icon="email"
                label="Contact E-mail"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <p>
            <strong>Gender:</strong>
          </p>
          <v-container>
            <v-radio-group v-model="row" row>
              <v-radio label="Female" value="radio-1"></v-radio>
              <v-radio label="Male" value="radio-2"></v-radio>
            </v-radio-group>
          </v-container>
          <p>
            <strong>Grade:</strong>
          </p>
          <v-container>
            <v-radio-group v-model="row" row>
              <v-radio label="Pre-School" value="radio-1"></v-radio>
              <v-radio label="1st" value="radio-2"></v-radio>
              <v-radio label="2nd" value="radio-3"></v-radio>
              <v-radio label="3rd" value="radio-4"></v-radio>
              <v-radio label="4th" value="radio-5"></v-radio>
              <v-radio label="5th" value="radio-6"></v-radio>
            </v-radio-group>
          </v-container>
          <p>
            <strong>Which elementary schools do you live near?</strong>
          </p>
          <v-container>
            <v-radio-group v-model="row" row>
              <strong>First Closest School:</strong>
              <v-select
                v-model="select1"
                :items="school"
                :rules="[v => !!v || 'First School is required']"
                label
                required
              ></v-select>
              <strong>Second Closest School:</strong>
              <v-select
                v-model="select2"
                :items="school"
                :rules="[v => !!v || 'Second School is required']"
                label
                required
              ></v-select>
            </v-radio-group>
          </v-container>
          <p>
            <strong>What position(s) do you normally play?</strong>(check all
            that apply)
          </p>
          <v-container>
            <v-radio-group v-model="row" row>
              <v-checkbox
                v-model="selected"
                label="Forward"
                value="Forward"
              ></v-checkbox>
              <v-checkbox
                v-model="selected"
                label="Defense"
                value="Defense"
              ></v-checkbox>
              <v-checkbox
                v-model="selected"
                label="Midfield"
                value="Midfield"
              ></v-checkbox>
              <v-checkbox
                v-model="selected"
                label="Goalkeeper"
                value="Goalkeeper"
              ></v-checkbox>
            </v-radio-group>
          </v-container>
          <p>
            <strong>What position(s) do you normally play?</strong>(check all
            that apply)
          </p>
          <v-container>
            <v-radio-group v-model="row" row>
              <v-checkbox
                v-model="selected"
                label="Forward"
                value="Forward"
              ></v-checkbox>
              <v-checkbox
                v-model="selected"
                label="Defense"
                value="Defense"
              ></v-checkbox>
              <v-checkbox
                v-model="selected"
                label="Midfield"
                value="Midfield"
              ></v-checkbox>
              <v-checkbox
                v-model="selected"
                label="Goalkeeper"
                value="Goalkeeper"
              ></v-checkbox>
            </v-radio-group>
          </v-container>
          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Already Have a Uniform?"
            required
          ></v-checkbox>
          <br />
          <p>
            <strong>Jersey Size:</strong>
          </p>
          <v-container>
            <v-radio-group v-model="row" row>
              <v-radio label="Youth Small" value="radio-1"></v-radio>
              <v-radio label="Youth Medium" value="radio-2"></v-radio>
              <v-radio label="Youth Large" value="radio-3"></v-radio>
              <v-radio label="Small" value="radio-4"></v-radio>
              <v-radio label="Medium" value="radio-5"></v-radio>
              <v-radio label="Large" value="radio-6"></v-radio>
              <v-radio label="Extra-Large" value="radio-7"></v-radio>
            </v-radio-group>
          </v-container>
          <p>
            <strong>Shorts Size:</strong>
          </p>
          <v-container>
            <v-radio-group v-model="row" row>
              <v-radio label="Youth Small" value="radio-1"></v-radio>
              <v-radio label="Youth Medium" value="radio-2"></v-radio>
              <v-radio label="Youth Large" value="radio-3"></v-radio>
              <v-radio label="Small" value="radio-4"></v-radio>
              <v-radio label="Medium" value="radio-5"></v-radio>
              <v-radio label="Large" value="radio-6"></v-radio>
              <v-radio label="Extra-Large" value="radio-7"></v-radio>
            </v-radio-group>
          </v-container>
          <p>
            <strong>
              <u>Permission to Play</u>
            </strong>
          </p>
          <br />
          <p>
            I, the parent or guardian of the minor registrant, agree that the
            registrant and I will abide by all the rules of the Northside Youth
            Soccer League (NYSL). In recognizing the possibility of physical
            injury associated with soccer and in consideration for the "League"
            accepting the registrant for its soccer programs and activities, I
            hereby release, discharge, and/or otherwise indemnify NYSL, their
            employees and associated personnel and volunteers, including the
            facilities used for practices and games, against any claim by or on
            behalf of the registrant as a result of the registrant's
            participation in the program and/or being transported to or from
            NYSL sponsored activities, which transportation.
          </p>
          <br />
          <p>
            By entering my name below, I hereby agree and authorize the above.
            In addition, by entering my name below, I also acknowledge that I
            have read the cancellation policy and agree to its terms.
          </p>
          <br />
          <v-layout>
            <v-flex xs12 md4>
              <v-text-field
                v-model="signature"
                append-icon="person"
                label="Parent/Guardian Signature:"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12 md4>
              <v-text-field
                v-model="date"
                append-icon="date_range"
                label="Date:"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-btn color="success">Enter</v-btn>
        </v-container>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "",
    email: "",
    select: null,
    school: [
      "AJ Katzenmaier",
      "Greenbay",
      "Howard A Yeager",
      "Marjorie P Hart",
      "North Elementary",
      "South Elementary"
    ],
    checkbox: false,
    radioGroup: 1,
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    numberRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 8) || "Name must be less than 8 characters"
    ],
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    dictionary: {
      attributes: {
        email: "E-mail Address"
        // custom attributes
      },
      custom: {
        name: {
          required: () => "Name can not be empty",
          max: "The name field may not be greater than 10 characters"
          // custom messages
        },
        select: {
          required: "Select field is required"
        }
      }
    }
  })
};
</script>
