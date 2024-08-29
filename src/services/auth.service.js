import axios from 'axios';

const API_URL = 'https://local-content-server.herokuapp.com/api/v1/auth/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'signin', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      })
      .catch(error => {
        throw new Error(error);
      });
  }

  logout() {
    localStorage.removeItem('user');
  }
}

export default new AuthService();