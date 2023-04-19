<template>
  <div>
    <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" @input=inputChange />
    <div class="search_wrap" v-if="value.length == 0">
      <p class="hot_title">热门搜索</p>
      <div class="hot_name_wrap">
        <span class="hot_item" v-for="(obj, index) in hotArr" :key="index" @click="clickHot(obj.first)">{{ obj.first
        }}</span>
      </div>
    </div>
    <div class="search_wrap" v-else>
      <p class="hot_title">最佳匹配</p>
      <van-list v-model:loading="loading" 
      :finished="finished" 
      finished-text="没有更多了" 
      @load="onLoad">
          <sonList v-for="obj in resultList" 
          :key="obj.id"
          :name="obj.name"      
          :id="obj.id"
          :author="obj.ar[0].name"
          ></sonList>
        </van-list>
    </div>
  </div>
</template>

<script>
import { hotSearchApi, searchResultApi } from "@/api/index"
import sonList from '@/component/sonList'
export default {
  components:{
    sonList
  },
  data() {
    return {
      value: '',
      hotArr: [],
      resultList: [],
      timer: null,
      loading:false,
      list: [],
      finished: false,
      page:1,
    }
  },
  async created() {
    const hotSearchRes = await hotSearchApi();
    console.log(hotSearchRes);
    this.hotArr = hotSearchRes.data.result.hots;
  },
  methods: {
    async onLoad(){

      this.page++;
      const res = await this.getSearchResult();
      console.log(this.resultList.length);
      this.resultList=[...this.resultList,...res.data.result.songs];
      console.log(this.resultList.length);
      this.loading=false;
      if(this.resultList.length==0){
        this.finished=true;
      }
    },
    async getSearchResult() {
      return await searchResultApi({
        keywords: this.value,
        limit: 20,
        offset: (this.page - 1) * 20, // 固定公式
      })
    },
    async clickHot(val) {
      this.value = val;
      const res = await this.getSearchResult();
      console.log('ss');
      console.log(res);
      this.resultList = res.data.result.songs;
    },
    async inputChange() {
      this.page=1;
      console.log(this.resultList.length);
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (this.value.length === 0) {
        this.resultList = [];
        return;
      }
      const timer = setTimeout(async () => {
        console.log("查询中");
        const res = await this.getSearchResult();
        console.log(res.data.result.songs);
        if (res.data.result.songs === undefined) {
          console.log("进来了");
          this.resultList = [];
          this.finished=true;
          return;
        }
        this.resultList = res.data.result.songs;
      }, 1000);
      this.timer = timer;

    }
  }
}
</script>

<style scoped>
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}
</style>