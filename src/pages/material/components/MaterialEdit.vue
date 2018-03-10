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
                <el-collapse v-model="activeNames">
                    <el-collapse-item title="基本属性" name="1">
                        <el-row>
                            <el-col :span="12">
                            <el-form-item label="物料编码" prop="number">
                                <el-input  placeholder="物料编码"  v-model="editdata.number" clearable></el-input>
                            </el-form-item>
                            </el-col>
                            <el-col :span="12">
                            <el-form-item label="物料名称" prop="name">
                                <el-input  placeholder="物料名称"  v-model="editdata.name" clearable></el-input>
                            </el-form-item>
                            </el-col>
                            <el-col :span="12">
                            <el-form-item  label="规格型号" prop="model">
                            <el-input  placeholder="规格型号"  v-model="editdata.model" clearable></el-input>
                            </el-form-item>
                            </el-col>
                        </el-row>
                    </el-collapse-item>
                    <el-collapse-item title="计量单位" name="2">
                         <el-col :span="12">
                            <el-form-item label="大计量单位" prop="boxunit">
                                <el-input  placeholder="大计量单位"  v-model="editdata.boxunit" clearable></el-input>
                            </el-form-item>
                            </el-col>
                            <el-col :span="12">
                            <el-form-item label="大计量单位换算率" prop="boxunitRate">
                                <el-input  placeholder="1"  v-model="editdata.boxunitRate" clearable></el-input>
                            </el-form-item>
                            </el-col>
                             <el-col :span="12">
                            <el-form-item label="中计量单位" prop="midunit">
                                <el-input  placeholder="中计量单位"  v-model="editdata.midunit" clearable></el-input>
                            </el-form-item>
                            </el-col>
                            <el-col :span="12">
                            <el-form-item label="中计量单位换算率" prop="midRate">
                                <el-input  placeholder="中计量单位换算率"  v-model="editdata.midRate" clearable></el-input>
                            </el-form-item>
                            </el-col>
                             <el-col :span="12">
                            <el-form-item label="计量单位" prop="unit">
                                <el-input  placeholder="计量单位"  v-model="editdata.unit" clearable></el-input>
                            </el-form-item>
                            </el-col>
                    </el-collapse-item>
                    <el-collapse-item title="库存属性" name="3">
                        <el-col :span="8">
                            <el-form-item  label-width="160px" label="启用保质期" prop="ismfg">
                                <el-switch v-model="editdata.ismfg"  active-color="#13ce66" inactive-color="#C0CCDA">
                                </el-switch>
                            </el-form-item>
                        </el-col>
                         <el-col :span="8" v-if="editdata.ismfg">
                            <el-form-item  label-width="160px" label="保质期" prop="mfg" >
                               <el-input  placeholder="30"  v-model="editdata.mfg" clearable ></el-input>
                            </el-form-item>
                        </el-col>
                         <el-col :span="8"  v-if="editdata.ismfg">
                            <el-form-item  label-width="160px" label="保质期单位" prop="mfgunit">
                                <el-input  placeholder="保质期单位"  v-model="editdata.mfgunit" clearable></el-input>
                            </el-form-item>
                        </el-col>
                         <el-col :span="12">
                            <el-form-item label="采购计量单位" prop="purunit">
                                <el-input  placeholder="采购计量单位"  v-model="editdata.purunit" clearable></el-input>
                            </el-form-item>
                            </el-col>
                    </el-collapse-item>
                    <el-collapse-item title="价格属性" name="4">
                         <el-col :span="12">
                            <el-form-item label="采购价格" prop="purprice">
                                <el-input  placeholder="采购价格"  v-model="editdata.purprice" clearable></el-input>
                            </el-form-item>
                            </el-col>
                             <el-col :span="12">
                            <el-form-item label="基本单位销售价格" prop="saleprice">
                                <el-input  placeholder="0"  v-model="editdata.saleprice" clearable></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="中计量单位销售价格" prop="salemidprice">
                                <el-input  placeholder="0"  v-model="editdata.salemidprice" clearable></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="大计量单位销售价格" prop="saleboxprice">
                                <el-input  placeholder="0"  v-model="editdata.saleboxprice" clearable></el-input>
                            </el-form-item>
                        </el-col>
                         <el-col :span="12">
                            <el-form-item  label="启用瓶装价格" prop="isboxprice">
                                <el-switch v-model="editdata.isboxprice"  active-color="#13ce66" inactive-color="#C0CCDA">
                                </el-switch>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" v-if="editdata.isboxprice">
                            <el-form-item label="瓶装价格" prop="boxprice">
                                <el-input  placeholder="瓶装价格"  v-model="editdata.boxprice" clearable></el-input>
                            </el-form-item>
                        </el-col>
                    </el-collapse-item>
                </el-collapse>
            </el-form>
        </el-tab-pane>
         <el-tab-pane label="图片信息" name="four">
           <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
         </el-tab-pane>
         <el-tab-pane label="库存信息" name="third">
             <el-table
                :data="warehouseList"
                :row-class-name="tableRowClassName"
                border
                 size="small"
                style="width: 100%">
                <el-table-column fixed sortable prop="warehouse" label="仓库" width="120"></el-table-column>
                <el-table-column fixed sortable prop="mfg" label="生产日期"  width="120"></el-table-column>                
                <el-table-column sortable prop="exp" label="失效日期" width="150"></el-table-column>
                <el-table-column sortable prop="lot" label="生成批次" width="150"></el-table-column>
                <el-table-column sortable prop="unit" label="计量单位" width="150"></el-table-column>
                <el-table-column sortable prop="qty" label="库存数量" width="150"></el-table-column>
             </el-table>
        </el-tab-pane>
        <el-tab-pane label="订单信息" name="second">
             <el-table
                :data="orderList"
                :row-class-name="tableRowClassName"
                border
                 size="small"
                style="width: 100%">
                <el-table-column fixed sortable prop="number" label="订单编号" width="120"></el-table-column>
                <el-table-column fixed sortable prop="bizDate" label="订单日期"  width="120"></el-table-column>
                <el-table-column sortable prop="org"  label="片区" width="120"></el-table-column>
                <el-table-column prop="person" label="业务员" width="100"></el-table-column>
                <el-table-column prop="sendTime" label="送货时间周期" width="120"></el-table-column>
                <el-table-column prop="sendStep" label="送货时点" width="120"></el-table-column>
                <el-table-column sortable prop="qty" label="订货数量" width="150"></el-table-column>
                <el-table-column sortable prop="amount" label="付款金额" width="150"></el-table-column>
                <el-table-column sortable prop="payType" label="付款方式" width="150"></el-table-column>
                <el-table-column sortable prop="account" label="收款账户" width="150"></el-table-column>
                <el-table-column sortable prop="sendqty" label="已配送数量" width="150"></el-table-column>
                <el-table-column sortable prop="unsendqty" label="剩余配送数量" width="150"></el-table-column>
                <el-table-column sortable prop="sendperson" label="配送员" width="150"></el-table-column>
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
                addresses:[{address:"",id:0}],
                ismfg:true,
                isboxprice:false
            },
            activeName:"first",
            orderList:[],
            warehouseList:[],
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
<style>
 .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
