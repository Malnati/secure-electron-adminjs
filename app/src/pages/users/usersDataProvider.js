import axios from 'axios';

const find = (args, resolve, failback) => {
    const token = Cookies.getCookie('token');
    const URL = "https://jsonplaceholder.typicode.com/users/2";
    const { data } = axios.get(URL, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(function (response) {
        return resolve(response);
    }).catch(function (error) {
        return failback(error);
    });
    return data;
}

const UsersProvider = {
    find
}

export default UsersProvider;