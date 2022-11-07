import Api from '@/services/Api'
const baseReqURL = 'https://api.scryfall.com/cards/search?'
const orderURL = 'order=released&dir=desc&'

async function getAllPrintings(name) {
    console.log(name)
    //queryNameURL = `q=${name.replace(/ /g, "+")}`
    let queryNameURL = `q=${name}`
    let reqURL = `${baseReqURL}${orderURL}${queryNameURL}&unique=prints`
    const res = await Api().get(reqURL)
    let allCards = await res.data
    allCards = allCards.data.filter(card => card.digital == false)
    console.log(allCards)
    return allCards
}

async function getScryfallCardDetails(name, setAbbr, treatment) {
    queryNameURL = `q=${name.replace(/ /g, "+")}`
    let querySetURL = '';
    let queryFrameURL;
    if (setAbbr && setAbbr.length === 3) { querySetURL = `+set%3A${setAbbr}` }
    if (treatment == 'Extended Art' || treatment == 'EA') { queryFrameURL = `+frame%3Aextendedart` } else { queryFrameURL = '' }
    if (treatment == 'Showcase') { queryFrameURL = `+frame%3Ashowcase` }
    if (treatment == 'Borderless') { queryFrameURL = '+border%3Aborderless' }
    //console.log(`${baseReqURL}${orderURL}${queryNameURL}${querySetURL}${queryFrameURL}`)
    reqURL = `${baseReqURL}${orderURL}${queryNameURL}${querySetURL}${queryFrameURL}&unique=prints`
    const res = await axios.get(reqURL)
    const firstCard = await res.data.data[0]
    const allCards = await res.data
    console.log(allCards.json())
    if (res.total_cards == 1) {
        return firstCard
    } else {
        return firstCard
    }
}



export default {
    getScryfallCardDetails: getScryfallCardDetails,
    getAllPrintings: getAllPrintings
}