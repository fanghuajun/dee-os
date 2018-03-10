<template>
  <div>
     <el-row style="margin:5px">
        <el-button type="primary"  size="small">保存<i class="el-icon-circle-plus"></i></el-button>
        <el-button type="primary"  size="small">删除<i class="el-icon-delete"></i></el-button>
        <el-button type="primary" @click="exitCur"  size="small">返回<i class="el-icon-close"></i></el-button>
    </el-row>       

            <el-form ref="form" :model="editdata" label-width="140px"  size="small">
               <el-row>
                            <el-col :span="12">
                            <el-form-item label="编码" prop="number">
                                <el-input  placeholder="编码"  v-model="editdata.number" clearable></el-input>
                            </el-form-item>
                            </el-col>
                            <el-col :span="12">
                            <el-form-item label="名称" prop="name">
                                <el-input  placeholder="名称"  v-model="editdata.name" clearable></el-input>
                            </el-form-item>
                            </el-col>
               </el-row>
                <el-transfer
                filterable
                :filter-method="filterMethod"
                :titles="['角色列表', '选中角色']"
                filter-placeholder="请输入角色"
                v-model="editdata.role"
                :data="roles">
              </el-transfer>
            </el-form>
      
  </div>
</template>

<script>
export default {
    data() {
        return {
            editdata:{
               
            },
            activeName:"first",
            roles:[{label:'部门经理',key:'1001'},{label:'配送员',key:'1002'},{label:'分销商',key:'1003'}],
        }
    },
    methods: {
      exitCur(){
          this.$router.push("/");
      },
      filterMethod(){

      }
    }
}
</script>
