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
        filterGenus(genus) {
            console.log(genus)
            this.$emit('filter-genus', genus)
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