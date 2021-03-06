<template>

    <div id="foo">
    <h1>1st problem!</h1>
    <h2>Reverse string</h2>

    <h3 class="hColor">  {{name}}</h3>

    <div>
        <div class="form-group">
            <input
                type="text"
                id="myName"
                ref="myInput"
                v-model="name"
                placeholder="enter text"
            >
        <div class="spacer">

            <!-- <button @click="outputFromModel">v-model</button> 
            <button @click="outputFromRef">ref</button>
            <button @click="outputFromId">ID</button>-->
            <button @click="reverseString">Reverse Message</button>
        </div>
        </div>  
    </div>
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
      }
    },
    methods: {
      outputFromModel() {
        alert(this.name)
      },
       reverseString: function() {
      this.name= (this.name.split("").reverse().join(""))
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
