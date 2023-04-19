<template>
    <div>
        <van-cell :title="name" center icon="shop-o"
            :label="author+ ' - ' + name" @click="enterDetails">
            <!-- 使用 right-icon 插槽来自定义右侧图标 -->
            <template #right-icon>
                <van-icon name="play-circle-o" size="0.6rem" />
            </template>
        </van-cell>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            
        };
    },
    methods:{
        enterDetails(){
            this.$router.push({
                path: '/play',
                query: {
                    id: this.id
                }
            })
        }
    },
    props:{
        name:String,
        id:Number,
        author:String
    }
}
</script>
  
<style scoped>
.van-cell {
  border-bottom: 1px solid lightgray;
}
</style>