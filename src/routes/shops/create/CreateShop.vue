<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/shops' }">商户列表</el-breadcrumb-item>
      <el-breadcrumb-item>新增商铺</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      :class="styles.content"
    >
      <shop-info/>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import styles from "./create.module.scss";
import shopInfo from "./components/ShopInfo";

export default {
  name: "createShop",
  components: {
    "shop-info": shopInfo
  },
  data() {
    return {
      styles,
      ruleForm: {
        name: "",
        connect: "",
        address: "",
        date: ""
      },
      rules: {
        logo: [
          { required: true, message: "请输入选择logo", trigger: "change" }
        ],
        name: [
          { required: true, message: "请输入名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        connect: [
          { required: true, message: "请输入联系方式", trigger: "change" }
        ],
        address: [
          { required: true, message: "请输入商铺地址", trigger: "change" }
        ],
        date: [{ required: true, message: "请选择营业时间", trigger: "change" }]
      },
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
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

