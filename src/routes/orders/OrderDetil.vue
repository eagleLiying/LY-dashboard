<template>
  <el-dialog title="详情" :visible.sync="visible" width="30%" :before-close="handleclose">
    <span>{{ data.createDate }}</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleclose">取 消</el-button>
      <el-button type="primary" @click="handleclose">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "order-detil",
  props: {
    visible: Boolean,
    handleclose: Function,
    data: Object
  },
};
</script>
