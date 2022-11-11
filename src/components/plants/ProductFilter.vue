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
        filterGenus(selectedGenus) {
            this.$emit('filter-genus', selectedGenus)
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