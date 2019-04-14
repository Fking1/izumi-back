import { login, logout, userInfo } from "../../api/auth/login";
import * as types from "../mutation-types";
import {routes} from "@/router.js";

import {
    getUserId,
    setUserId,
    removeUserId
} from "../../utils/auth";
// import { $NOT_NETWORK } from '../../utils/errorCode'
import { Message } from "element-ui";

// initial state
const state = {
    userId: "", // id
    username: "", // 昵称
    avatar: "",
    sex: "",
    routers: routes // 路由列表
};

// getters
const getters = {
    userId: state => state.userId,
    username: state => state.username,
    avatar: state => state.avatar,
    sex: state => state.sex,
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
                    if (response.status) {
                        Message({
                            message: response.message,
                            type: "error",
                            duration: 3 * 1000
                        });
                    } else {
                        Message({
                            message: response.message,
                            type: "success",
                            duration: 3 * 1000
                        });
                        commit(types.RECEIVE_USER_ID, response.userId);
                        commit(types.RECEIVE_USERNAME, response.username);
                    }
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    userInfo({ commit }) {
        return new Promise((resolve, reject) => {
            userInfo()
                .then(response => {
                    // const data = response.data || {};
                    console.log("userinfo...")
                    console.log(response)
                    commit(types.RECEIVE_USERNAME, response.username);
                    commit(types.RECEIVE_AVATAR, response.avatar);
                    resolve(response);
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
                    if(response.status) {
                        Message({
                            message: response.message,
                            type: "error",
                            duration: 3 * 1000
                        });
                    }else {
                        Message({
                            message: response.message,
                            type: "success",
                            duration: 3 * 1000
                        });
                        commit(types.RECEIVE_USER_ID, "");
                    }
                    // commit(types.RECEIVE_ADMIN_TOKEN, "");
                    // commit(types.RECEIVE_ADMIN_AUTH_RULES, []);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },

    // // 前端 登出
    // fedLogout({ commit }) {
    //     return new Promise(resolve => {
    //         commit(types.RECEIVE_ADMIN_ID, "");
    //         commit(types.RECEIVE_ADMIN_TOKEN, "");
    //         commit(types.RECEIVE_ADMIN_AUTH_RULES, []);
    //         resolve();
    //     });
    // },
    /**
     * 过滤路由列表
     * @param commit
     * @param data
     * @returns {Promise}
     */
    // filterRouter({ commit }, data) {
    //     const { accessedRouters } = data;
    //     if (accessedRouters && accessedRouters.length > 0) {
    //         commit(types.RECEIVE_ROUTERS, accessedRouters);
    //     }
    // }
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
    [types.RECEIVE_USERNAME](state, username) {
        state.username = username
    },
    [types.RECEIVE_AVATAR](state, avatar) {
        state.avatar = avatar;
    },
    // [types.RECEIVE_ROUTERS](state, routers) {
    //     const tempRm = constantRouterMap.concat(routers);
    //     state.routers = JSON.parse(JSON.stringify(tempRm));
    // }
};

export default {
    state,
    getters,
    actions,
    mutations
};


// 组件内使用 this.$store.dispatch("action名")  
// 触发一个actions  发起异步请求 得到数据请求后 使用commit 触发一个或多个mutations 将获取的数据存储到state中去