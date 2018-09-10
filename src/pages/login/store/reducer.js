import * as Constants  from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    login:false
});
export default (state = defaultState, action)=>{

    switch (action.type){
        case Constants.CHENGE_LOGIN_DATA:
        return state.set('login',action.data)
        default : 
            return state
    } 
}