<template>
    <ul>
        <li v-for="genus of genusList">
            <BaseButton @click="filterGenus(genus.label)">{{ genus.label }}</BaseButton>
        </li>
        <BaseButton @click="clearFilter()">Clear Filter</BaseButton>
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
        filterGenus(selectedGenus) {
            this.$emit('filter-genus', selectedGenus)
        },
        clearFilter() {
            this.$emit('clear-filter')
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