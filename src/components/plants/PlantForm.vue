<!-- //TODO reformat format e.g. https://codepen.io/rstrahl/pen/rxmjgL -->

<template>
  <div class="container">
    <form @submit.prevent="submitForm">
      <section name="plant-info" class="form-group">
        <h2>Plant Info</h2>
        <div class="form-control med">
          <label for="name">Plant Name</label>
          <input id="name" name="name" type="text" v-model.trim="enteredInfo.name" @blur="autoSelectGenus($event)" />
        </div>
        <div class="form-control long">
          <label for="shortDescription">Description</label>
          <input id="shortDescription" name="shortDescription" type="text" v-model="enteredInfo.shortDescription" />
        </div>
        <div class="form-control med">
          <label for="genus">Genus</label>
          <select id="genus" name="genus" v-model="enteredInfo.genus">
            <option v-for="item of genusList">{{ item.label }}</option>
          </select>
        </div>
      </section>

      <section name="care-info" class="form-group">
        <h2>Care</h2>
        <div class="form-control med">
          <label for="careDifficulty">Care Difficulty</label>
          <input id="careDifficulty" name="careDifficulty" type="number" v-model="enteredInfo.careDifficulty" />
        </div>
        <div class="form-control">
          <label for="careConditions med">Care Conditions</label>
          <select id="careConditions" name="careConditions" v-model="enteredInfo.careConditions">
            <option value="Intermediate">Intermediate</option>
            <option value="Highland">Highland</option>
            <option value="RoomTemp">Room Temp</option>
            <option value="Lowland">Lowland</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </section>

      <section name="selling-info" class="form-group">
        <h2>Selling</h2>
        <div class="form-control">
          <label for="availableForSale">availableForSale</label>
          <input id="availableForSale" name="availableForSale" type="checkbox"
            v-model.trim="enteredInfo.availableForSale" />
        </div>

        <div class="form-control">
          <label for="salePrice">Sale Price</label>
          <input id="salePrice" name="salePrice" type="number" v-model="enteredInfo.salePrice" />
        </div>
      </section>
      <section name="inventory-info" class="form-group">
        <div class="form-control">
          <label for="size">Size</label>
          <input id="size" name="size" type="text" v-model="enteredInfo.size" />
        </div>
        <div class="form-control">
          <label for="quantity">Quantity</label>
          <input id="quantity" name="quantity" type="number" v-model="enteredInfo.quantity" />
        </div>
        <div class="form-control">
          <label for="photoUrl">Photo Url</label>
          <input id="photoUrl" name="photoUrl" type="URL" v-model="enteredInfo.photoUrl" />
        </div>
        <img :src="enteredInfo.photoUrl">
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
        size: '',
        availableForSale: false,
        quantity: 0,
        salePrice: 0,
        photoUrl: '',
      },
      genusList: genusData,

      showSuccessMessage: false,
      showDeleteMessage: false,
    }
  },
  methods: {
    savePlant(event) {
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
      this.savePlant(event)
      this.$router.push('/');

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
      let enteredName = event.target.value
      if (!this.enteredInfo.genus) {
        for (let item of this.genusList) {
          if (enteredName.includes(item.label)) {
            this.enteredInfo.genus = item.label
            if (item.careConditions) {
              this.enteredInfo.careConditions = item.careConditions
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
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea,
select {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

img {
  height: 30em;
}

.container {
  flex-wrap: wrap;

}

.form-group {
  display: flex;
  flex-direction: row;
}

.form-group input {
  flex: 1 1 auto;
  display: block;
}

.form-control {
  margin: 1rem 0;
  padding: 2px 2px;
}

.med {
  flex-basis: 30%;
}

.long {
  flex-basis: 90%;
}

/* 
form hr {
    border-color: var(--color-primary-200);
    margin: var(--space-2);

}

label {
    color: var(--color-gray-100);
    display: block;
    margin-bottom: var(--space-1);
}

input,
textarea {
    font: inherit;
    padding: var(--space-2);
    border-radius: var(--border-radius-small);
    border: none;
    width: 90%;
} */
</style>