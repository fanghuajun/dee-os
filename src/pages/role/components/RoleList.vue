 <template>
    <div>
 <el-collapse v-model="activeNames">
    <el-collapse-item title="" name="1">
      <el-form :inline="true" :model="searitem" class="demo-form-inline"  label-width="80px" size="mini">
        <el-row>
          <el-col :span="8">
      <el-form-item  label="角色编码">
          <el-input v-model="searitem.number" placeholder="角色编码"></el-input>
      </el-form-item>
      </el-col>
         <el-col :span="8">
      <el-form-item  label="角色名称">
          <el-input v-model="searitem.name" placeholder="角色名称"></el-input>
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
        <el-table-column fixed sortable prop="number" label="编码" width="120"></el-table-column>
        <el-table-column fixed sortable prop="name" label="名称"  width="120"></el-table-column>
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
  