import axios from 'axios'

export const api = axios.create({
    baseURL:'http://scb-movies-api.herokuapp.com',
    headers:{
        'api-key':'11d170db4de409721b4cc8fc4e528584b6634d60'
    }
})