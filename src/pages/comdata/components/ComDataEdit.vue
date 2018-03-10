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
            orderList:[],
        }
    },
    methods: {
      exitCur(){
          this.$router.push("/");
      }
    }
}
</script>
