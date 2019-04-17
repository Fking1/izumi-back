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
        const res = response.data
        // 根据状态码 统一提示处理
        if(res.data.status == 0) {
            if (res.data.ignore !=true) {
                Message({
                    message: res.data.message,
                    type: "success",
                    duration: 3 * 1000
                })
            }
        }
        else if (res.data.status == -1) {
            Message({
                message: res.data.message,
                type: "error",
                duration: 3 * 1000
            })
        }
        else {
            Message({
                message: res.data.message,
                type: "warning",
                duration: 3 * 1000
            })
        }
        return res;
    },
    error => {
        //  做一些错误提示
        Message({
            message: error.message,
            type: "error",
            duration: 3 * 1000
        });
        return Promise.reject(error);
    }
)

export default service