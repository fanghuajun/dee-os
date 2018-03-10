<template>
  <div>
     <el-row style="margin:5px">
        <el-button type="primary"  size="small">保存<i class="el-icon-circle-plus"></i></el-button>
        <el-button type="primary"  size="small">删除<i class="el-icon-delete"></i></el-button>
        <el-button type="primary" @click="exitCur"  size="small">返回<i class="el-icon-close"></i></el-button>
    </el-row>       
    <el-tabs v-model="activeName">
        <el-tab-pane label="基本信息" name="first">
            <el-form ref="form" :model="editdata" label-width="140px"  size="small">
               <el-row>
                            <el-col :span="12">
                            <el-form-item label="账号编码" prop="number">
                                <el-input  placeholder="账号编码"  v-model="editdata.number" clearable></el-input>
                            </el-form-item>
                            </el-col>
                            <el-col :span="12">
                            <el-form-item label="账号名称" prop="name">
                                <el-input  placeholder="账号名称"  v-model="editdata.name" clearable></el-input>
                            </el-form-item>
                            </el-col>
                            <el-col :span="12">
                            <el-form-item label="账号类型" prop="type">
                                <el-input  placeholder="账号类型"  v-model="editdata.type" clearable></el-input>
                            </el-form-item>
                            </el-col>
                            <el-col :span="12">
                            <el-form-item  label="开户银行" prop="openbank">
                            <el-input  placeholder="开户银行"  v-model="editdata.openbank" clearable></el-input>
                            </el-form-item>
                            </el-col>
                             <el-col :span="12">
                            <el-form-item  label="归属公司" prop="org">
                            <el-input  placeholder="归属公司"  v-model="editdata.org" clearable></el-input>
                            </el-form-item>
                            </el-col>
                            <el-col :span="12">
                            <el-form-item  label="归属公司" prop="balanceorg">
                            <el-input  placeholder="归属公司"  v-model="editdata.balanceorg" clearable></el-input>
                            </el-form-item>
                            </el-col>
                            
                        </el-row>
            </el-form>
        </el-tab-pane>
        <el-tab-pane label="交易明细" name="second">
             <el-table
                :data="orderList"
                :row-class-name="tableRowClassName"
                border
                 size="small"
                style="width: 100%">
                <el-table-column fixed sortable prop="bizDate" label="交易日期"  width="120"></el-table-column>
                <el-table-column sortable prop="type"  label="交易类型" width="120"></el-table-column>
                <el-table-column prop="description" label="业务描述" width="200"></el-table-column>
                 <el-table-column prop="customer" label="客户" width="200"></el-table-column>
                <el-table-column sortable prop="amount" label="交易金额" width="150"></el-table-column>
                <el-table-column sortable prop="balance" label="账户余额" width="150"></el-table-column>
             </el-table>
        </el-tab-pane>
       
    </el-tabs>
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
            activeNames:["1","2"]
        }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      removeAddress(item) {
        var index = this.editdata.addresses.indexOf(item)
        if (index !== -1) {
          this.editdata.addresses.splice(index, 1)
        }
      },
      addAddress() {
        this.editdata.addresses.push({
          address: '',
          key: this.editdata.addresses.lenth+1
        });
      },
      exitCur(){
          this.$router.push("/");
      },
      tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    }
}
</script>
