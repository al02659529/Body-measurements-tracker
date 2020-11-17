import axios from 'axios'

const baseUrl = "http://localhost:3001/measurements/"

const getUserMeasurements = async () => {
    console.log(baseUrl)
    const response = await axios.get(baseUrl)
    return response.data
}


export default {
    getUserMeasurements
}