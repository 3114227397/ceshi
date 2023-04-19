import request from '@/util/request'
const hotSearch = ()=>request({
    url: '/search/hot'
})
const searchResult = params => request({
    url: '/cloudsearch',
    params
})

export {
    hotSearch,
    searchResult
}