<template>
<el-tabs v-model="editableTabsValue" type="border-card" closable @tab-remove="removeTab" @tab-click="tabItemClick">
  <el-tab-pane
    :key="item.id"
    v-for="(item, index) in editableTabs"
    :label="item.name"
    :name="item.number"
  >
    <iframe :src="item.path" class="frameclass" frameborder="0" border="0"  scrolling="auto"> </iframe>
  </el-tab-pane>
</el-tabs>  
</template>

<script>
  export default {
    name:'home-context',
    data() {
      return {
        editableTabsValue: "",
        editableTabs:[]
        // editableTabs: [{
        //   title: 'Tab 1',
        //   name: '1',
        //   content: 'Tab 1 content',
        //   url:'http://www.baidu.com'
        // }, {
        //   title: 'Tab 2',
        //   name: '2',
        //   content: 'Tab 2 content',
        //   url:'http://www.bing.com'
        // }],
        // tabIndex: 2
      }
    },
    props:{
      curTabs:{
        type:Array,
        require:true
      },
      curTabName:{
        type:String,
        require:true
      }
    },
    methods: {
      tabItemClick(targetName){
        this.$emit("tabItemClick",targetName);
      },
      addTab(targetName) {
        // let newTabName = ++this.tabIndex + '';
        // this.editableTabs2.push({
        //   title: 'New Tab',
        //   name: newTabName,
        //   content: 'New Tab content'
        // });
        // this.editableTabsValue2 = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.number === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.number;
              }
            }
          });
        }        
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.number !== targetName);
        this.$emit("removeTab",targetName);
      }
    },
    watch:{
      curTabs:function(val){
        this.editableTabs=val;
      },
      curTabName:function(val){
        this.editableTabsValue=val;

      }
    }
  }
</script>
<style type="text/css">
  .frameclass{
    width: 100%;
    min-height: 580px;
  }
  
.el-tabs--border-card>.el-tabs__content{
  padding:0px;
}
</style>
