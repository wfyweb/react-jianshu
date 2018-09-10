import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { actionCreator } from './store' 

import { LoginWrapper,LoginBox,LoginInput,LoginIn } from './style'
class Login extends PureComponent {
    render() {
        const { loginState } = this.props;
        if(loginState){
            return <Redirect to="/" />
        }else{
            return (
                <LoginWrapper>
                    <LoginBox>
                        <LoginInput placeholder="手机号或邮箱" innerRef={(input)=>{this.account =input}}></LoginInput>
                        <LoginInput placeholder="密码" innerRef={(input)=>{this.password=input}}></LoginInput>
                        <LoginIn onClick={()=>{this.props.handleLogin(this.account,this.password)}}>登录</LoginIn>
                    </LoginBox>
                </LoginWrapper>
               )   
        }
        
    }
    
}

const mapStateToProps = (state) => ({
    loginState:state.getIn(['login','login'])
})

const mapDispatchToProps = (dispatch) =>{
    return {
        handleLogin(account,password){
            console.log('click');
            
            dispatch(actionCreator.login(account.value,password.value))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)