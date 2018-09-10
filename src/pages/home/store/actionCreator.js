import axios from 'axios'
import * as Constants from './constants'
import { fromJS } from 'immutable';

const HomeData = (result)=>({
    type:Constants.CHENGE_TOPIC_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    wirterList:result.wirterList
})

const MoreData = (result,page)=>({
    type:Constants.CHENGE_MORE_DATA,
    list:fromJS(result),
    page:page+1
})
// 首次加载文章列表
export const changeHomeData = ()=>{
    return (dispatch)=>{
        axios.get('/api/home.json')
            .then((res)=>{
               const result = res.data.data
               const action = HomeData(result)
               dispatch(action)
            })
    }
}
// 加载更多文章列表
export const changeMoreData = (page) =>{
    return (dispatch)=>{
        axios.get('/api/homeMoreList.json?page='+page)
            .then((res)=>{
               const result = res.data.data
               const action = MoreData(result,page)
               dispatch(action)
            })
    }
}

export const toggleShow = (show)=>({
    type:Constants.TOGGLE_SHOW,
    show
})
