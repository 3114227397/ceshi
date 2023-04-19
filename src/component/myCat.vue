<template>
  <div>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>
  
<script>
export default {
  created() {
    console.log(this.arr);
  },
  props: ["arr"],
  data() {
    return {

    };
  },
  methods: {
    ceshi(name) {
      console.log(this.arr);
      this.arr.forEach((obj) => {
        obj.name = "zs";
      })
      console.log();
    }
  }
};
</script>