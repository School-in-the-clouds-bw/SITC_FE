import axios from 'axios'

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem("token");

    return axios.create({
        headers: {
            authorization: token,
        },
        baseUrl: "https://school-in-the-cloud-be.herokuapp.com/api/",
    });
};

export default axiosWithAuth;