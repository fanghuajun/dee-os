 <template>
    <div>
 <el-collapse v-model="activeNames">
    <el-collapse-item title="" name="1">
      <el-form :inline="true" :model="searitem" class="demo-form-inline"  label-width="80px" size="mini">
        <el-row>
          <el-col :span="8">
      <el-form-item  label="订单编号">
          <el-input v-model="searitem.number" placeholder="订单编号"></el-input>
      </el-form-item>
      </el-col>
       <el-col :span="8">
        <template v-if="type === 'customer'">
          <el-form-item label="客户">
            <el-input v-model="searitem.mobile" placeholder="客户名称或电话"></el-input>
          </el-form-item>
        </template>
        <template v-else>
          <el-form-item label="分销商">
            <el-input v-model="searitem.mobile" placeholder="分销商名称"></el-input>
          </el-form-item>
        </template>
        </el-col>
         <el-col :span="8">
        <el-form-item label="业务员">
          <el-input v-model="searitem.person" placeholder="业务员"></el-input>
        </el-form-item>
        </el-col>
        </el-row>
        <el-row>
           <el-col :span="8">
             <el-form-item label="开始日期">
          <el-date-picker  v-model="searitem.starttime" type="datetime" placeholder="选择日期时间" align="right">
          </el-date-picker>
        </el-form-item>
         </el-col>
         <el-col :span="8">
        <el-form-item label="结束日期">
          <el-date-picker  v-model="searitem.endtime" type="datetime" placeholder="选择日期时间" align="right">
          </el-date-picker>
        </el-form-item>
         </el-col>
         <el-col :span="8">
        <el-form-item >
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
         </el-col>
        </el-row>
      </el-form>
    </el-collapse-item>
    </el-collapse>
    <el-row style="margin:5px">
        <template v-if="type === 'customer'">
          <el-button size="small" type="primary">分配配送员<i class="el-icon-news"></i></el-button>
          <el-button size="small" type="primary">配送员历史<i class="el-icon-date"></i></el-button>
        </template>
        <el-button size="small" type="primary" @click="vieworder">查看<i class="el-icon-view"></i></el-button>  
    </el-row>        
        <el-table
        :data="tableData"
        :row-class-name="tableRowClassName"
        border
        size="small"
        style="width: 100%">
        <el-table-column fixed sortable prop="number" label="订单编号" width="120"></el-table-column>
        <el-table-column fixed sortable prop="bizDate" label="订货日期"  width="120"></el-table-column>

        <template v-if="type === 'customer'">
            <el-table-column prop="customer.name" label="客户名称"  width="120"></el-table-column>
            <el-table-column prop="customer.mobile" label="客户电话"  width="120"></el-table-column>
            <el-table-column sortable prop="senddate"  label="送奶日期" width="120"></el-table-column>
            <el-table-column prop="materialType" label="奶品类型" width="120"></el-table-column>
            <el-table-column prop="curOrderMaterial" label="当前订奶品" width="120"></el-table-column>
        </template>
        <template v-else>
            <el-table-column prop="depart.name" label="分销商"  width="120"></el-table-column>
            <el-table-column sortable prop="senddate"  label="送货日期" width="120"></el-table-column>
        </template>
        <el-table-column prop="address" label="送奶地址" width="180"></el-table-column>
        <el-table-column sortable prop="payType" label="支付方式" width="120"></el-table-column>
        <el-table-column prop="qty" label="数量" width="120"></el-table-column>
        <el-table-column prop="amount" label="金额" width="120"></el-table-column>
        <el-table-column prop="recamount" label="收款金额" width="120"></el-table-column>
        <el-table-column prop="sendqty" label="配送数量" width="120"></el-table-column>
        <el-table-column sortable prop="creator" label="创建人"  width="100"></el-table-column>
        <el-table-column sortable prop="createTime" label="创建时间"  width="120"></el-table-column>
      </el-table>   
<!--       
       <el-pagination
          layout="prev, pager, next"
          :total="1000">
        </el-pagination> -->
    </div>
  </template>
  <script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      tableData: [],
      tableHeader: [],
      searitem: {
        name: "",
        mobile: "",
        person: "",
        org: ""
      },
      activeNames: ["1", "2"],
      totalrow: 0,
      listViewType:''
    };
  },
  props:[
    'type'
  ],
  methods: {
    ...mapActions(["getLoginUser", "logout"]),
    onSubmit() {},
    vieworder() {
      console.log("addnew");
      this.$router.push("/edit/" + this.type + "/1");
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    }
  },
  beforeCreate() {
    // console.log(this.$router.param);
    // this.type=this.$router.param.type;
  },
  beforeRouteUpdate (to, from, next) {
    // react to route changes...
    // don't forget to call next()
    console.log(to);
    console.log(from);
  }
};
</script>

  <style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.el-aside {
  border-right: 1px solid #ebeef5;
  min-height: 550px;
}
</style>
  