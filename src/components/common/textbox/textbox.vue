<template>
  <input
    class="inputfield form__field"
    type="text"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
</script>
  
<style lang="scss">
$primary: #11998e;
$secondary: #38ef7d;
$gray: #9b9b9b;

.form__field {
  font-family: inherit;
  width: 50%;
  border: 0;
  border-bottom: 2px solid $gray;
  outline: 0;
  font-size: 1.3rem;
  color: black;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: black;
  }
}

.form__field:focus {
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, $primary, $secondary);
  border-image-slice: 1;
}
.form__field {
  &:required,
  &:invalid {
    box-shadow: none;
  }
}
</style>