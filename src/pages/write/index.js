import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { actionCreator } from './store' 

import { WriteWrapper } from './style'
class Write extends PureComponent {
    render() {
        const { loginState } = this.props
        // 登陆判断
        if(loginState){
            return <WriteWrapper>Write</WriteWrapper>
        }else{
            return <Redirect to='/login'/>
        }
        
    }
    
}
const mapStateToProps = (state) => ({
    loginState:state.getIn(['login','login'])
})

export default connect(mapStateToProps,null)(Write)