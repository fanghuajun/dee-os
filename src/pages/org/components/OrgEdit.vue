<template>
  <div>
     <el-row style="margin:5px">
        <el-button type="primary" @click="exitCur"  size="small">返回<i class="el-icon-close"></i></el-button>
    </el-row>       
            <el-form ref="form" :model="editdata" label-width="120px"  size="small">
                <el-row>
                    <el-col :span="12">
                    <el-form-item label="组织编码" prop="number">
                        <el-input  placeholder="组织编码"  v-model="editdata.number" clearable></el-input>
                    </el-form-item>
                      </el-col>
                    <el-col :span="12">
                   
                    <el-form-item label="组织名称" prop="name">
                        <el-input  placeholder="组织名称"  v-model="editdata.name" clearable></el-input>
                    </el-form-item>
                    </el-col>
                    <el-col :span="12">
                   
                    <el-form-item label="组织类型" prop="name">
                        <el-select v-model="editdata.orgtype" placeholder="请选择">
                          <el-option
                            v-for="item in paytype"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                    </el-form-item>
                    </el-col>

                    <el-col :span="12">
                    <el-form-item label="电话" prop="mobile">
                        <el-input  placeholder="电话"  v-model="editdata.mobile" clearable></el-input>
                    </el-form-item>
                    </el-col>
                     <el-col :span="12">
                    <el-form-item label="地址" prop="address">
                        <el-input  placeholder="地址"  v-model="editdata.address" clearable></el-input>
                    </el-form-item>
                    </el-col>
                      <el-col :span="12">
                    <el-form-item label="营业执照号" prop="buslicense">
                        <el-input  placeholder="营业执照号"  v-model="editdata.buslicense" clearable></el-input>
                    </el-form-item>
                    </el-col>
                      <el-col :span="12">
                    <el-form-item label="开户银行" prop="openbank">
                        <el-input  placeholder="开户银行"  v-model="editdata.openbank" clearable></el-input>
                    </el-form-item>
                    </el-col>
                      <el-col :span="12">
                    <el-form-item label="银行账号" prop="bankno">
                        <el-input  placeholder="银行账号"  v-model="editdata.bankno" clearable></el-input>
                    </el-form-item>
                    </el-col>
                                          <el-col :span="12">
                    <el-form-item label="联系人" prop="contract">
                        <el-input  placeholder="联系人"  v-model="editdata.contract" clearable></el-input>
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
      editdata: {
        addresses: [{ address: "", id: 0 }],
        entry: [
          {
            groupname: "常温",
            materialname: "三元牛奶",
            qty: 10,
            price: 35,
            unit: "箱",
            boxqty: 120,
            boxprice: "0.10",
            amount: 350,
            totalamount: 362
          }
        ]
      },
      activeName: "first",
      tableData: [],
      entryrow:{},
      dialogVisible:false,
      orgtype:[
        {
        value:1,
        label:'集团'
      },{
        value:2,
        label:'公司'
      }],
      paytype:[{
        value:3,
        label:'部门',
      },{
        value:4,
        label:'分销商',
      }]
    };
  },
  props:[
    'type'
  ],
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    removeAddress(item) {
      var index = this.editdata.addresses.indexOf(item);
      if (index !== -1) {
        this.editdata.addresses.splice(index, 1);
      }
    },
    addAddress() {
      this.editdata.addresses.push({
        address: "",
        key: this.editdata.addresses.lenth + 1
      });
    },
    exitCur() {
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
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    addEntry(){
        this.dialogVisible=true;
    }
  }
};
</script>
