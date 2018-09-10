import * as Constants  from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    title:'',
    content:''
});
export default (state = defaultState, action)=>{

    switch (action.type){
        case Constants.CHENGE_DETAIL_DATA :
        return state.merge({
            title:action.title,
            content:action.content
        })
        default : 
            return state
    } 
}