<template>
  <el-row>
    <el-col :span="24">
      <el-form-item label="商铺LOGO" prop="logo">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <!-- <img width="100%" :visible.sync="dialogVisible" :src="dialogImageUrl" alt> -->
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="联系电话" prop="connect">
        <el-input v-model="ruleForm.connect"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="地址" prop="address">
        <el-input v-model="ruleForm.address"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="营业时间" prop="date">
        <el-time-picker
          is-range
          v-model="ruleForm.date"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围"
        ></el-time-picker>
      </el-form-item>
    </el-col>
    <el-col :span="24">
      <el-form-item label="介绍" prop="address">
        <el-input type="textarea" :rows="2" v-model="ruleForm.address"></el-input>
      </el-form-item>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "createShopInfo",
  props: {
    // ruleForm: Object
  },
  data() {
    return {
      ruleForm: {
        name: "",
        connect: "",
        address: "",
        date: ""
      },
      rules: {
        logo: [{ required: true, message: "请输入选择logo", trigger: "blur" }],
        name: [{ required: true, message: "请输入名称", trigger: "blur" }],
        connect: [
          { required: true, message: "请输入联系方式", trigger: "blur" }
        ],
        address: [
          { required: true, message: "请输入商铺地址", trigger: "blur" }
        ],
        date: [{ required: true, message: "请选择营业时间", trigger: "blur" }]
      },
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      console.log(file);
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>

<style scoped>
.el-col {
  margin-bottom: 20px;
}
</style>


