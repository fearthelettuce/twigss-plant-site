<template>
    <h1>{{ plantData.name }}</h1>
    <p>{{ plantData.shortDescription }}</p>
    <img :src="plantData.photoUrl">

    <h2>{{ plantData.name }} Care</h2>
    <p>Difficulty: {{ careRecommendation }}</p>
    <p>Temperature: {{ care.temps[plantData.careConditions] }}</p>
    <p>Humidity: {{ care.genus[plantData.genus].humidity }}</p>
    <p>Watering: {{ care.genus[plantData.genus].watering }}</p>
</template>
<!-- TODO add care conditions to database from The Guide and connect-->
<script>
import backend from '@/services/firebaseApi'
export default {
    data() {
        return {
            plantData: {},
            care: {
                genus: {
                    Nepenthes: {
                        humidity: '75-90%',
                        watering: 'I have found the most success by top watering and allowing water to drain freely (do not use a tray).'
                    },
                    Cephalotus: {
                        humidity: 'Normal room humidity has worked well for me.  Cephalotus should not be kept in a high humidity environment.',
                        watering: 'Tray watering.'
                    },
                    Heliamphora: {
                        humidity: '75-90%',
                        watering: "I have found the most success by top watering and allowing water to drain freely. I don't use trays - see the care guide for details."
                    }
                },
                temps: {
                    Intermediate: 'Plants grow well at a wide range of temperatures and do not require a significant temp drop at night. (58-70F at night, 70-80F during the day)',
                    Highland: 'Plants require a significant temp drop at night and will need active cooling to thrive. (50F-62F lows at night, 70-80F during the day) ',
                    Room: 'Plants grow well at normal room temperatures (68-80F).',
                    Lowland: 'Plants need warm conditions to thrive, may require heating.',
                    Other: 'Plants have some other temperature requirement.',
                }
            }

        }
    },
    props: ['id'],
    computed: {
        careRecommendation() {
            if (this.plantData.careDifficulty < 5) {
                return 'This plant is beginner friendly.'
            } else if (this.plantData.careDifficulty < 7) {
                return 'This plant is recommended for growers with some experience.'
            } else {
                return 'This plant is recommended for advanced growers that can accommodate special conditions.'
            }
        },
    },
    created() {
        this.getPlantDetails(this.id)
    },
    methods: {
        getPlantDetails(plantId) {
            backend.getOnePlant(plantId).then((response) => {
                if (response.status === 200) { this.plantData = response.data }
            }).catch((error) => { console.error(error); alert('something went wrongo dongo') })
        }
    }
}

</script>

<style>
img {
    height: 40em;

}
</style>