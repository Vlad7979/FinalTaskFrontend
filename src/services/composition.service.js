import axios from 'axios';

const API_URL = 'https://fanficsappitr.herokuapp.com/api/compositions/';

class CompositionService {
    getAllCompositions() {
        return axios.get(API_URL + 'all');
    }

    getSortedCompositions() {
        return axios.get(API_URL + 'sorted');
    }

    getCompositionByUsername(name) {
        return axios.get(API_URL + 'get',{
            params: {name: name}
        })
    }

    getCompositionUser(name) {
        return axios.get(API_URL + 'getUser',{
            params: {name: name}
        })
    }
}

export default new CompositionService();