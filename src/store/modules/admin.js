import { login, logout, getUserInfo } from "../../api/auth/login";
import * as types from "../mutation-types";
import {baseRouter} from "@/router.js";

import {
    getUserId,
    setUserId,
    removeUserId,
    getToken,
    setToken,
    removeToken
} from "../../utils/auth";

// initial state
const state = {
    userId: getUserId(), // id
    token: getToken(),
    username: '', // 昵称
    avatar: '',
    authRules: [],
    routers: baseRouter // 路由列表
};

// getters
const getters = {
    userId: state => state.userId,
    token: state => state.token,
    username: state => state.username,
    avatar: state => state.avatar,
    authRules: state => state.authRules,
    routers: state => state.routers
};

// actions
const actions = {
    // 用户名登录
    loginName({ commit }, userInfo) {
        const username = userInfo.username ? userInfo.username.trim() : "";
        const password = userInfo.password ? userInfo.password : "";
        return new Promise((resolve, reject) => {
            login(username, password)
                .then(response => {
                    let data = response.data || {};
                    if (!data.status) {
                        commit(types.RECEIVE_USER_ID, data.userId);
                        commit(types.RECEIVE_TOKEN, data.token);
                        commit(types.RECEIVE_AUTH_RULES, []);
                    } 
                    resolve(data)
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    userInfo({ commit }) {
        return new Promise((resolve, reject) => {
            getUserInfo()
                .then(response => {
                    const data = response.data || {};
                    commit(types.RECEIVE_USERNAME, data.username);
                    commit(types.RECEIVE_AVATAR, data.avatar);
                    commit(types.RECEIVE_AUTH_RULES, data.authRules);
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    // // 登出
    loginOut({ commit }) {
        return new Promise((resolve, reject) => {
            logout()
                .then(response => {
                    let data = response.data || {}
                    if(!data.status) {
                        commit(types.RECEIVE_USER_ID, "");  
                        commit(types.RECEIVE_TOKEN, "");
                        commit(types.RECEIVE_AUTH_RULES, []);                      
                    }
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },

    // // 前端 登出
    fedLogout({ commit }) {
        return new Promise(resolve => {
            commit(types.RECEIVE_USER_ID, "");
            commit(types.RECEIVE_TOKEN, "");
            commit(types.RECEIVE_AUTH_RULES, []);
            resolve();
        });
    },
    /**
     * 过滤路由列表
     * @param commit
     * @param data
     * @returns {Promise}
     */
    filterRouter({ commit }, data) {
        const { accessedRouters } = data;
        if (accessedRouters && accessedRouters.length > 0) {
            commit(types.RECEIVE_ROUTERS, accessedRouters);
        }
    }
};

// mutations
const mutations = {
    [types.RECEIVE_USER_ID](state, userId) {
        state.userId = userId;
        if (userId === "") {
            removeUserId();
        } else {
            setUserId(userId);
        }
    },
    [types.RECEIVE_TOKEN](state, token) {
        state.token = token
        if (token === "") {
            removeToken();
        } else {
            setToken(token);
        }
    },
    [types.RECEIVE_USERNAME](state, username) {
        state.username = username
    },
    [types.RECEIVE_AVATAR](state, avatar) {
        state.avatar = avatar;
    },
    [types.RECEIVE_AUTH_RULES](state, authRules) {
        state.authRules = authRules;
    },
    [types.RECEIVE_ROUTERS](state, routers) {
        const tempRm = baseRouter.concat(routers);
        state.routers = JSON.parse(JSON.stringify(tempRm));
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};


// 组件内使用 this.$store.dispatch("action名")  
// 触发一个actions  发起异步请求 得到数据请求后 使用commit 触发一个或多个mutations 将获取的数据存储到state中去