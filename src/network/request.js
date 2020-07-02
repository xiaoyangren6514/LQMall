import axios from 'axios'

export default function (config) {
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/n3',
        timeout: 30000
    })
    instance.interceptors.response.use(res => {
        return res.data
    }, error => {
        return error
    })
    return instance(config)
}