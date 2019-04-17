import axios from '@/utils/axios.js'

export function login(username, password) {
    return axios({
        url: "/admin/auth/login/index",
        method: "post",
        data: {username, password}
    });
}

//可以做一些清除服务器端session的操作
export function logout() {
    return axios({
        url: "/admin/auth/login/out",
        method: "post",
    })
}

export function password(data) {
    return axios({
        url: "/admin/auth/login/password",
        method: "post",
        data: data
    })
}

export function getUserInfo() {
    return axios({
        url: "/admin/auth/login/info",
        method: "get",
    })
}