<template>
<div class="fullscreen">
  <div class="login-box">
    <div style="text-align: center">
      <img src="/static/images/logo.png" alt="" class="logo">
    </div>
    <p class="text-tips">你好，欢迎登录</p>
    <form action="" class="login-form">
      <div class="m-list-group">
        <div class="m-list-group-item">
          <input type="text" placeholder="用户名" class="m-input" v-model="username">
        </div>
        <div class="m-list-group-item">
          <input type="password" placeholder="密码" class="m-input" v-model="password">
        </div>
      </div>
      <button class="m-btn sub select-none" @click.prevent="handleLogin"  v-loading="isLoging">登录</button>
    </form>
    <div style="margin-top: 50px"></div>
    <p class="text-tips">
      <i class="fa fa-meetup" style="color: #29ABE2"></i>&nbsp;
      <span class="footer-text">{{appName}} &nbsp;<!--<el-tag size="mini">{{version}}</el-tag> -->      
      <br>©make by <a href="https://www.github.com/mengdu" target="_blank">{{author}}</a>
  </span>
    </p>
  </div>
</div>
</template>
<script>
import { mapActions } from "vuex";
import VueCookie from 'vue-cookie'

export default {
  name: "login",
  data() {
    return {
      username: "",
      isLoging: false,
      author: "中山金蝶软件有限公司",
      version: "1.0.0",
      appName: "DEE-OS",
      password:''
    };
  },
  methods: {
    ...mapActions(["login"]),
    handleLogin() {
      if (!this.username || !this.password) {
        return this.$message.warning("用户名和密码不能为空");
      }
      this.isLoging = true;
      this.login({
        username: this.username,
        password: this.password
      }).then(data => {
        if (data != null && data.res!=null && data.res.value != null) {
          //this.$message.success("登录成功");
          //this.$router.push({name: 'index/index.html'});
          location.assign("../home/home.html");
        } else {
          this.$message.error("登录失败");
          this.password='';
        }
        this.isLoging = false;
      });
    },
     openVn() {
      const h = this.$createElement;
      this.$message({
        message: h("p", null, [
          h("span", null, "内容可以是 "),
          h("i", { style: "color: teal" }, "VNode")
        ])
      });
    }
  },
  components: {},
  created(){
    if(sessionStorage.getItem("user")!=null){
      this.username=VueCookie.get("username");
    }
  }
};
</script>
<style type="text/css">
.m-list-group {
  border-radius: 3px;
  padding: 0;
  margin: 0 0 20px;
}
.m-list-group .m-list-group-item {
  position: relative;
  display: block;
  padding: 6px 10px;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid #e7ecee;
}
.m-list-group .m-list-group-item:first-child {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.m-list-group .m-list-group-item:last-child {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
.fullscreen {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f4f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-box {
  position: relative;
  width: 330px;
  margin: 0 auto;
  padding: 0px 15px;
}
.login-box .logo {
  max-width: 40%;
  margin-bottom: 30px;
}
.login-box .text-tips {
  text-align: center;
  color: #909db7;
}
.login-box .m-input {
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
  box-sizing: border-box;
}
.login-box .m-btn {
  font-size: 18px;
  width: 100%;
  color: #fff;
  background-color: #36c1fa;
  display: inline-block;
  padding: 10px 12px;
  margin-bottom: 5px;
  line-height: 1.42857143;
  text-align: center;
  cursor: pointer;
  outline: none;
  border-radius: 2px;
  border: 1px solid #36c1fa;
  box-sizing: border-box;
  text-decoration: none;
}
.login-box .m-btn.m-btn-text {
  background: #fff;
  color: #36c1fa;
}
.login-box .m-btn:hover {
  background-color: #2db7f5;
}
.login-box .m-btn.m-btn-text:hover {
  background-color: #f4f5f5;
}
.login-box .m-btn:active {
  opacity: 0.8;
}
@media (max-width: 768px) {
  .login-box {
    width: auto;
  }
}
</style>