<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
</template>
  
<script>
export default {
  props: ['type', 'mode']
}
</script>
  
<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: rgb(103, 202, 37);
  border: 1px solid rgb(103, 202, 37);
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #97e627;
  border-color: #97e627;
  color: white;
}

button:active {
  transform: scale(0.96);
}

.flat {
  background-color: transparent;
  color: rgb(103, 202, 37);
  border: none;
}

.outline {
  background-color: transparent;
  border: 1px solid rgb(103, 202, 37);
  color: rgb(103, 202, 37);
}

.outline:hover,
.outline:active {
  background-color: rgb(103, 202, 37);
  border-color: rgb(103, 202, 37);
  color: white;
}

.flat:hover,
.flat:active {
  background-color: #97e627;
}
</style>