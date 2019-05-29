<template>
  <el-dialog title="详情" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
    <span>{{ data.name }}----{{ data.date }}</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "order-detil",
  props: {
    dialogVisible: Boolean,
    handleClose: Function,
    data: Object
  }
};
</script>
