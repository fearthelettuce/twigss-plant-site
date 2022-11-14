<template>
    <p v-if="isLoading">Loading...</p>
    <div class="filter-container">
        <div>
            <BaseButton mode="flat small" @click="toggleFilterDisplay">{{filterToggleLabel}}</BaseButton>
        </div>
        <div v-show="showFilters" class="filter-container">
            <ProductFilter class="filter-item" @filter-product="filterProducts($event, filters.genusFilter.exclude)" @clear-filter="(event) => clearFilter(filters.genusFilter, event)" :productData="genusList"/>
            <ProductFilter class="filter-item" @filter-product="filterProducts($event, filters.careTemp.exclude)" @clear-filter="clearFilter(filters.careTemp)" :productData="careConditions.careTemp"/>
            <BaseToggle class="filter-item" @click="filterOOO($event, filters.outOfStock)" :value="filters.outOfStock.exclude">Show out of stock</BaseToggle>
        </div>
        
</div>    
    <div class="container">
        <div class="card-wrap-outer">
            <div class="card-wrap-inner">
                <div v-if="filterNoData"><p>There are no plants availale for your selected filters.</p></div>
                <plant-card v-for="plant of displayPlants" :plant-data="plant"></plant-card>
            </div>
        </div>
    </div>
</template>

<script>
// import PlantCard from '@/components/plants/PlantCard'
import PlantCard from '../components/plants/PlantCard.vue'
import ProductFilter from '../components/plants/ProductFilter.vue'
import genusData from '@/services/plantList.js'
import careData from '@/services/careData.js'
import backend from '@/services/firebaseApi'

export default {
    components: { PlantCard, ProductFilter },

    data() {
        return {
            plants: [],
            isLoading: false,
            // genusFilterExclude: [],
            showFilters: true,
            genusList: genusData,
            careConditions: careData,
            filters: {
                genusFilter: {
                    exclude: [],
                    criteria: 'genus',
                    filterFunction: (arr, filterCriteria, filterData)=>{
                        return arr.filter(plant => !filterData.includes(plant[filterCriteria]))},
                },
                careTemp: {
                    exclude: [],
                    criteria: 'careTemp',
                    filterFunction: (arr, filterCriteria, filterData)=>{
                        return arr.filter(plant => !filterData.includes(plant[filterCriteria]))},
                },
                outOfStock: {
                    exclude: [],
                    criteria: 'quantity',
                    filterFunction: (arr, filterCriteria)=>{return arr}
                },
            }
        }
    },
    provide() {
        return {
            plants: this.plants,

        }
    },
    computed: {
        displayPlants() {
            let filteredPlants = this.plants
            for(let prodFilter in this.filters) {
               filteredPlants = this.filters[prodFilter].filterFunction(filteredPlants, this.filters[prodFilter].criteria, this.filters[prodFilter].exclude)
            }
            return filteredPlants
        },
        filterNoData(){
            if(this.displayPlants.length === 0 && this.plants.length > 0) {
                return true;
            }
        },
        filterToggleLabel(){
            if(this.showFilters){
                return 'Hide Filters'
            } else {
                return 'Show Filters'
            }
        }
    },
    methods: {
        async getPlants() {
            this.isLoading = true
            backend.getAllPlants().then((response) => {
                let data = response.data
                const results = [];
                for (const id in data) {
                    let plantData = data[id]
                    plantData.id = id;
                    results.push(plantData)
                }
                this.isLoading = false;
                this.plants = results;

            }).catch((error) => {
                console.log(error)
                this.isLoading = false;
                alert('something went wrongo dongo')
            })
        },
        filterProducts(selectedProduct, filterArr) {
            if (!filterArr.includes(selectedProduct)) {
                filterArr.push(selectedProduct)
            } else {
                let index = filterArr.findIndex(element => element == selectedProduct)
                filterArr.splice(index, 1)
            }
        },
        toggleFilterDisplay(){
            this.showFilters = !this.showFilters
        },
        clearFilter(filterKey) { filterKey.exclude = [] }
    },
    created() {
        setTimeout(()=>{this.getPlants()}, 80)
    },
}
</script>

<style>
.container {
    width: 100%;
    margin: 0;
    padding: 0 20px;
    flex-wrap: wrap;
}

.card-grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
}

.card-wrap-outer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;

}

.card-wrap-inner {
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
}

.filter-container {
    display: flex;
    flex-direction: row;
    padding: 0 30px;
    align-items: center;
}

.filter-item {
    padding: 0 25px;
}
/* @media (min-width: 480px) {

.card-wrap-inner { 
								width: 50%
        }
						}

@media (min-width: 1024px) {

.card-wrap-inner { 
								width: 33.33%
        }
						} */

.flexible {
    flex-grow: 1;
}

/* .card-grid{ 
    margin: 2rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
    gap: 1rem;
} */
</style>