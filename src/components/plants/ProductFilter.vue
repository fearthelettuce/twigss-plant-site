<template>
    <ul>
        <li v-for="genus of genusList" :key="genus.label">
            <BaseButton @click="filterGenus(genus.label)"  :mode="genusClicked.clicked ? 'outline' : ''">
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
            clickedGenus: '',
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
            //console.log(theGenus)
            //theGenus.clicked = true
            //console.log(clickTrackerObj)
            // theGenus.clicked = true
            // console.log(theGenus)
            return theGenus
        }
    },
    methods: {
        filterGenus(selectedGenus) {
            this.clickedGenus = selectedGenus
            this.clicked = !this.clicked //filter not correctly toggling button styles
            this.$emit('filter-genus', selectedGenus)
            console.log(this.genusClicked.clicked)
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