<template>
    <ul>
        <li v-for="genus of genusList">
            <BaseButton @click="filterGenus(genus.label)">{{ genus.label }}</BaseButton>
        </li>
    </ul>
</template>

<script>
import genusData from '@/services/plantList'
export default {
    data() {
        return {
            genusList: genusData,
        }
    },
    methods: {
<<<<<<< HEAD
        filterGenus(selectedGenus) {
            this.$emit('filter-genus', selectedGenus)
=======
        filterGenus(genus) {
            console.log(genus)
            this.$emit('filter-genus', genus)
>>>>>>> a3cd4130181b92ac454fabb7f83ce2923857783d
        }
    },
}
</script>
<style>
ul {
    display: flex;
    flex-direction: row;
}
</style>