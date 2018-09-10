import axios from 'axios'
import * as Constants from './constants'

const changeLogin = (data)=>({
   type:Constants.CHENGE_LOGIN_DATA,
   data
})
export const login = (account,passwrod) =>{
    return (dispatch)=>{
        axios.get('/api/login.json?account='+account+'&passwrod='+passwrod)
        .then((res)=>{
            const result = res.data.data
            if(result){
                dispatch(changeLogin(true))
            }
        }).catch((e)=>{
            console.log(e);
            
        })
    }
}
export const logout = () =>{
    return (dispatch)=>{
        dispatch(changeLogin(false))
    }
}