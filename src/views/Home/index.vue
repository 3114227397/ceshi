<template>
  <div>
    <p class="title">推荐歌单</p>
    <van-row gutter="6">
      <van-col span="8" v-for="obj in reList" :key="obj.id" @click="fn">
        <van-image width="100%" height="3rem" fit="cover" :src="obj.picUrl" />
        <p class="song_name">{{ obj.name }}</p>
      </van-col>
    </van-row>

    <p class="title">最新音乐</p>
    <sonList v-for="obj in songList" :key="obj.id" :name="obj.name" :author="obj.song.artists[0].name" :id="obj.id">
    </sonList>
    <sonList v-for="obj in songList" :key="obj.id" :name="obj.name" :author="obj.song.artists[0].name" :id="obj.id">
    </sonList>
  </div>
</template>

<script>
import { recommendMusicApi, newMusicApi } from '@/api'
import { showDialog } from 'vant';
import sonList from '@/component/sonList'
export default {
  data() {
    return {
      reList: [],
      songList: [],
    };
  },
  async created() {
    const res = await recommendMusicApi({
      limit: 6
    });
    this.reList = res.data.result;

    const newMusicRes = await newMusicApi({
      limit: 20
    })
    this.songList = newMusicRes.data.result;
  },
  components: {
    sonList
  },
  methods: {
    fn() {
      showDialog({
        message: '功能暂未开放，敬请期待',
        theme: 'round-button',
      }).then(() => {
        // on close
      });
    }
  }
}
</script>

<style scoped>
/* 中间内容区域 - 容器样式(留好上下导航所占位置) */
/* 标题 */
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}

/* 推荐歌单 - 歌名 */
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical;
  /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2;
  /** 显示的行数 **/
  overflow: hidden;
  /** 隐藏超出的内容 **/
}
</style>