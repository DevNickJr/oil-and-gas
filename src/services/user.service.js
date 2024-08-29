import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://local-content-server.herokuapp.com/api/v1/submit';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getAllUserDetails() {
    
    return axios.get(API_URL , { headers: authHeader() });
  }

  getOneUserDetail(id) {
    console.log('called: ', authHeader());
    return axios.get(API_URL + '/' + id, { headers: authHeader() });
  }
}

export default new UserService();
