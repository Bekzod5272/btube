import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    params: {
        maxResults: '50',
    },
    headers: {
		'x-rapidapi-key': '5fc6f12b1bmsh7f9e7ece689b6aep18923djsn50a478c49786',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};
export const ApiService = {
    async fetchData(url) {
        const response = await axios.get(`${BASE_URL}/${url}`, options);
        return response;
    }
}