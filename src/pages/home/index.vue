<!--
 * @Author: YanShiHeng
 * @Date: 2021-11-26 09:12:13
 * @LastEditors: YanShiHeng
 * @LastEditTime: 2021-11-29 20:19:05
 * @Description: 首页
-->
<template>
  <!-- <div>
    home page.
    <button @click="$router.push('/home/edit')">新增</button>
  </div> -->
  <div class="box">
    <div class="t">
      <el-table :data="tableData" style="width: 100%" height="100%">
        <el-table-column fixed prop="name" label="产品名字" width="180" />
        <el-table-column prop="type" label="类型" width="180" />
        <el-table-column prop="price" label="价格" width="180" />
        <el-table-column prop="discount" label="优惠" width="180" />
        <el-table-column prop="supplier" label="供应商" width="280" />
        <el-table-column fixed="right" width="120" label="操作">
          <template v-slot="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>

      </el-table>
    </div>
    <div class="b">
      <el-pagination @current-change="handleCurrentChange" :current-page.sync="page" :page-size="20" layout="total, prev, pager, next" :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { listApi } from '../../apis/productApi'
export default {
  data() {
    return {
      tableData: [],
      total: 0,
      page: 1
    }
  },
  created() {
    this.getList()
    // console.log(list);
  },
  methods: {
    async getList() {
      let result = await listApi({ page: this.page, size: 20 })
      this.tableData = result.data;
      this.total = result.total
    },
    handleClick(row) {
      console.log(row);
      this.$router.push({ path: '/home/edit', query: { id: row.id } })
    },
    handleCurrentChange() {
      this.getList()
    }
  },
}
</script>
<style lang="less" scoped>
.box {
  display: block;
  height: 100%;
  > .t {
    height: calc(100% - 34px);
  }
  > .b {
    height: 34px;
    text-align: right;
    border-top: solid 1px #ddd;
  }
}
</style>