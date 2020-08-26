<template>
  <div>
    <!-- 面包屑 -->
    <el-bread></el-bread>
    <!-- 添加按钮 -->
    <div>
      <el-button type="primary" size="mini" plain>添加</el-button>
    </div>
    <!-- table表格 -->
    <el-table :data="tableData" border style="width: 90%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column
      fixed="right"
      label="操作">
      <template slot-scope="scope">
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
         <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
import elBread from '../components/elBread'
export default {
  data() {
    return {
    };
  },
  components:{
      elBread
  }
};
</script>

<style  lang="stylus" scoped>
.el-breadcrumb {
  height: 40px;
}
.el-button
    margin-bottom 15px
</style>
