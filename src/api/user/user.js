import axios from '@/utils/axios.js'

export function getUserList(query) {
    return axios({
        url: "/users",
        method: "get",
        params: query
    })
}

export function insertUser(data) {
    return axios({
        url: "/users",
        method: "post",
        data: data
    })
}

export function updateUser(data) {
    return axios({
        url: "/users",
        method: "put",
        data: data
    })
}

export function deleteUser(params) {
    return axios({
        url: '/users/',
        method: 'delete',
        params: params
    })
}