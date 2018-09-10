import * as Constants  from './constants'
import { fromJS } from 'immutable'
// immutable库 禁止修改state
const defaultState = fromJS({
    focused: false,
    mouser:false,
    list:[],
    page:1,
    pageList:1
    
});
//immutable对象的set方法，会结合之前的immtable对象的值
//和设置的值，返回一个全新的对象
export default (state = defaultState, action)=>{

    switch (action.type){
        case Constants.SEARCH_FOCUS :
            return state.set('focused',true)
        case Constants.SEARCH_BLUR :
            return state.set('focused',false)
        case Constants.MOUSE_ENTER :
            return state.set('mouser',true)
        case Constants.MOUSE_LEAVE :
            return state.set('mouser',false)
        case Constants.CHANGE_LIST :
            return state.set('list',action.data).set('pageList',action.listPage)
        case Constants.CHANGE_PAGE :
            return state.set('page',action.page)
        default : 
            return state
    } 
}