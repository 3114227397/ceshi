<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import myCat from './component/myCat.vue'
export default {
  components: {
    myCat
  },
  data() {
    return {
      stuArr: [
        {
          id: 1001,
          name: "孙悟空",
          sex: "男",
          hobby: "吃桃子",
        },
        {
          id: 1002,
          name: "猪八戒",
          sex: "男",
          hobby: "背媳妇",
        },
      ],
      count: 10,
    };
  },
};
</script>