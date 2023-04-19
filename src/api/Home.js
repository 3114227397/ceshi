import request from "@/util/request"

export const recommendMusic= params => request({
    url: '/personalized',
    params
})
// 首页 - 推荐最新音乐
export const newMusic = params => request({
    url: "/personalized/newsong",
    params
})