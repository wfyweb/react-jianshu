import axios from 'axios'
import * as Constants from './constants'

const changeDetail = (data)=>({
    type:Constants.CHENGE_DETAIL_DATA,
    title:data.title,
    content:data.content
})
export const getDetail = (id) =>{
    return (dispatch)=>{
        axios.get('/api/detail.json?id='+id)
        .then((ret)=>{
            const result = ret.data.data
            dispatch(changeDetail(result))
        })
    }
}