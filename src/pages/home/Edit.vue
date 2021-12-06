<!--
 * @Author: YanShiHeng
 * @Date: 2021-11-26 09:22:59
 * @LastEditors: YanShiHeng
 * @LastEditTime: 2021-11-29 20:19:31
 * @Description: 
-->
<template>
  <!-- :rules="rules"  -->
  <div class="box">
    <el-form :model="pageData" ref="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="产品名字" prop="name">
            <el-input v-model="pageData.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="销售开始">
            <el-date-picker type="date" placeholder="选择日期" v-model="pageData.st" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="产品类型">
            <el-select v-model="pageData.type" placeholder="请选择" clearable>
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="销售价格">
            <el-input v-model="pageData.price"></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="活动名称">
            <el-input type="textarea" v-model="pageData.remark"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div>
      <el-button type="primary" @click="saveEvt">保存</el-button>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      pageData: {
        name: '',
        st: '',
        type: '',
        price: '',
        remark: ''
      },
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    saveEvt() {
      // this.$refs.ruleForm.validate((valid) => {
      //   if (valid) {
      //     alert('submit!');
      //   } else {
      //     console.log('error submit!!');
      //     return false;
      //   }
      // });
      this.$refs.ruleForm.validate().then(valid => {
        console.log(valid);
      }).catch(e => {
        console.log(e);
      })
    }
  },
  beforeRouteLeave(to, from, next) {
    let flag = confirm('确认要放弃编辑吗？');
    if (flag) next()
  }
}
</script>
<style lang="less" scoped>
.box {
  display: block;
  height: 100%;
  padding: 12px;
}
</style>