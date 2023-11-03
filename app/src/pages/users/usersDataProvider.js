import axios from 'axios';
import Cookies from 'js-cookie';

const find = (args) => {
    const token = Cookies.get('token');
    const URL = "https://jsonplaceholder.typicode.com/users/2";
    return axios.get(URL, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(function (response) {
        return response.data;  // Retornar os dados da resposta
    }).catch(function (error) {
        throw error;  
    });
}

export const UsersProvider = {
  find
}

export default UsersProvider;
