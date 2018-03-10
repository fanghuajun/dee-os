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
                            <el-form-item label="人员编码" prop="number">
                                <el-input  placeholder="人员编码"  v-model="editdata.number" clearable></el-input>
                            </el-form-item>
                            </el-col>
                            <el-col :span="12">
                            <el-form-item label="人员名称" prop="name">
                                <el-input  placeholder="人员名称"  v-model="editdata.name" clearable></el-input>
                            </el-form-item>
                            </el-col>
                            <el-col :span="12">
                            <el-form-item label="账号" prop="accountNo">
                                <el-input  placeholder="账号"  v-model="editdata.accountNo" clearable></el-input>
                            </el-form-item>
                            </el-col>
                            <el-col :span="12">
                            <el-form-item  label="账号名称" prop="accountName">
                            <el-input  placeholder="账号名称"  v-model="editdata.accountName" clearable></el-input>
                            </el-form-item>
                            </el-col>
                             <el-col :span="12">
                            <el-form-item  label="家庭地址" prop="address">
                            <el-input  placeholder="家庭地址"  v-model="editdata.address" clearable></el-input>
                            </el-form-item>
                            </el-col>
                            <el-col :span="12">
                            <el-form-item  label="身份证号" prop="idcard">
                            <el-input  placeholder="身份证号"  v-model="editdata.idcard" clearable></el-input>
                            </el-form-item>
                            </el-col>
                             <el-col :span="12">
                            <el-form-item  label="第二电话" prop="sendtelphone">
                            <el-input  placeholder="第二电话"  v-model="editdata.idcard" clearable></el-input>
                            </el-form-item>
                            </el-col>
                        </el-row>
            </el-form>
        </el-tab-pane>
        <el-tab-pane label="组织范围" name="second">
             <div style="margin-top: 20px">
                        <el-button>新增组织</el-button>
                    </div>
             <el-table
                :data="orderList"
                :row-class-name="tableRowClassName"
                border
                 size="small"
                style="width: 100%">
                <el-table-column label="操作" width="150">
                        <template slot-scope="scope">
                            <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                        </el-table-column>
                <el-table-column fixed sortable prop="bizDate" label="组织编码"  width="120"></el-table-column>
                <el-table-column sortable prop="customer"  label="组织名称" width="120"></el-table-column>
                <el-table-column prop="customermobile" label="是否默认组织" width="200"></el-table-column>
             </el-table>
        </el-tab-pane>
       <el-tab-pane label="角色分配" name="third">
           <div style="margin-top: 20px">
                        <el-button>分配角色</el-button>
                    </div>
             <el-table
                :data="orderList"
                :row-class-name="tableRowClassName"
                border
                 size="small"
                style="width: 100%">
                <el-table-column label="操作" width="150">
                        <template slot-scope="scope">
                            <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                        </el-table-column>
                <el-table-column fixed sortable prop="bizDate" label="组织编码"  width="120"></el-table-column>
                <el-table-column sortable prop="customer"  label="组织名称" width="120"></el-table-column>
                <el-table-column prop="customermobile" label="角色编码" width="200"></el-table-column>
                <el-table-column prop="begindate" label="角色名称" width="200"></el-table-column>
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
        handleDelete(index, row) {
      console.log(index, row);
    },
    },
    
}
</script>
