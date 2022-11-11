<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
</template>
  
<script>
export default {
  props: ['type', 'mode']
}</script>
  
<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: rgb(223, 159, 41);
  border: 1px solid rgb(223, 159, 41);
  color: white;
  cursor: pointer;
}


button:hover,
button:active {
  background-color: rgb(223, 150, 34);
  border-color: rgb(223, 150, 34);
  color: white;
}

.flat {
  background-color: transparent;
  color: rgb(212, 120, 14);
  border: none;
}

.outline:hover,
.outline:active {
  background-color: rgb(103, 202, 37);
  border-color: rgb(103, 202, 37);
  color: white;
}

.outline {
  background-color: transparent;
  border: 1px solid rgb(103, 202, 37);
  color: rgb(103, 202, 37);
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}





.btn-alt {
  background-color: transparent;
  color: rgb(212, 120, 14);
}

.btn-alt:hover,
.btn-alt:active {
  background-color: rgb(212, 120, 14);
}
</style>