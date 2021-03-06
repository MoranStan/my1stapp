<template>
  <div id="fifth">
    <h1>5th problem!</h1>
    <h2>Fizz Buzz</h2>
    <b-jumbotron header="" lead="" width="70%">
      <h5 class="hColor">
        Given a string of characters, return the character that appears the most
        often..
      </h5>
      <h3 v-if="!textb" class="new_span"></h3>
      <h3 style="color: Tomato">{{ textb }}</h3>
      <div>
        <div class="form-group">
          <input
            type="text"
            id="myName"
            ref="myInput"
            v-model="num"
            placeholder="enter text"
          />
         
          <div class="spacer">
            <!-- <button @click="outputFromModel">v-model</button> 
            <button @click="outputFromRef">ref</button>
            <button @click="outputFromId">ID</button>
            <button @click="checkMax">Submit</button>-->
            <v-button :onClick="checkMax">Component Submit</v-button>
          </div>
        </div>
         <text-field
            placeholder="Your Name"
            v-model="num2"
          />
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