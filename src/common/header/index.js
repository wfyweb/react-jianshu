import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { CSSTransition } from 'react-transition-group';
import { actionCreator } from './store';
import { actionCreator as LoginActionCreator } from '../../pages/login/store';

import { 
    HeaderWrapper,
    Logo, 
    Nav, 
    NavItem, 
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from './style';


class Header extends Component {
    render(){
        const { focused, handleFoucsed, handleBlur, login ,logout } = this.props
        return (
            <HeaderWrapper>
                    <Logo href='/'></Logo>
                    <Nav>
                        <Link to='/'>
                            <NavItem className="left active">
                                <i className="iconfont home">&#xe606;</i>
                                首页
                            </NavItem>
                        </Link>
                        <NavItem className="left">
                            <i className="iconfont">&#xe666;</i>
                            下载APP
                        </NavItem>
                        {
                            login ? 
                                <NavItem onClick={logout} className='right'>退出</NavItem> : 
                                <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
                        }
                        
                        <NavItem className="right">
                            <i className="iconfont">&#xe607;</i>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                in={focused}
                                classNames="fade"
                                timeout={200}
                            >
                                <NavSearch 
                                    onFocus={handleFoucsed} 
                                    onBlur={handleBlur}
                                    className={focused? 'focused':''}
                                ></NavSearch>
                            </ CSSTransition>
                            <i className={focused? 'focused iconfont zoom ':'iconfont zoom'} >&#xe60e;</i>
                            { this.getListArea() }
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Link to='/write'>
                            <Button className="reg">
                                <i className="iconfont">&#xe608;</i>
                                写文章
                            </Button> 
                        </Link>
                        <Button className="writting">注册</Button>
                    </Addition>
                </HeaderWrapper>
        )
    }
    getListArea = ()=>{
        const { focused, mouser,  list, page, pageList, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
            const newList = list.toJS();
            const pageListItem = [];
            if(newList.length){
                for(let i= (page-1)*10;i<page*10;i++){
                    pageListItem.push(
                        <SearchInfoItem key={i} >{newList[i]}</SearchInfoItem>
                    )
                }
            }
            
        if(focused || mouser ){
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={()=>{handleChangePage(page,pageList,this.spinIcon)}}>
                            <i ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe690;</i>换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        { pageListItem }
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null
        }
        
    }
}

const mapStateToProps = (state)=>{
    return{
        focused:state.getIn(['header','focused']),
        mouser:state.getIn(['header','mouser']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        pageList:state.getIn(['header','pageList']),
        login:state.getIn(['login','login'])
        // focused:state.focused
        // focused:state.header.focused
        // focused:state.header.get('focused')
        // focused:state.get('header').get('focused')
    }
}

const mapDispathToProps = (dispatch)=>{
    return{
        handleFoucsed (){
            dispatch(actionCreator.getList())
            dispatch(actionCreator.searchFocus())
        },
        handleBlur (){
            dispatch(actionCreator.searchBlur())
        },
        handleMouseEnter (){
            dispatch(actionCreator.mouseEnter())
        },
        handleMouseLeave (){
            dispatch(actionCreator.mouseLeave())
        },
        handleChangePage (page,pageList,icon){
            // icon 获取图标dom
            // 匹配 transform：rotate(0deg) 旋转的度数
            console.log(icon.style.transform);
            
            let originAngle = icon.style.transform.replace(/[^0-9]/ig,'')
            // originAngle 字符串 转化 数字
            if(originAngle){
                originAngle = parseInt(originAngle,10)
            }else{
                originAngle = 0
            }

            //设置旋转角度
            icon.style.transform = 'rotate('+(originAngle+360)+'deg)'
            
            if(page<pageList){
                page = page+1
            }else{
                page = 1
            }
            
            dispatch(actionCreator.changePage(page))
        },
        logout(){
            dispatch(LoginActionCreator.logout())
        }

    }
}

export default connect(mapStateToProps,mapDispathToProps)(Header) 


// 实现 热门推荐换页功能

// 1. 聚焦时候axios请求所有数据 
// 2. 每页展示 10条  data/10 共几页 actionCreator
// 3. dispatch 派发给 reducer 动态得出总页数 
// 4. 展示到view中  immutable对象转js对象 =>list.toJS() 循环list中朴树到数组
// 5. 换一批 page ++  if page > leng  page 1
