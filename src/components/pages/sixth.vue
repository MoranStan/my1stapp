<template>
  <div id="sixth">
    <h1>6th problem!</h1>
    <h2>Anagrams</h2>
    <b-jumbotron header="" lead="" width="70%">
      <h5 class="hColor">
        Anagrams are words or phrases that contain the same number of
        characters. Create a function that checks for this.
      </h5>
      <h3 v-if="!textb" class="new_span"></h3>
      <h3 style="color: Tomato">{{ textb }}</h3>
      <div>
        <div class="form-group">
          <div class="spacer"></div>
          <text-field
            id="textin"
            type="text"
            placeholder="Enter text"
            v-model="num"
          />
        </div>
        <div class="spacer">
          <v-button :onClick="checkMax">Component Submit</v-button>
        </div>
      </div>

      <span style="white-space: pre"></span>

      <p>
        <router-link to="/">Back</router-link>
      </p>
    </b-jumbotron>

    <router-view></router-view>
  </div>
</template>

<script>
import Button from "@/components/common/button/button.vue";
import inputfield from "@/components/common/textbox/textbox.vue";

export default {
  components: {
    "v-button": Button,
    TextField: inputfield,
  },
  data() {
    return {
      num: "",
      num2: "",
      textb: "",
    };
  },
  methods: {
    outputFromModel() {
      alert(this.name);
    },

    consoleClick() {
      console.log("Button clicked");
    },
    checkMax: function () {
      var max = 0,
        maxChar = "",
        num = this.num;
      num.split("").forEach(function (char) {
        if (num.split(char).length > max) {
          max = num.split(char).length;
          maxChar = char;
        }
      });
      this.textb = maxChar + "!";
    },
  },
};
</script>

<style>
.new_span {
  content: " ";
  width: 100%;
  display: inline-block;
}
</style>