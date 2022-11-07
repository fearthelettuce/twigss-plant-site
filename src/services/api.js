import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: 'https://plant-site-c1ce0-default-rtdb.firebaseio.com/'
    })
}