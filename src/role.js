import store from "./store/index";
import NProgress from "nprogress"; // Progress 进度条
import "nprogress/nprogress.css"; // Progress 进度条样式
import { getUserId } from "./utils/auth"; // 验权
import { Message } from "element-ui";
import router from '@/router.js'
import { ticketManageRouter, kycManageRouter, transactionManageRouter, systemManageRouter, adManageRouter, userManageRouter} from "./router.js";

// permissiom judge
function hasRole(authRules) {
    if (!authRules || authRules.length <= 0) {
        return false;
    }// 如果没有authRules 则返回false
    // if (authRules.indexOf("admin") >= 0) return true; // admin权限 直接通过
    // if (!permissionAuthRules) return true;
    // return authRules.some(role => permissionAuthRules.indexOf(role) >= 0);
    return true
}

function generateRouter(authRules) {
    var accessRouter = []
    for(var item in authRules) {
        if (authRules[item] == "ticketManageRouter") {
            accessRouter = accessRouter.concat(ticketManageRouter)
        }

        if (authRules[item] == "kycManageRouter") {
            accessRouter = accessRouter.concat(kycManageRouter)
        }

        if (authRules[item] == "transactionManageRouter") {
            accessRouter = accessRouter.concat(transactionManageRouter)
        }

        if (authRules[item] == "systemManageRouter") {
            accessRouter = accessRouter.concat(systemManageRouter)
        }

        if (authRules[item] == "adManageRouter") {
            accessRouter = accessRouter.concat(adManageRouter)
        }

        if(authRules[item] == "userManageRouter") {
            accessRouter = accessRouter.concat(userManageRouter)
        }
    }
    return accessRouter
}

/**
 * 递归过滤异步路由表，返回匹配用户角色权限的路由表
 * @param asyncRouterMap
 * @param authRules
 */
// function filterAsyncRouter(asyncRouterMap, authRules) {
//     const accessedRouters = asyncRouterMap.filter(route => {
//         if (hasRouterRole(authRules, route)) {
//             if (route.children && route.children.length) {
//                 route.children = filterAsyncRouter(route.children, authRules);
//             }
//             return true;
//         }
//         return false;
//     });
//     return accessedRouters;
// }


// register global progress.
const whiteList = ["/login", "/401", "/404", "/500"]; // 不重定向白名单
router.beforeEach((to, from, next) => {
    NProgress.start(); // 开启Progress
    if (whiteList.indexOf(to.path) !== -1) {
        // 在免登录白名单，直接进入
        next();
        return;
    }
    let userId = getUserId();
    if(userId === "undefined" || userId ==="" || !userId) {
        this.PushManager("/")
    }

    if (userId !== "undefined" && userId !== "" && userId) {
        // 判断是否有token
        if (to.path === "/login") {
            next({ path: "/" });
            NProgress.done(); // router在hash模式下 手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
            return;
        }

        if (!store.getters.username &&(!store.getters.authRules || store.getters.authRules.length === 0)) {
            // 判断当前用户是否已拉取完用户信息
            store
                .dispatch("userInfo")
                .then(response => {
                    // 拉取user_info
                    const authRules = response.authRules || [];
                  

                    if (!(authRules instanceof Array) || authRules.length === 0) {
                        Message.error("权限验证失败，请联系管理员~");
                        next({
                            path: "/401",
                            query: { noGoBack: true }
                        });
                        NProgress.done();
                        return;
                    }
                    let accessedRouters = generateRouter(JSON.parse(JSON.stringify(authRules)));

                    // 生成可访问的路由表
                    router.addRoutes(accessedRouters); // 动态添加可访问路由表
                    next({ ...to }); // hack方法 确保addRoutes已完成
                    // 设置左边导航栏
                    store
                        .dispatch("filterRouter", { accessedRouters })
                        .then(() => {});
                })
                .catch(() => {
                    store.dispatch("fedLogout").then(() => {
                        let redirect = to.fullPath;
                        store.dispatch("loginOut").then(() => {
                            next({
                                path: "/login",
                                query: { redirect: redirect }
                            });
                        });
                    });
                });
            return;
        }
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        // 如果有authRules 并且to.meta.authRule 存在的话 允许跳转
        if (hasRole(store.getters.authRules, to.meta.authRule)) {
            next(); 
            return;
        }
        next({
            path: "/401",
            query: { noGoBack: true }
        });
        NProgress.done(); // router在hash模式下 手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
        return;
    }

    let redirect = to.fullPath;
    store.dispatch("loginOut").then(() => {
        next({
            path: "/login",
            query: { redirect: redirect }
        });
    }); // 否则全部重定向到登录页
    NProgress.done(); // router在hash模式下 手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
});

router.afterEach(() => {
    NProgress.done(); // 结束Progress
});
