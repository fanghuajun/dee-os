<template>
  <div>
     <el-row style="margin:5px">
        <el-button type="primary"  size="small">保存<i class="el-icon-circle-plus"></i></el-button>
        <el-button type="primary"  size="small">删除<i class="el-icon-delete"></i></el-button>
        <el-button type="primary" @click="exitCur"  size="small">返回<i class="el-icon-close"></i></el-button>
    </el-row>       
            <el-form ref="form" :model="editdata" label-width="100px"  size="small">
                <el-row>
                    <el-col :span="12">
                    <el-form-item label="收款单号" prop="number">
                        <el-input  placeholder="收款单号"  v-model="editdata.number" clearable></el-input>
                    </el-form-item>
                      </el-col>

                   <el-col :span="6">
                    <el-form-item label="收款类型" prop="rectype">
                        <el-select v-model="editdata.rectype" placeholder="请选择">
                          <el-option
                            v-for="item in rectype"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                    </el-form-item>
                      </el-col>
                    <el-col :span="6">
                    <el-form-item label="业务日期" prop="bizDate">
                        <el-date-picker v-model="editdata.bizDate" type="date"  placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                      </el-col>
                    <template v-if="editdata.rectype === 1">
                    <el-col :span="12">
                    <el-form-item label="客户姓名" prop="name">
                        <el-input  placeholder="客户姓名"  v-model="editdata.name" clearable></el-input>
                    </el-form-item>
                    </el-col>
                    <el-col :span="12">
                    <el-form-item label="客户电话" prop="mobile">
                        <el-input  placeholder="客户电话"  v-model="editdata.mobile" disabled></el-input>
                    </el-form-item>
                    </el-col>
                    <el-col :span="12">
                    <el-form-item  label="片区" prop="org">
                       <el-input  placeholder="片区"  v-model="editdata.org" disabled></el-input>
                    </el-form-item>
                    </el-col>
                     <el-col :span="12">
                    <el-form-item  label="业务员" prop="person">
                       <el-input  placeholder="业务员"  v-model="editdata.person" disabled></el-input>
                    </el-form-item>
                    </el-col>
                    </template>                      
                    <template v-else>
                         <el-col :span="12">
                         <el-form-item  label="分销商" prop="org">
                            <el-input  placeholder="分销商"  v-model="editdata.org" clearable></el-input>
                        </el-form-item>
                        </el-col>
                         <el-col :span="12">
                    <el-form-item label="电话" prop="mobile">
                        <el-input  placeholder="分销商电话"  v-model="editdata.mobile" clearable></el-input>
                    </el-form-item>
                    </el-col>
                    </template>
                     <el-col :span="12">
                    <el-form-item  label="收款订单号" prop="saleorder">
                       <el-input  placeholder="收款订单号"  v-model="editdata.saleorder" clearable></el-input>
                    </el-form-item>
                    </el-col>
                     <el-col :span="12">
                    <el-form-item  label="送货地址" prop="address">
                       <el-input  placeholder="送货地址"  v-model="editdata.address" clearable></el-input>
                    </el-form-item>
                    </el-col>
                    <el-col :span="12">
                    <el-form-item  label="支付方式" prop="paytype">
                     <el-select v-model="editdata.paytype" placeholder="请选择">
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
                    <el-form-item  label="收款金额" prop="amount">
                       <el-input  placeholder="0"  v-model="editdata.amount" clearable></el-input>
                    </el-form-item>
                    </el-col>

                   
                    <el-col :span="20">
                    <el-form-item  label="备注" prop="description">
                        <el-input
                        type="textarea"
                        :autosize="{ minRows: 2, maxRows: 4}"
                        placeholder="请输入内容"
                        v-model="editdata.description">
                        </el-input>                    
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
      rectype:[{
        value:1,
        label:'客户收款'
      },{
        value:2,
        label:'分销商收款'
      }],
      paytype:[{
        value:1,
        label:'现金',
      },{
        value:2,
        label:'支付宝',
      },{
        value:3,
        label:'微信',
      },{
        value:4,
        label:'其它',
      }]
    };
  },
  props:[
    'type'
  ],
  methods: {
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
    }
  }
};
</script>
