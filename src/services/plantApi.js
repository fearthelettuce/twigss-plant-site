import Api from '@/services/Api'


async function getAllPlants() {
    return Api().get('/')
}

async function getOnePlant(plantData) {
    return Api().get(`/${plantData.id}`)
}

async function savePlant(plantData) {
    if (plantData.id) {
        return Api().patch(`/${plantData.id}`)
    } else {
        return Api().post('/save', plantData)
    }

}

async function deletePlant(plantData) {
    return Api().delete(`/${plantData.id}`)
}


export default {
    getAllPlants: getAllPlants,
    getOnePlant: getOnePlant,
    savePlant: savePlant,
    deletePlant: deletePlant
}