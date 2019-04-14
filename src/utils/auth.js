import { getStore, setStore, removeStore } from "./store";

const userId = "USER_ID";
// const adminToken = "ADMIN-TOKEN";

// 获取token
// export function getToken() {
//     return getStore(adminToken);
// }

// 设置token
// export function setToken(sid) {
//     return setStore(adminToken, sid, 365);
// }

// 删除token
// export function removeToken() {
//     return removeStore(adminToken);
// }

// 获取admin_id
export function getUserId() {
    return getStore(userId);
}

// 设置admin_id
export function setUserId(id) {
    return setStore(userId, id, 365);
}

// 删除admin_id
export function removeUserId() {
    return removeStore(userId);
}
