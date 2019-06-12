<template>
  <div :class="styles.filed">
    <div :class="styles.filedTitle">{{ title }}:</div>
    <div :class="styles.filedValue">{{ value }}</div>
  </div>
</template>

<script>
import styles from "./User.module.scss";

export default {
  name: "user-detil-faild-item",
  props: {
      title: String,
      value: String,
  },
  data() {
    return {
      styles
    };
  }
};
</script>

