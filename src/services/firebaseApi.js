import Api from '@/services/Api'

async function getAllPlants() {
    return Api().get('/plants.json')
}

async function getOnePlant(plantData) {
    return Api().get(`/${plantData.id}`)
}

async function savePlant(plantData) {
    return Api().post('/plants.json', plantData)
}

async function deletePlant(plantId) {
    return Api().delete(`plants/${plantId}.json`)
}


export default {
    getAllPlants: getAllPlants,
    getOnePlant: getOnePlant,
    savePlant: savePlant,
    deletePlant: deletePlant
}