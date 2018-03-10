<template>

<v-menu class="side-menu"
  :collapse="collapse"
  :default-active="defaultActive"
  :menus="menus"
  router
  :background-color="theme.backgroundColor"
  :text-color="theme.textColor"
  :active-text-color="theme.activeTextColor"
  @select="select"
  ></v-menu>


</template>
<script type="text/javascript">
import {mapActions, mapState} from 'vuex';
import VMenu from './vmenu';
import {Loading }  from 'element-ui';
// import menus from './menus'
var loadingInstance= Loading.service({ fullscreen: true });
export default {
  props: {
    collapse: Boolean,
    theme: Object,
    curActive:String,
  },
  components: {
    VMenu
  },
  data () {
    return {
      menus:[],
      defaultActive: 'home',
      test: 'asdfasdf'
    }
  },
  watch: {
    // $route () {
    //   this.setCurrentRoute()
    // }
    curActive:function(val){
      var curMenu=this.findMenuByNumber(this.menus,val);
       this.defaultActive=""+curMenu.id;
    }
  },
  methods: {
     ...mapActions(['getMenuList', 'logout']),
    select(index) {
      // console.log(this.$route)
      // this.defaultActive = this.menuItem.name;
      var curMenuItem=this.findMenuById(this.menus,index);
      this.$emit("menItemClick",curMenuItem);
    },
    findMenuById(curmenus,menuid){
      var curMenuItem=null;
      curmenus.forEach((item,index)=>{
          if(item.id==menuid){
            curMenuItem=item;
          }else if(item.submenu!=null){
            item.submenu.forEach((subitem,subindex)=>{
               if(subitem.id==menuid){
                  curMenuItem=subitem;
               }
            });
          }
      });
      return curMenuItem;
    },
    findMenuByNumber(curmenus,menunum){
      var curMenuItem=null;
      curmenus.forEach((item,index)=>{
          if(item.number==menunum){
            curMenuItem=item;
          }else if(item.submenu!=null){
            item.submenu.forEach((subitem,subindex)=>{
               if(subitem.number==menunum){
                  curMenuItem=subitem;
               }
            });
          }
      });
       console.log(curMenuItem);
      return curMenuItem;
    }
  },
  created () {
    // this.setCurrentRoute();
    //请求数据
    this.getMenuList().then((res)=>{
      this.menus=res
      this.$emit("menItemClick", this.menus[0]);
      this.defaultActive=""+this.menus[0].id;
       loadingInstance.close();
    });
    
  }
}
</script>
<style type="text/css">
  .el-menu.side-menu{
    border-right: none;
  }
  .el-menu .fa{
    font-size: 18px;
    margin-right: 7px;
    display: inline-block;
    width: 23px;
    text-align: center;
  }
  .el-menu.side-menu .el-menu-item.is-active {
    color: #409EFF;
    border-right: solid 2px #36c1fa;
    background: #eef3f5;
  }
</style>
