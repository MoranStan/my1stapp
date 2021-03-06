<template>

    <div id="fifth">
    <h1>5th problem!</h1>
    <h2>Fizz Buzz</h2>
    <b-jumbotron header="" lead="" width=70%>
    <h5 class="hColor">Given a string of characters, return the character that appears the most often..</h5>
   
    <h3 style="color:Tomato;"> {{textb}}</h3>
    <div>
        <div class="form-group">
            <input
                type="text"
                id="myName"
                ref="myInput"
                v-model="num"
                placeholder="enter text"
            >
        <div class="spacer">

            <!-- <button @click="outputFromModel">v-model</button> 
            <button @click="outputFromRef">ref</button>
            <button @click="outputFromId">ID</button>-->
            <button @click="checkMax">Submit</button>
        </div>
        </div>  
    </div>
    <span style="white-space: pre;"></span>

    <p> 
          
        <router-link to="/">Back</router-link>
    </p>
  </b-jumbotron>

    <router-view></router-view>
    </div>
</template>

<script>
export default {  
    data() {
      return {
        num: '',
        textb:'',
      }
    },
    methods: {
      outputFromModel() {
        alert(this.name)
      },
       checkMax: function() {
        var max = 0,
            maxChar = '',
            num= this.num;
        num.split('').forEach(function(char){
            if(num.split(char).length > max) {
                max = num.split(char).length;
                maxChar = char;
            }
        });
         this.textb=maxChar +"!";
    }
 }
}
</script>