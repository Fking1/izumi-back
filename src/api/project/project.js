import axios from '@/utils/axios.js'

export function getList() {
    return axios({
        url: "/manage/project/list",
        method: "post",
    })
}

export function removeProject(project_id) {
    return axios({
        url: "/manage/project/remove",
        method: "post",
        params: project_id
    })
}

export function getProject(project_id) {
    return axios({
        url: "/manage/project/getProject",
        method: "post",
        data: project_id
    })
}

export function getProjectByName(project_name) {
    return axios({
        url: "/manage/project/getProjectByName",
        method: "post",
        data: project_name
    })
}



export function insert(projectInfo) {
    return axios({
        url: "/manage/project/insert",
        method: "post",
        data: projectInfo
    })
}
