 <template>
    <div>
 <el-collapse v-model="activeNames">
    <el-collapse-item title="" name="1">
      <el-form :inline="true" :model="searitem" class="demo-form-inline"  label-width="80px" size="mini">
        <el-row>
          <el-col :span="6">
      <el-form-item  label="收款单号">
          <el-input v-model="searitem.number" placeholder="收款单号"></el-input>
      </el-form-item>
      </el-col>
       <el-col :span="6">
          <el-form-item label="客户名称">
            <el-input v-model="searitem.mobile" placeholder="客户名称或电话"></el-input>
          </el-form-item>
       </el-col>
       <el-col :span="6">
          <el-form-item label="分销商">
            <el-input v-model="searitem.mobile" placeholder="分销商名称"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="6">
        <el-form-item label="业务员">
          <el-input v-model="searitem.person" placeholder="业务员"></el-input>
        </el-form-item>
        </el-col>
        </el-row>
        <el-row>
           <el-col :span="6">
             <el-form-item label="开始日期">
          <el-date-picker  v-model="searitem.starttime" type="date" placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
         </el-col>
         <el-col :span="6">
        <el-form-item label="结束日期">
          <el-date-picker  v-model="searitem.endtime" type="date" placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
         </el-col>
         <el-col :span="6">
        <el-form-item >
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
         </el-col>
        </el-row>
      </el-form>
    </el-collapse-item>
    </el-collapse>
    <el-row style="margin:5px">
        <el-button size="small" type="primary" @click="addnew">新增<i class="el-icon-circle-plus"></i></el-button>
        <el-button size="small" type="primary">修改<i class="el-icon-edit"></i></el-button>
        <el-button size="small" type="primary">删除<i class="el-icon-delete"></i></el-button>
        <el-button size="small" type="primary">审核<i class="el-icon-success"></i></el-button>
    </el-row>        
        <el-table
        :data="tableData"
        :row-class-name="tableRowClassName"
        border
        size="small"
        style="width: 100%">
        <el-table-column fixed sortable prop="number" label="收款单号" width="120"></el-table-column>
        <el-table-column fixed sortable prop="bizDate" label="收款日期"  width="120"></el-table-column>
        <el-table-column fixed sortable prop="customername" label="客户或分销商名称"  width="180"></el-table-column>
        <el-table-column prop="customermobile" label="电话"  width="120"></el-table-column>
        <el-table-column prop="type" label="收款类型" width="180"></el-table-column>
        <el-table-column prop="type" label="收款账户" width="180"></el-table-column>
        <el-table-column sortable prop="payType" label="支付方式" width="120"></el-table-column>
        <el-table-column prop="amount" label="收款金额" width="120"></el-table-column>
        <el-table-column prop="ordernumber" label="收款订单号" width="180"></el-table-column>
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
    };
  },
  methods: {
    ...mapActions(["getLoginUser", "logout"]),
    onSubmit() {},
    addnew() {
      console.log("addnew");
      this.$router.push("/edit");
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
  