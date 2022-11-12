<template>
    <ul>
        <li v-for="genus of genusList" :key="genus.label">
            <BaseButton @click="filterGenus(genus.label)"  :mode="isSelected(genus.label) ? 'outline' :''">
                {{ genus.label }}
            </BaseButton>
        </li>
        <BaseButton @click="clearFilter()" mode="flat">Clear Filter</BaseButton>
    </ul>
</template>

<script>
import productData from '@/services/plantList'
export default {
    data() {
        return {
            genusList: productData,
            selProduct: []
        }
    },

    computed: {
        genusClicked(){
            console.log(this.genusList)
            if(!this.clickedGenus){ return {clicked: false}}
            let theGenus = this.genusList[this.clickedGenus.toLowerCase()]
            
            if(theGenus) {
                theGenus.clicked = this.clicked
                theGenus.style = 'flat'
            } 
            return theGenus
        }
    },
    methods: {
        isSelected(selectedGenus) {
            return this.selProduct.includes(selectedGenus)
        },
        filterGenus(selectedGenus) {
            if (this.isSelected(selectedGenus)) {
                this.selProduct = this.selProduct.filter(s => s !== selectedGenus)
            } else {
                this.selProduct = [...this.selProduct, selectedGenus]
            }
            this.$emit('filter-genus', selectedGenus)
        },
        clearFilter() {
            this.selProduct = []
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