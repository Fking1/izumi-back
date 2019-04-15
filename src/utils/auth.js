import { getStore, setStore, removeStore } from "./store";

const userId = "USER_ID";
const token = "TOKEN";

// 获取token
export function getToken() {
    return getStore(token);
}

// 设置token
export function setToken(sid) {
    return setStore(token, sid, 365);
}

// 删除token
export function removeToken() {
    return removeStore(token);
}

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
