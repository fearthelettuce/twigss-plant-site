<template>
    <ul>
        <li v-for="genus of genusList">
            <BaseButton @click="filterGenus(genus.label)" :key="genus.label" :mode="clicked ? 'outline' : ''">
                {{ genus.label }}
            </BaseButton>
        </li>
        <BaseButton @click="clearFilter()" mode="flat">Clear Filter</BaseButton>
    </ul>
</template>

<script>
import genusData from '@/services/plantList'
export default {
    data() {
        return {
            genusList: genusData,
            clicked: false,
        }
    },
    methods: {
        filterGenus(selectedGenus) {
            this.clicked = !this.clicked //filter not correctly toggling button styles
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

li {
    padding: 0 4px
}
</style>