<template>
<el-menu  :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#12afe3"
  text-color="#fff"
  active-text-color="#ffd04b"
 >
  <el-menu-item index="2">主页</el-menu-item>
  <el-menu-item index="3">流程中心</el-menu-item>
  <el-menu-item index="4">报表中心</el-menu-item>

   <el-menu-item index="5" class="menu_right">我的常用功能</el-menu-item>
    <el-submenu index="6" class="menu_right">
      
      <template slot="title"> 
        <a href="#" style="display: inline-block; padding: 0px; color: inherit">
          <img src="/static/images/user.jpg" alt="" style="border-radius: 3px;vertical-align: middle;">
          <span>{{username}}</span> 
          <span class="caret"></span>
        </a>
      </template>
      <!-- <el-menu-item index="6-1">用户信息</el-menu-item>
      <el-menu-item index="6-2">修改密码</el-menu-item> -->
      <el-menu-item index="6-3">注销</el-menu-item>
      <!-- <div class="test-line"></div>
      <el-menu-item index="6-4">退出账号</el-menu-item> -->
    </el-submenu>
</el-menu>
</template>
<script type="text/javascript">
import {mapActions, mapState} from 'vuex'
import VueCookie from 'vue-cookie'
import {
  requestFullScreen,
  exitFullscreen
} from '../../common/js/fullScreen.js'
import themes from './theme'
export default {
  name: 'app-header',
  data () {
    return {
      mini: false,
      isFullScreen: false,
      themes,
      themeType: '',
      showAside: true,
      theme: {theme: {headerTheme: 'info'}},
      activeIndex:"2",
      username:''
    }
  },
  computed: {
  },
  components:{
   
  },
  watch: {
    themeType (val) {
      this.theme = this.themes.find(e => e.name === val) || {}
      this.$emit('set-theme', this.theme)
      localStorage.setItem('theme', val)
    }
  },
  methods: {
    ...mapActions(['getLoginUser', 'logout']),
    handleSwitchSide () {
      this.mini = !this.mini
      this.$emit('switch', this.mini)
    },
    handleSwitchScreen () {
      if (this.isFullScreen) {
        exitFullscreen()
        this.isFullScreen = false
      } else {
        requestFullScreen()
        this.isFullScreen = true
      }
    },
    handleSwitchHideSide () {
      this.$emit('hide-side')
    },
    handleSelect(key, keyPath) {
       console.log(key, keyPath);
       if(key=="6-3"){
          location.assign("../login/login.html");
       }
    }
  },
  created () {
    var theme = localStorage.getItem('theme') || 'default'
    this.themeType = theme
    this.getLoginUser().then((res)=>{
      this.username=res.name;
      VueCookie.set('username',this.username);
    });
  }
}
</script>
<style type="text/css">
  .side-switch{
    display: inline-block;
    font-size: 32px;
    cursor: pointer;
    color: inherit;
    margin-top: 10px;
  }
  .side-switch:hover{
    color: #fff;
  }
  .menu_right{
    float:right !important;
  }
</style>
