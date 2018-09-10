import styled from "styled-components";
import LogoPic from '../../statics/logo.png'
export const HeaderWrapper = styled.div`
    position:relative;
    height:56px;
    border-bottom:1px solid #f0f0f0;
    min-width: 768px;
    max-width: 1440px;
    margin: 0 auto;

`

export const Logo = styled.a`
    position:absolute;
    top:0;
    left:0;
    height:56px;
    width:100px;
    background:url(${LogoPic});
    background-size:100% 100%;
`
export const Nav = styled.div`
    min-width:50%;
    max-width:74%;
    height:100%;
    padding-right:70px;
    box-sizing:border-box;
    margin:0 auto;
`
export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696
    }
    &.active{
        color:red;
    }
`
export const SearchWrapper = styled.div`
    float:left;
    position:relative;
    
    .zoom{
        position:absolute;
        bottom:5px;
        right:0px;
        width:30px;
        line-height:30px;
        text-align:center;
        border-radius:15px;
        color:#969696;
        &.focused{
            background:#969696;
            color:#fff;
        }
    }
    
`
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})` 
    width:180px;
    height:38px;
    color:#333333;
    margin-top:9px;
    margin-left:20px;
    padding:0 35px 0 20px;
    box-sizing:border-box;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    font-size:14px;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:240px;
    }
    &.fade-enter{
        transition:all .2s ease-out;
    }
    &.fade-enter-active{
        width:240px;
    }
    &.fade-exit{
        transition:all .2s ease-out;
    }
    &.fade-exit-active{
        width:180px;
    }
`
export const SearchInfo = styled.div`
    position:absolute;
    left:20px;
    top:56px;
    width:250px;
    box-sizing:border-box;
    padding: 20px 20px 10px;
    border-bottom: 1px solid #f0f0f0;
    border-radius:4px;
    background:#fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    &::after {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border: 12px solid transparent;
        border-bottom-color: #fff;
        left: 20px;
        bottom: 99%;
    }
    &::before {
        content: "";
        left: 27px;
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        top: -5px;
        z-index: -1;
    }
`
export const SearchInfoTitle = styled.div`
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
    
`
export const SearchInfoSwitch = styled.div`
    float:right;
    line-height:20px;
    font-size:13px;
    color:#969696;
    cursor:pointer;
    .spin{
        display: inline-block;
        font-size: 14px;
        transition: all .2s ease-in;
        transform-origin:center center;
    }
`
export const SearchInfoList = styled.div`
    overflow:hidden;
`
export const SearchInfoItem = styled.a`
    float:left;
    display:block;
    padding:2px 6px;
    margin-right:10px;
    margin-bottom:12px;
    line-height:18px;
    font-size:12px;
    color:#787878;
    border:1px solid #ddd;
    border-radius:3px;
    cursor:pointer;
`

export const Addition = styled.div`
    position:absolute;
    top:0;
    right:0;
    height:100%;
`

export const Button = styled.div`
    float:right;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    line-height:38px;
    border-radius:19px;
    border:1px solid #ec6149;
    font-size:14px;
    &.reg{
        color:#fff;
        background:#ec6149;
    }
    &.writting{
        color:#ec6149;
    }
`
