<template>

<el-container class="app-container"
  :class="{
    'mini-side': isCollapse,
    'hide-side': hideSide
  }"
  >
  <el-aside class="app-side" :width="hideSide ? '0' : sideWidth + 'px'"
    :style="{background: theme.theme.backgroundColor}"
    >
    <div class="app-header-logo-box"
      :style="{height: headerHeight + 'px', color: theme.theme.activeTextColor}"
      >
      <img src="/static/images/logo.png" alt="" class="header-logo">
      <span class="header-logo-text" >控制台</span>
    </div>
    <app-side :collapse="isCollapse" :theme="theme.theme" @menItemClick="menItemClick" v-bind:curActive="curSelectMenuId"></app-side>
  </el-aside>
  <el-container style="overflow: hidden">
    <el-header class="app-header" :height="headerHeight + 'px'">
      <app-header @switch="handleSideSwitch" @set-theme="handleSetTheme" @hide-side="handleSwitchHideSide"></app-header>
    </el-header>
    <el-main class="app-body" style="overflow:hidden">
      <el-container style="height: 100%;min-height: 100%;overflow: hidden" id="appBody">
        <el-main class="app-page-body">
           <el-breadcrumb separator-class="el-icon-arrow-right">
            <!-- <el-breadcrumb-item>首页</el-breadcrumb-item> -->
            <el-breadcrumb-item v-for="breadcrumb in breadcrumbs" :key="breadcrumb.id">
              {{ breadcrumb.name }}
            </el-breadcrumb-item>
          </el-breadcrumb>
            <home-context @tabItemClick="tabItemClick" @removeTab="removeTab" 
            v-bind:curTabs="curTabs"
            v-bind:curTabName="curTabName"/>
        </el-main>
        <!--<el-footer class="app-footer" :height="footerHeight + 'px'"> -->
        <!-- <app-footer></app-footer> 
        </el-footer> -->
      </el-container>
    </el-main>
  </el-container>
  <!-- <m-back-top body-id="appBody"></m-back-top> -->
</el-container>


</template>
<script type="text/javascript">
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import AppSide from './components/app-side'
import HomeContext from './components/home-context'
export default {
  name: 'app-view',
  data () {
    return {
      isCollapse: false,
      hideSide: false,
      sideWidth: 200,
      footerHeight: 50,
      headerHeight: 62,
      theme: {theme: {}},
      curTabs:[],
      curTabName:"",
      curSelectMenuId:"",
      breadcrumbs:[{id:'first',name:'首页'}]
    }
  },
  components: {
    AppHeader,
    AppFooter,
    AppSide,
    HomeContext
  },
  methods: {
    handleSideSwitch (val) {
      this.isCollapse = val
      this.sideWidth = val ? 60 : 200
    },
    handleSwitchHideSide () {
      this.hideSide = !this.hideSide
    },
    handleSetTheme (theme) {
      this.theme = theme
    },
    removeTab(targetName){
      this.curTabs=this.curTabs.filter(tab=>tab.number!=targetName);
    },
    tabItemClick(targetName){
      this.curSelectMenuId=""+targetName.name;
    },
    menItemClick(menuItem){
      var hasadd=false;
        this.curTabs.forEach((item,index)=>{
          if(item.id==menuItem.id){
              hasadd=true;
          }
        });
        if(!hasadd){
          this.curTabs.push(menuItem);
        }
        this.curTabName=menuItem.number;
        this.breadcrumbs=this.breadcrumbs.slice(0,1);
        this.breadcrumbs.push({id:menuItem.id,name:menuItem.name});
    }
  }
}
</script>
<style type="text/css">
  .app-container{
    margin: 0 auto;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .app-container .app-header{
    padding: 0;
    background: #16AAD8;
    overflow: visible;
    z-index: 100;
  }
  .app-container .app-side{
    width: 200px;
    transition: all 0.5s ease;
  }
  .app-container .app-body{
    background: #ECF0F5;
    padding: 0;
  }
  .app-container .app-footer{
    background: #fff;
    border-top: solid 1px rgba(48, 54, 62, 0.14);
  }
  .app-container .app-page-body{
    overflow: visible;
    padding: 0px;
  }
  .app-header-logo-box{
    padding: 15px;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .app-header-logo-box .header-logo{
    height: 42px;
    margin-top: -17px;
    margin-right: 5px;
    vertical-align: middle;
  }
  .app-header-logo-box .header-logo-text{
    font-size: 20px;
    font-weight: bold;
    opacity: 1;
  }
  /*mini-side*/
  .app-container.mini-side .app-side{
    overflow: visible;
  }
  .app-container.mini-side .app-side .el-menu--collapse{
    width: 60px;
  }
  .app-container.mini-side .header-logo{
    margin-left: -10px;
  }
  .app-container.mini-side .header-logo-text{
    opacity: 0;
  }
  /*hide-side*/
  .app-container.hide-side .app-side{
    display: none;
  }
  .el-breadcrumb {
    height: 30px;padding-top: 8px;background-color: #FFF;
  }
</style>