<template>
  <div>
    <el-table :data="get_SpecsList" border>
      <el-table-column prop="id" label="规格编号" width="180"></el-table-column>
      <el-table-column prop="specsname" label="规格名称" width="180"></el-table-column>
      <el-table-column prop="attrs" label="规格属性" width="180">
        <template slot-scope="item">
          <el-tag v-for='attr in item.row.attrs' type='info' :key='attr'>{{attr}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="item">
          <el-tag v-if="item.row.status ==1" type="success">正常</el-tag>
          <el-tag v-else type="danger">禁用</el-tag>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="item">
          <el-button type="primary" @click="update(item.row.id)" icon="el-icon-edit" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" @click="del(item.row.id)" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="pageInfo.size"
      @current-change="getChange"
      @prev-click="prevInfo"
      @next-click="nextInfo"
    ></el-pagination>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
//调用接口
import {
  getSpecsDel,
  getSpecsCount,
  getSpecsAdd,
  getSpecsEdit,
} from "../../util/axios";
export default {
  data() {
    return {
      total: 0, //总条数
      pageInfo: {
        //分页的信息
        size: 2, //查询条数
        page: 1, //页码数
      },
      changePage: 1,
    };
  },
  mounted() {
    //页面一加载调取总条数
    this.getCount();
    this.getSpecsListAction(this.pageInfo);
  },
  computed: {
    ...mapGetters(["get_SpecsList"]),
  },
  methods: {
    ...mapActions(["getSpecsListAction"]),
    //点击编辑按钮传id
    update(id) {
      this.$emit("update", {
        id,
        isAdd: false,
        changePage: this.changePage,
      });
    },
    //删除数据
    del(id) {
      this.$confirm("确定要删除该数据吗", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          //调取删除接口
          getSpecsDel({ id }).then((res) => {
            if (res.code === 200) {
              this.$message({
                type: "success",
                message: res.msg,
              });
              //重新调取列表接口
              this.getCount();
            } else {
              this.$message.error(res.msg);
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    //获取总条数
    getCount() {
      getSpecsCount().then((res) => {
        if (res.code === 200) {
          this.total = res.list[0].total;
          //逻辑判断
          if (this.pageInfo.page != 1 && this.get_SpecsList.length == 1) {
            this.pageInfo.page--;
          }
          //重新调取列表
          this.getSpecsListAction(this.pageInfo);
        }
      });
    },
    //当页面发生变化的时候会调用当前方法
    getChange(n) {
      this.pageInfo.page = n;
      this.changePage = n;
      //重新调取列表
      this.getSpecsListAction(this.pageInfo);
    },
    //上一页事件
    prevInfo(n) {
      this.pageInfo.page = n;
      this.changePage = n;
      //重新调取列表
      this.getSpecsListAction(this.pageInfo);
    },
    //下一页事件
    nextInfo(n) {
      this.pageInfo.page = n;
      this.changePage = n;
      //重新调取列表
      this.getSpecsListAction(this.pageInfo);
    },
  },
};
</script>

<style  lang="" scoped>
.el-pagination {
  float: right;
  margin: 16px 0;
}
</style>


