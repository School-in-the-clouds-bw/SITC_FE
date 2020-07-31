import axios from 'axios'

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem("token");
    const role = window.localStorage.getItem("role");

    return axios.create({
        baseUrl: "https://school-in-the-cloud-be.herokuapp.com/api",
        headers: {
            role: role,
            authorization: token,
        },
    });
}; 

export default axiosWithAuth;   

