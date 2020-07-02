import axios from 'axios'

export default function (config) {
    const instance = axios.create({
        baseURL: '链接自取哦',
        timeout: 30000
    })
    instance.interceptors.response.use(res => {
        return res.data
    }, error => {
        return error
    })
    return instance(config)
}