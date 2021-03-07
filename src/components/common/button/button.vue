<template>
  <button class="button" @click="onClick">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style>
.button {
  margin: 10px;
  display: inline-block;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  background-color: #1f0a5e;
  border: 2px solid #000000;
  border-radius: 15px;
  box-shadow: 0 4px 10px #999;
}

.button:hover {
  background-color: #3975b5;
  border: 2px solid #000000;
}

.button:active {
  background-color: #671515;
  box-shadow: 0 4px 10px #999;
  font-style: oblique;
  outline: black;
  border: 2px solid #000000;
}
</style>