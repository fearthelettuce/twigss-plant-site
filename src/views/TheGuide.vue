<template>
    <h1>Carnivorous Plant Cultivation Guide</h1>
    <GuideList />
</template>

<script>
import GuideList from '../components/guide/GuideList.vue'
export default {
    components: {GuideList},
    data(){
        return {

        }
    }
}
</script>

<style scoped>
h1{
    text-align: center;
    margin: 0;
    padding: 0;
}
</style>