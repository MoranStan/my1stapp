<template>
  <div id="seventh">
    <h1>7th problem!</h1>
    <h2>Vowels</h2>
    <b-jumbotron header="" lead="" width="70%">
      <h5 class="hColor">
        Given a string of words or phrases, count the number of vowels.
      </h5>
      <h3 v-if="!textb" class="new_span"></h3>
      <h3 style="color: Tomato">{{ textb }}</h3>
      <div>
        <div class="form-group">
          <div class="spacer"></div>
          <text-field
            id="myName2"
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
      var count = 0,
        vowelList = 'AEIOUaeiou',
        str = this.num;
      for (var i = 0; i < str.length; i++)  {
        if (vowelList.indexOf(str.charAt(i))>0 ) {
          count+=1;        
        }
      }
      this.textb = "The string contains: " +count + " vowels!";
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