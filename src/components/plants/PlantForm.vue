<!-- //TODO reformat format e.g. https://codepen.io/rstrahl/pen/rxmjgL -->

<template>
  <div class="container">
    <form @submit.prevent="submitForm">
      <section name="plant-info" class="form-group">
        <div class="section-header">
          <div class="section-header-item">
            <h2>Plant Info</h2>
          </div>
        </div>

        <div class="section-content">
          <div class="section-item med">
            <label for="name">Plant Name</label>
            <input id="name" name="name" type="text" v-model.trim="enteredInfo.name" @blur="autoSelectGenus($event)" />
          </div>
          <div class="section-item small">
            <label for="genus">Genus</label>
            <select id="genus" name="genus" v-model="enteredInfo.genus">
              <option v-for="item of genusList">{{ item.label }}</option>
            </select>
          </div>
          <div class="section-item long">
            <label for="shortDescription">Description</label>
            <textarea id="shortDescription" name="shortDescription" type="textarea" rows="3"
              v-model="enteredInfo.shortDescription" />
          </div>
        </div>
      </section>

      <section name="care-info" class="form-group">
        <div class="section-header">
          <div class="section-header-item"><h2>Care</h2></div>
        </div>

        <div class="section-content">
          <div class="form-control small">
            <label for="careDifficulty">Care Difficulty</label>
            <input id="careDifficulty" name="careDifficulty" type="number" v-model="enteredInfo.careDifficulty" />
          </div>
          <div class="form-control small">
            <label for="careTemp small">Care Temp</label>
            <select id="careTemp" name="careTemp" v-model="enteredInfo.careTemp">
              <option v-for="temp in careConditions.careTemp" :value="temp.label">{{temp.label}}</option>
            </select>
          </div>
        </div>
      </section>

      <section name="selling-info" class="form-group">
        <div class="section-header">
          <h2>Selling</h2>
        </div>
        <div class="section-content">
          <div class="form-control">
            <label for="availableForSale">For Sale</label>
            <input id="availableForSale" name="availableForSale" type="checkbox"
              v-model.trim="enteredInfo.availableForSale" />
          </div>

          <div class="form-control small">
            <label for="salePrice">Sale Price</label>
            <input id="salePrice" name="salePrice" type="number" v-model="enteredInfo.salePrice" />
          </div>
          <div class="form-control small">
            <label for="size">Size</label>
            <input id="size" name="size" type="text" v-model="enteredInfo.size" />
          </div>
          <div class="form-control small">
            <label for="quantity">Quantity</label>
            <input id="quantity" name="quantity" type="number" v-model="enteredInfo.quantity" />
          </div>
          <div class="form-control long">
            <label for="photoUrl">Photo Url</label>
            <input id="photoUrl" name="photoUrl" type="URL" v-model="enteredInfo.photoUrl" />
          </div>
        </div>
        <div class="form-control long">
            <label for="actualPhoto">Photo of the actual plant for sale?</label>
            <input id="actualPhoto" name="actualPhoto" type="checkbox" v-model="enteredInfo.actualPhoto" />
        </div>
        <div>
          <h2>Image Preview</h2>
          <img :src="enteredInfo.photoUrl">
        </div>
      </section>
      <div>
        <button @click="savePlant">Save Data</button>
        <button @click="saveAndExit">Save & Exit</button>

        <p v-if="showSuccessMessage">Plant successfully saved!</p>
      </div>
      <div>
        <button v-if="id" @click="deletePlant(id)">Delete Plant</button>

        <p v-if="showDeleteMessage">Plant successfully deleted!</p>
      </div>
    </form>
  </div>
</template>
<script>
import backend from '@/services/firebaseApi'
import genusData from '@/services/plantList'
import careData from '@/services/careData'
export default {
  props: ['id'],
  data() {
    return {
      enteredInfo: {
        name: '',
        genus: '',
        shortDescription: '',
        careDifficulty: null,
        careConditions: '',
        careTemp: '',
        size: '',
        availableForSale: false,
        quantity: 0,
        salePrice: 0,
        photoUrl: '',
        actualPhoto: true,
      },
      genusList: genusData,
      careConditions: careData,
      showSuccessMessage: false,
      showDeleteMessage: false,
    }
  },
  methods: {
    async savePlant(event) {
      const plant = this.enteredInfo
      if (this.id) {
        plant.id = this.id
      }
      backend.savePlant(plant).then((response) => {
        if (response.status == 200) {
          this.showSuccessMessage = true;
          setTimeout(() => { this.showSuccessMessage = false; }, 2500)
        }
      }).catch((err) => { console.log(err); alert('Something went wrong') })
    },

    saveAndExit(event) {
      this.savePlant(event).then((response)=>{
        this.$router.push('/');
      }).catch((error)=>{
        alert('something went wrongo dongo')
        console.error(error)
      })
      

      // TODO - when saving a new plant and going back to PlantList, the list isn't updated with the new plant.  
    },

    deletePlant(plantId) {
      backend.deletePlant(plantId).then((response) => {
        if (response.status == 200) {
          this.showDeleteMessage = true;
          setTimeout(() => { this.showDeleteMessage = false; this.$router.push('/'); }, 600)
          this.$emit('refresh-plants')
        }
      }).catch((error) => {
        console.log(error)
        alert('something went wrongo dongo')
      })
    },

    autoSelectGenus(event) {
      let enteredName = event.target.value.toLowerCase()
      if (!this.enteredInfo.genus) {
        for (let item in this.genusList) {
          if (enteredName.includes(this.genusList[item].label.toLowerCase())) {
            this.enteredInfo.genus = this.genusList[item].label
            if (this.genusList[item].careConditions) {
              this.enteredInfo.careConditions = this.genusList[item].careConditions
            }
            return;
          }
        }
      }
    },

    resetForm() {
      this.enteredInfo = {
        name: '',
        genus: '',
        shortDescription: '',
        careDifficulty: null,
        careConditions: '',
        size: '',
        availableForSale: false,
        quantity: 0,
        salePrice: 0,
        photoUrl: '',
      }
    },

    getPlantDetails(plantId) {
      backend.getOnePlant(plantId).then((response) => {
        if (response.status === 200) { this.enteredInfo = response.data }
      }).catch((error) => { console.error(error); alert('something went wrongo dongo') })
    },

  },

  created() {
    if (this.$route.params.id) {
      this.getPlantDetails(this.$route.params.id)
    }
  }
}
</script>

<style scoped>

.container {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: 60px 80px;
        justify-content: space-around;
    }

  .section-header {
    display: flex;
        flex-direction: row;
        justify-content: space-between;
  }

  .section-header-item {
    width: 300px;
        align-items: center;
  }

  .section-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0 8px;
  }

  .section-item {
    border-radius: 5px;
    border: 1px solid lightgray;
    padding: 16px;
    margin: 6px 0;
    justify-content: space-evenly;
  }

.small {
  flex: 1 200px;
}

.med {
  flex: 1 300px;
}

.long {
  flex: 1 600px;
}

img {
  height: 200px;
}

textarea {
  flex-grow: 1;
}
</style>