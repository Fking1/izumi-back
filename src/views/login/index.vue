<template>
    <div class="login-container">
        <el-form class="card-box login-form" autoComplete="on" :model="ruleForm" :rules="rules" ref="ruleForm"
                 label-position="left">
            <h3 class="title">系统登录</h3>
            <el-form-item prop="username" class="item">
                <el-input
                    placeholder="用户名"
                    name="username"
                    autoComplete="on"
                    v-model="ruleForm.username">
                    <i slot="prefix" class="el-input__icon"><icon-svg icon-class="user"/></i>
                </el-input>
            </el-form-item>
            <el-form-item prop="password" class="item">
                <el-input
                    placeholder="密码"
                    name="password"
                    type="password"
                    @keyup.enter.native="handleLogin"
                    v-model="ruleForm.password"
                    autoComplete="on">
                    <i slot="prefix" class="el-input__icon"><icon-svg icon-class="password"/></i>
                    <i slot="suffix" class="el-input__icon" @click='isShowpassword = !isShowpassword'><icon-svg icon-class="eye"/></i>
                </el-input>
            </el-form-item>
            <div>
                <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading"
                           @click.native="handleLogin()">登录
                </el-button>
            </div>
        </el-form>

    </div>
</template>

<script>

export default {
    data() {
        let validatepassword = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"))
                return
            } 
            callback()
        }
        return {
            ruleForm: {
                username: "admin",
                password: "admin",
                checked: true
            },
            rules: {
                userName: [
                    { required: true, message: "请输入登录名", trigger: "blur" }
                ],
                password: [{ required: true, validator: validatepassword, trigger: "blur" }]
            },
            loading: false, // 登录loading
            redirect: null // 回调地址
        };
    },
    methods: {
        handleLogin() {
            this.$refs["ruleForm"].validate(valid => {
                if (valid) {
                    this.loading = true;
                    this.$store
                        .dispatch("loginName", this.ruleForm)
                        .then(response => {
                            this.loading = false;
                            if (response.status) {
                                this.$message.error(response.message);
                                return;
                            }
                            let path = "/";
                            if (this.redirect) {
                                path = this.redirect;
                            }
                            this.$router.push({
                                path: path
                            });
                        })
                        .catch(() => {
                            this.loading = false;
                        });
                } else {
                    return false;
                }
            });
        }
    },
    created() {
        // 将参数拷贝进查询对象
        let query = this.$route.query;
        if (query.redirect) {
            // URL Encode
            this.redirect = decodeURIComponent(query.redirect);
        } 
    }
};
</script>

<style type="text/scss" lang="scss">
@import "../../styles/mixin";

$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-container {
    @include relative;
    height: 100%;
    background-color: $bg;
    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px #293444 inset !important;
        -webkit-text-fill-color: #fff !important;
    }
    .item {
        .el-form-item__content {
            display: flex;
            flex-flow: row;
        }
    }
    input {
        background: transparent;
        border: 0;
        -webkit-appearance: none;
        border-radius: 0;
        padding: 0.46rem 0.0666rem 0.16rem 0.2rem;
        color: $light_gray;
        height: 100%;
    }
    .el-input {
        display: inline-block;
    }
    .tips {
        font-size: 14px;
        color: #fff;
        margin-bottom: 0.13333rem;
    }
    .svg-container {
        padding: 0.08rem 0.0666rem 0.08rem 0.2rem;
        color: $dark_gray;
        vertical-align: middle;
        display: inline-block;
        &_login {
            font-size: 20px;
        }
    }
    .title {
        font-size: 26px;
        color: $light_gray;
        margin: 0 auto 0.5333rem auto;
        text-align: center;
        font-weight: bold;
    }
    .login-form {
        @include fxied-center;
        top: 35%;
        width: 22em;
        padding: 0.4666rem 0.4666rem 0.2rem 0.4666rem;
    }
    .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 0.0666rem;
        color: #454545;
    }
    .show-password {
        position: absolute;
        right: 0.1333rem;
        top: 0.09333rem;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
    }
    .thirdparty-button {
        /*position: absolute;*/
        /*right: .4666rem;*/
        /*bottom: .37333rem;*/
    }
}
</style>
