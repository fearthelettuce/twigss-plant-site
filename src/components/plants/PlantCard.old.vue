<template>
  
<li class="card-wrap-inner">  
  <div class="plant-item">
    <base-card>
    <img :src="plantData.photoUrl" :alt="plantData.name">
      <p>{{plantData.name}}</p>
      <p>{{plantData.salePrice}}</p>
      <p class="flexible">{{plantData.shortDescription}}</p>
      <div class="card-footer">
      <base-button mode="flat">View Details</base-button>
      <base-button mode="flat">Add to Cart</base-button>
    </div>
    </base-card>
  </div>
</li>

</template>

<script>
import BaseCard from '../UI/BaseCard.vue'
export default {
    components: {BaseCard},
    props: ['plantData'],
}
</script>

<style scoped>

a:hover,
a:active {
  color: #c89300;
}

.plant-item {
    /* border-radius: 6px;
    text-align: center;
    background-color: rgb(32, 29, 26);
    overflow: hidden;
    justify-content: space-between;
    padding: 1rem;
    min-width: 15rem; */

    display: flex;
    flex-direction: column;
    width: 100%;
}


.container {
  width: 100%;
  max-width: 960px;
  margin: 100px auto;
}

img {
    width: 100%;
    display: block;
}

@media (min-width: 480px) {

.card-wrap-inner { 
								width: 50%
        }
						}

@media (min-width: 1024px) {
  .card-wrap-inner { 
								width: 33.33%
        }
						}

.plant-item p {
  padding: 12px 18px 12px 18px;
}
.plant-item img {
    width: 100%;
    height: 24rem;
    object-fit: cover;
}

.card-wrap-inner {
  padding: 12px;
}
.card__sub {
        padding: 0 18px;
    }
.card-footer {
        padding-top: 12px;
        overflow: hidden;
        border-top: 1px solid #dedede;
    }

    .flexible {
    flex-grow: 1;
}

</style>




.pull {
  float: left;
}

.push {
  float: right;
}

.container {
width: 100%;
max-width: 960px;
margin: 100px auto;
}

img {
  width: 100%;
  display: block;
}

/*Card Styling*/

.card {
  border: 1px solid #dedede;
  background-color: white;
}

.card__wrap--inner {
          padding: 12px;
      }

.card__item {
      padding: 12px 18px 12px 18px;
  }

.card__sub {
      padding: 0 18px;
  }

.card__footer {
      padding: 18px;
      overflow: hidden;
      border-top: 1px solid #dedede;
  }

/*Card Flex Code*/

.card {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.card__wrap--outer {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: 100%;
      }

.card__wrap--inner {
          display: flex;
          flex-direction: row;
          width: 100%;
      }

@media (min-width: 480px) {

.card__wrap--inner { 
              width: 50%
      }
          }

@media (min-width: 1024px) {

.card__wrap--inner { 
              width: 33.33%
      }
          }

.flexible {
  flex-grow: 1;
}







<!-- 

<template>
  
  <li>  <div class="plant-item">
      <base-card>
      <img :src="plantData.photoUrl" :alt="plantData.name">
        <p>{{plantData.name}}</p>
        <p>{{plantData.salePrice}}</p>
        <p class="flexible">{{plantData.shortDescription}}</p>
        <base-button mode="flat">View Details</base-button>
        <base-button mode="flat">Add to Cart</base-button>
      </base-card>
    </div></li>
  
  </template>
  
  <script>
  import BaseCard from '../UI/BaseCard.vue'
  export default {
      components: {BaseCard},
      props: ['plantData'],
  }
  </script>
  
  <style scoped>
  
  a:hover,
  a:active {
    color: #c89300;
  }
  
  .plant-item {
      border-radius: 6px;
      text-align: center;
      background-color: rgb(32, 29, 26);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1rem;
      min-width: 15rem;
  }
  
  .plant-item img {
      width: 100%;
      height: 24rem;
      object-fit: cover;
  }
  
  .flexible {
    flex-grow: 1;
  }
  
  </style> -->