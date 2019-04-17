/**
 * Created by fking on 19/4/12.
 */

const index = {
    data: {
        userId: 1,
        token:
            "eyJpZHNzIjoiJDJ5JDEwJGNmMVpVb3BxM2lEUUk0bllVZXkxenUzajM0QVJlYmEuS3B4aDZ1MkNkY1J4clF6SE10MTRLIn0=_2018-04-27",
        status: 0,
        message: "登录成功"
    }
};

const info = {
    data: {
        userId: 1,
        status: 0,
        username: "admin",
        avatar: "",
        authRules: ["ticketManageRouter", "kycManageRouter","transactionManageRouter","systemManageRouter","adManageRouter","userManageRouter"],
        message: "获取用户信息成功",
        token:
            "eyJpZHNzIjoiJDJ5JDEwJGNmMVpVb3BxM2lEUUk0bllVZXkxenUzajM0QVJlYmEuS3B4aDZ1MkNkY1J4clF6SE10MTRLIn0=_2018-04-27",
        ignore: true // 是否忽略请求提醒
    }
};

const out = { 
    data: {
        status: 0, 
        message: "已退出登录" 
    }
};

const password = { 
    data: {
        status: 0, 
        message: "修改成功"
    }
};

export default {
    index,
    info,
    out,
    password
};
