 <template>
    <div>
    <el-container>
      <el-aside width="250px">
        <el-tree
          :data="org"
          show-checkbox
          node-key="id"
          :props="defaultProps">
        </el-tree>
      </el-aside>
     <el-container>
    <el-main>
 <el-collapse v-model="activeNames">
    <el-collapse-item title="" name="1">
      <el-form :inline="true" :model="searitem" class="demo-form-inline" size="mini">
        <el-form-item  label="交易单号">
          <el-input v-model="searitem.number" placeholder="交易单号"></el-input>
      </el-form-item>
             <el-form-item label="开始日期">
          <el-date-picker  v-model="searitem.starttime" type="datetime" placeholder="选择日期时间" align="right">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="结束日期">
          <el-date-picker  v-model="searitem.endtime" type="datetime" placeholder="选择日期时间" align="right">
          </el-date-picker>
        </el-form-item>
        <el-form-item :span="4">
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </el-collapse-item>
    </el-collapse>     
        <el-table
        :data="tableData"
        :row-class-name="tableRowClassName"
        border
        size="small"
        style="width: 100%">
        <el-table-column fixed sortable prop="bizDate" label="交易日期"  width="120"></el-table-column>
        <el-table-column sortable prop="type"  label="交易类型" width="120"></el-table-column>
        <el-table-column prop="number" label="交易单号" width="200"></el-table-column>
        <el-table-column prop="description" label="业务描述" width="200"></el-table-column>
        <el-table-column prop="customer" label="客户" width="200"></el-table-column>
         <el-table-column prop="account" label="交易账户" width="200"></el-table-column>
        <el-table-column sortable prop="amount" label="交易金额" width="150"></el-table-column>
        <el-table-column sortable prop="balance" label="账户余额" width="150"></el-table-column>
      </el-table>
    </el-main>
    </el-container>
  
</el-container>
   
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
      org:[{
        id:1,
        label:'绿荷德润有限公司',
      }],
       defaultProps: {
          children: 'children',
          label: 'label'
      },
      dialogVisible:false,
    };
  },
  methods: {
    ...mapActions(["getLoginUser", "logout"]),
    onSubmit() {},
    addnew() {
      console.log("addnew");
      this.$router.push("/edit/1");
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    addgroup(){
      this.dialogVisible=true;
    },
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    }
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
.el-aside{
  border-right:1px solid #ebeef5;
  min-height: 550px;
}
</style>
  