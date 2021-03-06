<template>

    <div id="forth">
    <h1>4th problem!</h1>
    <h2>Fizz Buzz</h2>
  <b-jumbotron header="" lead="" width=70%>

    <h5 class="hColor"> Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; 
      when it’s divisible by 3, print out “Buzz”; 
      when it’s divisible by both 2 and 3, print out “Fizz Buzz”.</h5>
   
    <h3 style="color:Tomato;"> {{textb}}</h3>
    <div>
        <div class="form-group">
            <input
                type="number"
                id="myName"
                ref="myInput"
                v-model="num"
                placeholder="enter text"
            >
        <div class="spacer">

            <!-- <button @click="outputFromModel">v-model</button> 
            <button @click="outputFromRef">ref</button>
            <button @click="outputFromId">ID</button>-->
            <button @click="palindrome">Submit</button>
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
       palindrome: function() {
        var num= this.num;
        this.textb="";
        for (var i = num; i > 0; i--) {
           if (i %2 ==0 && i %3 == 0) { 
             this.textb+=" Fizz-Buzz " + i;
           }
           else if  (i %2 == 0) { 
             this.textb+=" Fizz "+ i;
           }
           else if  (i %3 == 0) { 
             this.textb+=" Buzz"+'\n'+ i;
           }
        }
      },
     outputFromRef() {
        alert(this.$refs.myInput.value)
      },
      outputFromId() {
        alert(document.getElementById('myName').value)
      },
    }
  };
  </script>
<style scoped>

label{
  display: block;
  margin: 20px 0 10px;
}
input {
  font-size: 30px;
  border: 1px double rgb(102, 97, 96) ;
  border-radius: 4px;
}
button {
  font-size: 20px;
  margin: 15px;
  color: white;
  background-color: darkred;
  padding: 4px;
  border: 1px double rgb(102, 97, 96) ;
  border-radius: 4px;
}

.hColor{
    color:rgb(72, 49, 49);
    
}

</style>
