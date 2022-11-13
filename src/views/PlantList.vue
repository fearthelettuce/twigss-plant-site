<template>
    <p v-if="isLoading">Loading...</p>
    <ProductFilter @filter-product="filterProducts($event, filters.genusFilter.exclude)" @clear-filter="(event) => clearFilter(filters.genusFilter, event)" :productData="genusList"/>
    
    <ProductFilter @filter-product="filterProducts($event, filters.careTemp.exclude)" @clear-filter="clearFilter(filters.careTemp)" :productData="careConditions.careTemp"/>
    
    <div class="container">
        <div class="card-wrap-outer">
            <div class="card-wrap-inner">
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
            genusFilterExclude: [],
            genusList: genusData,
            careConditions: careData,
            filters: {
                genusFilter: {
                    exclude: [],
                    criteria: 'genus'
                },
                careTemp: {
                    exclude: [],
                    criteria: 'careTemp'
                }
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
               let filterArr = this.filters[prodFilter].exclude
               filteredPlants = filteredPlants.filter(plant => !filterArr.includes(plant[this.filters[prodFilter].criteria]))
            }
            return filteredPlants
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
        // clearFilter() {
        //     this.displayPlants = this.plants
        // },
        clearFilter(filterKey) { filterKey.exclude = [] }
    },
    created() {
        this.getPlants()
    },
}
</script>

<style>
.container {
    width: 100%;

    margin: 20px auto;
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