<template>
  <div id="app">
    <div >
        <navi></navi>
    </div>
    
  
    <router-view></router-view>
    <div >
      <footeri-component></footeri-component>
    </div>
  </div>


</template>

<script>
 import navi from '@/components/navi'
 import footeriComponent from '@/components/footeri'


  export default {
    name: 'App',
    components: {
        'navi': navi,
         footeriComponent,
 

    }
    
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
