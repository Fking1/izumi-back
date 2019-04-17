/**
 * Created by fking on 19/4/14.
 */

const index = {
    data: {
        total: 1,
        status: 0,
        ignore: true,
        list: [
            {
                userId: 1,
                username: "admin",
                avatar: null,
                tel: "admin",
                status: 1,
                email: "fangyong137@gmail.com",
                last_login_ip: "127.0.0.1",
                last_login_time: 1493103488,
                create_time: 1487868050,
                roles: []
            }
        ]
    }
};

const roleList = {
    data: {
        total: 1,
        status: 0,
        ignore: true,
        list: [
            {
                id: 1,
                name: "超级管理员"
            }
        ]
    }
};

const save = {
    data: {
        status: 0,
        id: 2,
        message: "保存success"
    }
};

const edit = {
    data: {
        status: 0,
        message: "修改success"
    }
    
};

const del = {
    data: {
        status: 0,
        message: "删除success"
    }
    
};

export default {
    index,
    roleList,
    save,
    edit,
    del
};
