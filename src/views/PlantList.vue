<template>
    <p v-if="isLoading">Loading...</p>
    <ProductFilter @filter-genus="filterPlants($event)" @clear-filter="clearFilter" />
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
import backend from '@/services/firebaseApi'

export default {
    components: { PlantCard, ProductFilter },

    data() {
        return {
            plants: [],
            displayPlants: [],
            isLoading: false,
        }
    },
    provide() {
        return {
            plants: this.plants,

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
                this.displayPlants = results;

            }).catch((error) => {
                console.log(error)
                this.isLoading = false;
                alert('something went wrongo dongo')
            })
        },
        filterPlants(selectedGenus) {
            let filteredPlants = [];
            filteredPlants = this.plants.filter(plant => plant.genus === selectedGenus)
            this.displayPlants = filteredPlants
        },
        clearFilter() {
            this.displayPlants = this.plants
        },
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