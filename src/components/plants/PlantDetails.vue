<template>
    <p>{{plantData.name}}</p>
    <PlantForm :plantData="plantData" />
</template>

<script>
import PlantForm from './PlantForm.vue'
export default {
    props: {
        plantData: Object
    }


}

</script>