import styled from "styled-components";
export const DetailWrapper = styled.div`
    width:620px;
    margin:0 auto;
    overflow:hidden;
    margin-bottom:100px;
`

export const Header = styled.div`
    line-height:44px;
    margin:50px 0 20px 0;
    font-size:34px;
    color:#333;
    font-weight:bold;

`
export const Content = styled.div`
    color:#2f2f2f;
    width:100%;
    line-height: 1.7;
    h1 {
        font-size: 26px;
        margin: 0 0 15px;
        font-weight: 700;
        color: #2f2f2f;
        line-height: 1.7;
        text-rendering: optimizelegibility;
    }
    p{
        margin:25px 0;
        font-size:16px;
    }
    b, strong {
        font-weight: 700;
    }
    .contentImg{
        padding-bottom:25px;
        
    }
    .contentImg img{
        width:100%;
        height:100%;
        
    }
    .contentImg .image-caption{
        min-width: 20%;
        min-height: 22px;
        text-align:center;
        font-size: 14px;
        color: #969696;
        line-height: 1.7;
        margin-top: 10px;
    }
    .contentImg .image-caption span{
        padding: 10px;
        border-bottom: 1px solid #d9d9d9;
    }
`
