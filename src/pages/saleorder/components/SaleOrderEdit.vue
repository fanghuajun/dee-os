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
                    <el-form-item label="单据编号" prop="number">
                        <el-input  placeholder="单据编号"  v-model="editdata.number" clearable></el-input>
                    </el-form-item>
                      </el-col>
                    <el-col :span="12">
                    <el-form-item label="业务日期" prop="bizDate">
                        <el-date-picker v-model="editdata.bizDate" type="date"  placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                      </el-col>
                    <template v-if="$route.params.type === 'customer'">
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
                     <el-form-item  label="配送时段" prop="sendstep">
                        <el-time-picker is-range v-model="editdata.sendstep" range-separator="至"
                            start-placeholder="开始时段"
                            end-placeholder="结束时段"
                            placeholder="选择配送时段">
                      </el-time-picker>
                    </el-form-item>
                    </el-col>
                    <el-col :span="12">
                    <el-form-item  label="片区" prop="org">
                       <el-input  placeholder="片区"  v-model="editdata.org" clearable></el-input>
                    </el-form-item>
                    </el-col>
                   
                    <el-col :span="12">
                     <el-form-item  label="送货日期" prop="sendtime">
                       <el-date-picker v-model="editdata.sendtime"  type="daterange" range-separator="至"
                        start-placeholder="开始日期" end-placeholder="结束日期">
                      </el-date-picker>
                    </el-form-item>
                    </el-col>
                     <el-col :span="8">
                     <el-form-item  label-width="160px" label="包含周六日" prop="conholiday">
                       <el-switch v-model="editdata.isconholiday"  active-color="#13ce66" inactive-color="#C0CCDA">
                        </el-switch>
                    </el-form-item>
                    </el-col>
                     <el-col :span="2">
                     <el-form-item  label="合计" prop="totalday">
                        <el-input  placeholder="0"  v-model="editdata.totalday" disabled></el-input>
                    </el-form-item>
                    </el-col>
                     <el-col :span="12">
                    <el-form-item  label="业务员" prop="person">
                       <el-input  placeholder="业务员"  v-model="editdata.person" clearable></el-input>
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
                        <el-col :span="12">
                     <el-form-item  label="送货日期" prop="sendtime">
                       <el-date-picker v-model="editdata.sendtime"  type="date">
                      </el-date-picker>
                     
                    </el-form-item>
                     </el-col>
                    </template>
                     <el-col :span="12">
                    <el-form-item  label="送货地址" prop="address">
                       <el-input  placeholder="送货地址"  v-model="editdata.address" clearable></el-input>
                    </el-form-item>
                    </el-col>

                     <el-col :span="6">
                    <el-form-item  label="总数量" prop="totalqty">
                       <el-input  placeholder="0"  v-model="editdata.totalqty" disabled></el-input>
                    </el-form-item>
                    </el-col>
                     <el-col :span="6">
                    <el-form-item  label="总金额" prop="totalamount">
                       <el-input  placeholder="0"  v-model="editdata.totalamount" disabled></el-input>
                    </el-form-item>
                    </el-col>
                     <el-col :span="6">
                    <el-form-item  label="收款金额" prop="recamount">
                       <el-input  placeholder="0"  v-model="editdata.recamount" disabled></el-input>
                    </el-form-item>
                    </el-col>
                    <el-col :span="6">
                    <el-form-item  label="支付方式" prop="paytype">
                       <el-input  placeholder="0"  v-model="editdata.paytype" disabled></el-input>
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
                <el-row>
                    <div style="margin-top: 20px">
                        <el-button @click="addEntry">新增奶品</el-button>
                    </div>
                    <el-table
                        :data="editdata.entry"
                        style="width: 100%">
                        <el-table-column label="操作" width="150">
                        <template slot-scope="scope">
                            <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                            <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                        </el-table-column>
                        <el-table-column label="奶品大类" width="180" prop="groupname"></el-table-column>
                        <el-table-column label="奶品" width="180" prop="materialname"></el-table-column>
                        <el-table-column label="计量单位" width="180" prop="unit"></el-table-column>
                        <el-table-column label="数量" width="180" prop="qty"></el-table-column>
                        <el-table-column label="单价" width="180" prop="price"></el-table-column>
                        <el-table-column label="包装数量" width="180" prop="boxqty"></el-table-column>
                        <el-table-column label="包装单价" width="180" prop="boxprice"></el-table-column>
                        <el-table-column label="金额" width="180" prop="amount"></el-table-column>
                        <el-table-column label="总金额" width="180" prop="totalamount"></el-table-column>                       
                    </el-table>
                </el-row>
            </el-form>
        </el-tab-pane>
        
        <el-tab-pane label="收款信息" name="second">
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
      <el-dialog
      title="奶品新增"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleClose">
       <el-form :inline="true" :model="entryrow" class="demo-form-inline" label-width="120px"  size="small">
          <el-form-item  label="奶品">
            <el-input v-model="entryrow.materialname" placeholder="奶品"></el-input>
          </el-form-item>
          <el-form-item  label="数量">
            <el-input v-model="entryrow.qty" placeholder="数量"></el-input>
         </el-form-item>
          <el-form-item  label="计量单位">
            <el-input v-model="entryrow.unit" placeholder="计量单位"></el-input>
         </el-form-item>
          <el-form-item></el-form-item>
          <el-form-item  label="单价">
            <el-input v-model="entryrow.price" placeholder="单价" disabled></el-input>
         </el-form-item>
         <el-form-item  label="金额">
            <el-input v-model="entryrow.amount" placeholder="0" disabled></el-input>
         </el-form-item>
          <el-form-item  label="包装单价">
            <el-input v-model="entryrow.boxprice" placeholder="包装单价" disabled></el-input>
         </el-form-item>
          <el-form-item  label="总金额">
            <el-input v-model="entryrow.totalamount" placeholder="0" disabled></el-input>
         </el-form-item>
       </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
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
      dialogVisible:false
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
      this.$router.push("/"+this.type);
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
