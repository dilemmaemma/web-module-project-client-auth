import axios from 'axios'

export default axiosWithAuth = () => {
    const token = localStorage.getItem('token')
    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'http://localhost:5000/api'
    })
}