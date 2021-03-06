  <template>
      <input class="inputfield trial"
        type="text" 
        v-on="$listeners" 
        :value="value" 
        @input="$emit('input', event.target.value)">
  </template>

  <script>
  export default {
    props: ["value"],
    model: {
      prop: "value",
      event: "update"
    }
  };
  </script>
  
<style>
.trial {
 color:cadetblue;
 background: chartreuse;
}
</style>