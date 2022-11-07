<template>
        <p v-if="isLoading">Loading...</p>
        <div class="container">
        <div class="card-wrap-outer">
        <div class="card-wrap-inner">
            <plant-card v-for="plant of plants" :plant-data="plant" @refresh-plants="getPlants"></plant-card>
        </div>
        </div>
        </div>
</template>

<script>
import PlantCard from './PlantCard.vue'
import PlantForm from './PlantForm.vue'
import backend from '@/services/firebaseApi'
export default {
    components: {PlantCard, PlantForm},

    data() {
        return {
            plants: [],
            isLoading: false,
        }

    },
    methods: {
        getPlants(){
            this.isLoading = true
            backend.getAllPlants().then((response)=>{
                let data = response.data
                const results = [];
                console.log(data)
                for (const id in data) {
                    let plantData = data[id]
                    plantData.id = id;
                    results.push(plantData)
                }
                this.isLoading = false;
                this.plants = results;
                //console.log(this.plants)

            }).catch((error)=>{
                console.log(error)
                this.isLoading = false;
                alert('something went wrongo dongo')
            })
        }
    },
    mounted() {
        this.getPlants()
    },
}
</script>

<style>
.container {
  width: 100%;
  max-width: 960px;
  margin: 30px auto;
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