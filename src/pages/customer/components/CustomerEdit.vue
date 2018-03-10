<template>
  <div>
     <el-row style="margin:5px">
        <el-button type="primary"  size="small">保存<i class="el-icon-circle-plus"></i></el-button>
        <el-button type="primary"  size="small">删除<i class="el-icon-delete"></i></el-button>
        <el-button type="primary" @click="exitCur"  size="small">返回<i class="el-icon-close"></i></el-button>
    </el-row>       
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="基本信息" name="first">
            <el-form ref="form" :model="editdata" label-width="80px"  size="small">
                <el-row>
                    <el-col :span="12">
                    <el-form-item label="客户姓名" prop="name">
                        <el-input  placeholder="客户姓名"  v-model="editdata.name" clearable></el-input>
                    </el-form-item>
                    </el-col>
                    <el-col :span="12">
                    <el-form-item label="客户电话" prop="mobile">
                        <el-input  placeholder="客户电话"  v-model="editdata.mobile" clearable></el-input>
                    </el-form-item>
                    </el-col>
                    <el-col :span="12">
                    <el-form-item  label="片区" prop="org">
                       <el-input  placeholder="片区"  v-model="editdata.org" clearable></el-input>
                    </el-form-item>
                    </el-col>
                    <el-col :span="12">
                    <el-form-item  label="业务员" prop="person">
                       <el-input  placeholder="业务员"  v-model="editdata.person" clearable></el-input>
                    </el-form-item>
                    </el-col>
                    <el-col :span="20">
                        
                    <el-form-item  label="客户备注" prop="description">
                        <el-input
                        type="textarea"
                        :autosize="{ minRows: 2, maxRows: 4}"
                        placeholder="请输入内容"
                        v-model="editdata.description">
                        </el-input>                    
                    </el-form-item>
                       
                    </el-col>
                </el-row>
                <el-row>
                    <el-form-item
                        v-for="(address, index) in editdata.addresses"
                        :label="'地址'"
                        :key="address.id"
                        :prop="'addresses.' + index + '.address'"
                        :rules="{
                        required: true, message: '地址不允许为空', trigger: 'blur'
                        }"
                    >
                        <el-col :span="20">
                        <el-input v-model="address.address"></el-input>
                        </el-col>
                        <el-col :span="4">
                        <el-button @click.prevent="removeAddress(address)">删除</el-button>
                         </el-col>
                    </el-form-item>
                   <el-button @click="addAddress">增加地址</el-button>
                </el-row>
            </el-form>
        </el-tab-pane>
        <el-tab-pane label="订单信息" name="second">
             <el-table
                :data="tableData"
                :row-class-name="tableRowClassName"
                border
                 size="small"
                style="width: 100%">
                <el-table-column fixed sortable prop="number" label="订单编号" width="120"></el-table-column>
                <el-table-column fixed sortable prop="bizDate" label="订单日期"  width="120"></el-table-column>
                <el-table-column prop="materialType" label="奶品品类"  width="120"></el-table-column>
                <el-table-column prop="materialName" label="奶品" width="180"></el-table-column>
                <el-table-column sortable prop="org"  label="片区" width="120"></el-table-column>
                <el-table-column prop="person" label="业务员" width="100"></el-table-column>
                <el-table-column prop="sendTime" label="送货时间周期" width="120"></el-table-column>
                <el-table-column prop="sendStep" label="送货时点" width="120"></el-table-column>
                <el-table-column sortable prop="qty" label="订货数量" width="150"></el-table-column>
                <el-table-column sortable prop="amount" label="付款金额" width="150"></el-table-column>
                <el-table-column sortable prop="payType" label="付款方式" width="150"></el-table-column>
                <el-table-column sortable prop="account" label="收款账户" width="150"></el-table-column>
                <el-table-column sortable prop="sendqty" label="已配送数量" width="150"></el-table-column>
                <el-table-column sortable prop="sendperson" label="配送员" width="150"></el-table-column>
             </el-table>
        </el-tab-pane>
        <el-tab-pane label="收款信息" name="third">
             <el-table
                :data="tableData"
                :row-class-name="tableRowClassName"
                border
                 size="small"
                style="width: 100%">
                <el-table-column fixed sortable prop="number" label="收款编号" width="120"></el-table-column>
                <el-table-column fixed sortable prop="bizDate" label="收款日期"  width="120"></el-table-column>                
                <el-table-column sortable prop="amount" label="收款金额" width="150"></el-table-column>
                <el-table-column sortable prop="payType" label="收款方式" width="150"></el-table-column>
                <el-table-column sortable prop="account" label="收款账户" width="150"></el-table-column>
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
                addresses:[{address:"",id:0}]
            },
            activeName:"first",
            tableData:[]
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
