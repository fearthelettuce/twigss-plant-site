<template>
  <PlantForm :plantData="plantData" />
</template>

<script>
  import PlantForm from './PlantForm.vue'
  export default {
    components: {PlantForm},
    data(){
      return {
        plantData: {}
      }
    }
  }
</script>