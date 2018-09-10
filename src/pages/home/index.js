import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreator } from './store' 

import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'

class Home extends Component {
    handleScrollTop (){
        var timer = null;
        //设置定时器
        timer = setInterval(function(){
            //获取滚动条距离顶部的高度
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;  //同时兼容了ie和Chrome浏览器            
            //减小的速度
            var isSpeed = Math.floor(-osTop / 6);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + isSpeed;
            //判断，然后清除定时器
            if (osTop === 0) {
                clearInterval(timer);
            }
        },20);
    }
    render() {
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4424/28fa64c724d3d67bc47994c5b9e43b43474069d9.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540"/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                { this.props.showScroll? <BackTop onClick={this.handleScrollTop} >顶部</BackTop> : null }          
            </HomeWrapper>
        )
    }
    componentDidMount () {
        this.props.changeHomeData()
        this.bind()
    }
    componentWillUnmount (){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }

    bind (){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}
const mapStateToProps = (state)=>({
    showScroll:state.getIn(['home','showScroll'])
})

const mapDispatchToProps = (dispatch)=>{
    return{
        changeHomeData () {
            dispatch(actionCreator.changeHomeData())
        },
        changeScrollTopShow (){
            if(document.documentElement.scrollTop>100){
                dispatch(actionCreator.toggleShow(true))
            }else{
                dispatch(actionCreator.toggleShow(false))
            }
            
        }
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Home)