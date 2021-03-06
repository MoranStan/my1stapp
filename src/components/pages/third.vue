<template>

    <div id="third">
    <h1>3rd problem!</h1>
    <h2>Integer Reversal</h2>

    <h3 class="hColor">  Same as the first problem</h3>

    
        
    <span style="white-space: pre;"></span>

    <p> 
          
        <router-link to="/">Back</router-link>
    </p>

    <router-view></router-view>
    </div>
</template>

  <script>
  export default {


    data() {
      return {
        name: '',
        textb:'',
      }
    },
    methods: {
      outputFromModel() {
        alert(this.name)
      },
       palindrome: function() {
        var str= this.name;
        var re = /[\W_]/g;
        var len = str.length;
        str = str.toLowerCase().replace(re, '');
        for (var i = 0; i < len/2; i++) {
           if (str[i] !== str[len - 1 - i]) { 
             this.textb="false";
             return;
           }
        }
        this.textb="true";
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
    color:red;
}

</style>
