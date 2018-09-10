import * as Constants  from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'

const createList = (data,len) =>({
    type:Constants.CHANGE_LIST,
    data:fromJS(data),
    listPage:Math.ceil(len/10),
})
export const changePage = (page) =>({
    type:Constants.CHANGE_PAGE,
    page
})

export const searchFocus = () => ({
    type:Constants.SEARCH_FOCUS
}) 

export const searchBlur = () => ({
    type:Constants.SEARCH_BLUR
}) 

export const mouseEnter = () => ({
    type:Constants.MOUSE_ENTER
}) 

export const mouseLeave = () => ({
    type:Constants.MOUSE_LEAVE
}) 

export const getList = () => {
    return (dispatch)=>{
        axios.get('/api/getList.json')
        .then((res)=>{
            const data = res.data;
            const len = data.data.length
            dispatch(createList(data.data,len))
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}