import * as Constants  from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
    wirterList:[],
    articlePage: 1,
	showScroll: false
});
export default (state = defaultState, action)=>{

    switch (action.type){
        case Constants.CHENGE_TOPIC_DATA:
        return state.merge({
            topicList:fromJS(action.topicList),
            articleList:fromJS(action.articleList),
            recommendList:fromJS(action.recommendList),
            wirterList:fromJS(action.wirterList)
        })
        case Constants.CHENGE_MORE_DATA :
        return state.merge({
            'articleList': state.get('articleList').concat(action.list),
            'articlePage': action.page
        });
        case Constants.TOGGLE_SHOW :
        
        return state.set('showScroll',action.show)
        
        default : 
            return state
    } 
}