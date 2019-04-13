import axios from '@/utils/axios.js'

export function loginName(username, password) {
    return axios({
        url: "/auth/login",
        method: "post",
        data: {username, password}
    });
}

//可以做一些清除服务器端session的操作
export function logout() {
    return axios({
        url: "/auth/logout",
        method: "put",
    })
}

export function password(data) {
    return axios({
        url: "/auth/updatePassword",
        method: "put",
        data: data
    })
}

export function userInfo() {
    
}