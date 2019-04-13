import axios from 'axios'
import { BASE_URL } from '@/config/app.js'
import { Message } from "element-ui"

const service = axios.create({
    baseURL: BASE_URL,
    timeout: 5000
})

service.interceptors.request.use(
    config => {
        // 做登录过滤 若未登录 则跳到登录页面
        return config
    },
    error => {
        return Promise.reject(error);
    }
)


service.interceptors.response.use(
    response => {
        const data = response.data
        // if(data.status == 0) {
        //     //
        // }
        return data
    },
    error => {
        //  做一些错误提示
        Message({
            message: error.message,
            type: "error",
            duration: 5 * 1000
        });
        return Promise.reject(error);
    }
)

export default service