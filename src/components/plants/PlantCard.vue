<template>    
    <div class="card">
            <img :src="plantData.photoUrl">
        <div class="card-item">
            <h2>{{plantData.name}}</h2>
        </div>
        <div class="card-sub">
            <p class="currency">{{plantData.salePrice}}</p>
        </div>
        <div class="card-item flexible">
            <p>{{shortDescrDisplay}}</p>
        </div>
        <div class="card-footer">
      <base-button mode="outline" :plantData="plantData" @click="showForm">View Details</base-button>

      <base-button mode="outline" >Add to Cart</base-button>
    </div>
    </div>
    
    <PlantForm :plantData="plantData" v-if="showDummyForm" />
</template>

<script>
import BaseCard from '../UI/BaseCard.vue'
import PlantForm from './PlantForm.vue'
export default {
    components: {BaseCard, PlantForm},
    props: ['plantData'],
    computed: {
        shortDescrDisplay(){return this.strLimit(this.plantData.shortDescription,120)} 
    },
    data(){
        return {
            showDummyForm: false
        }
    },
    methods: {
        strLimit(str, size) {
            if (!str){return ''};
            str = str.toString();

            if (str.length <= size) {
            return str;
            }
            return str.substr(0, size) + '...';
        },
        showForm(){
            this.showDummyForm = true
        }
    }
}
</script>

<style scoped>

img {
    width: 100%;
    display: block;
    height: 20em;
}

.card {
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-basis: 30%
}

.card-item {
        padding: 8px 14px 8px 14px;
    }

.card-sub {
        padding: 0 8px;
    }

.card-footer {
    padding: 18px;
    overflow: hidden;
    border-top: 1px solid #dedede;
    display: flex;
    justify-content: space-between;
    }

.flexible {
    flex-grow: 1;
}</style>