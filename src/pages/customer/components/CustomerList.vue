 <template>
    <div>
    <el-container>
      <el-aside width="250px">
        <el-row>
            <el-button type="text" @click="addgroup">新增</el-button>
            <el-button type="text">修改</el-button>
            <el-button type="text">删除</el-button>
        </el-row>
        <el-tree
          :data="customergroup"
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
        <el-form-item  label="客户姓名">
          <el-input v-model="searitem.name" placeholder="客户姓名"></el-input>
      </el-form-item>
        <el-form-item :span="4" label="客户电话">
          <el-input v-model="searitem.mobile" placeholder="客户电话"></el-input>
        </el-form-item>
        <el-form-item :span="4" label="业务员">
          <el-input v-model="searitem.person" placeholder="业务员"></el-input>
        </el-form-item>
        <el-form-item :span="4" label="经销商">
          <el-input v-model="searitem.org" placeholder="经销商"></el-input>
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
        <el-button size="small" type="primary">查询订单及收款<i class="el-icon-share"></i></el-button>
    </el-row>        
        <el-table
        :data="tableData"
        :row-class-name="tableRowClassName"
        border
        size="small"
        style="width: 100%">
        <el-table-column fixed sortable prop="number" label="客户编码" width="120"></el-table-column>
        <el-table-column fixed sortable prop="name" label="客户名称"  width="120"></el-table-column>
        <el-table-column prop="mobile" label="客户电话"  width="120"></el-table-column>
        <el-table-column prop="address" label="默认送奶地址" width="180"></el-table-column>
        <el-table-column sortable prop="org"  label="片区" width="120"></el-table-column>
        <el-table-column prop="person" label="业务员" width="100"></el-table-column>
        <el-table-column prop="curOrderMaterial" label="当前订奶品" width="120"></el-table-column>
        <el-table-column sortable prop="curOrderQty" label="当前订奶数量" width="150"></el-table-column>
        <el-table-column prop="curOrderAmount" label="当前订奶金额" width="120"></el-table-column>
        <el-table-column prop="sendTime" label="当前送奶时间" width="120"></el-table-column>
        <el-table-column sortable prop="payType" label="支付方式" width="120"></el-table-column>
        <el-table-column sortable prop="totalQty" label="总订奶数量" width="120"></el-table-column>
        <el-table-column sortable prop="totalAmount" label="总订奶金额" width="120"></el-table-column>
        <el-table-column sortable prop="creator" label="创建人"  width="100"></el-table-column>
        <el-table-column sortable prop="createTime" label="创建时间"  width="120"></el-table-column>
      </el-table>

    </el-main>
    </el-container>
    <el-dialog
      title="类别新增"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
       <el-form :inline="true" :model="curCustomerGroup" class="demo-form-inline">
          <el-form-item  label="分类编码">
            <el-input v-model="curCustomerGroup.number" placeholder="分类编码"></el-input>
          </el-form-item>
          <el-form-item  label="分类名称">
            <el-input v-model="curCustomerGroup.name" placeholder="分类名称"></el-input>
         </el-form-item>
          <el-form-item  label="关联组织">
            <el-input v-model="curCustomerGroup.org" placeholder="关联组织"></el-input>
         </el-form-item>
       </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
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
      customergroup:[{
        id:1,
        label:'客户分类',
        children:[
          {
            id:11,
            label:'阜阳',
            children:[{
              id:111,
              label:'商超',
               children:[{
              id:1111,
              label:'连锁超市',
              }]
            },{
              id:112,
              label:'个人',
            }]
          },
          {
            id:12,
            label:'涿州',
          },
        ]
      }],
       defaultProps: {
          children: 'children',
          label: 'label'
      },
      dialogVisible:false,
      curCustomerGroup:{}
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
  