 <template>
    <div>
    <el-container>
      <el-aside width="250px">
        <el-tree
          :data="orgs"
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
        <el-form-item  label="组织编码">
          <el-input v-model="searitem.number" placeholder="组织编码"></el-input>
      </el-form-item>
        <el-form-item :span="4" label="组织名称">
          <el-input v-model="searitem.name" placeholder="组织名称"></el-input>
        </el-form-item>
        <el-form-item :span="4">
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </el-collapse-item>
    </el-collapse>
    <el-row style="margin:5px">
        <el-button size="small" type="primary" @click="addnew">新增<i class="el-icon-circle-plus"></i></el-button>
        <el-button size="small" type="primary">修改<i class="el-icon-edit"></i></el-button>
        <el-button size="small" type="primary">删除<i class="el-icon-delete"></i></el-button>
    </el-row>        
        <el-table
        :data="tableData"
        :row-class-name="tableRowClassName"
        border
        size="small"
        style="width: 100%">
        <el-table-column fixed sortable prop="number" label="组织编码" width="120"></el-table-column>
        <el-table-column fixed sortable prop="name" label="组织名称"  width="120"></el-table-column>
        <el-table-column prop="type" label="组织类型"  width="120"></el-table-column>
         <el-table-column prop="mobile" label="电话" width="180"></el-table-column>
        <el-table-column prop="address" label="地址" width="180"></el-table-column>
        <el-table-column prop="buslicense" label="营业执照号" width="180"></el-table-column>
        <el-table-column prop="openbank" label="开户银行" width="180"></el-table-column>
        <el-table-column prop="bankno" label="银行账号" width="180"></el-table-column>
        <el-table-column prop="contract" label="联系人" width="180"></el-table-column>
        <el-table-column sortable prop="creator" label="创建人"  width="100"></el-table-column>
        <el-table-column sortable prop="createTime" label="创建时间"  width="120"></el-table-column>
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
      orgs:[{
        id:1,
        label:'绿荷德润有限公司',
      }],
       defaultProps: {
          children: 'children',
          label: 'label'
      },
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
  