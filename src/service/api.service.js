import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    params: {
        maxResults: '50',
    },
    headers: {
        'x-rapidapi-key': '7e7fcbdd13mshc708a3264a50801p17af16jsn8c6a8b3a7f14',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
    }
};
export const ApiService = {
    async fetchData(url) {
        const response = await axios.get(`${BASE_URL}/${url}`, options);
        return  response.data;
    }
}