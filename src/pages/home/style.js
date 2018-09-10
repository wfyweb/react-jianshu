import styled from "styled-components";
export const HomeWrapper = styled.div`
    width:960px;
    overflow:hidden;
    margin:0px auto;


`
export const HomeLeft = styled.div`
    float:left;
    width:625px;
    margin-left:15px;
    padding-top:30px;
    .banner-img{
        width:100%;
        height:270px;
        background-size:100% 100%;
        border-radius:6px;
    }
`
export const HomeRight = styled.div`
    float:right;
    width:280px;
`

export const TopicWrapp = styled.div`
    overflow: hidden;
    padding: 30px 0 10px 0;
    border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
    cursor:pointer;
    overflow:hidden;
    float:left;
    line-height:32px;
    margin:0 18px 18px 0;
    padding-right:10px;
    background-color:#f7f7f7;
    border:1px solid #dcdcdc;
    border-radius: 4px;
    font-size:14px;
    color:#000;
    .topic-name-img{
        float:left;
        display:block;
        width:32px;
        height:32px;
        margin-right:10px;
    }
`
export const TopicItemMore = styled.div`
    float:left;
    line-height:32px;
    margin:0 18px 18px 0;
    font-size:14px;
    color:#787878;
    cursor:pointer;
`


export const ListItem = styled.div`
    overflow:hidden;
    padding: 20px 0;
    border-bottom : 1px solid #f0f0f0;
    .pic{
        float:right;
        width:125px;
        height:100px;
        border-radius: 4px;
        border: 1px solid #f0f0f0;
        cursor:pointer;
        box-sizing: border-box;
    }
    
` 
export const ListInfo = styled.div`
    width:480px;
    float:left;
    h3{
        color:#333;
        font-size:18px;
        font-weight:bold;
        line-height:27px;
        cursor:pointer;
        margin-bottom:5px;
    }
    .desc{
        line-height:24px;
        font-size:13px;
        color:#999;
    }
` 

export const ListMeta = styled.div`
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    margin-top: 10px;
    span{
        margin-right: 10px;
        color: #b4b4b4;
        .meta-comments{
            margin-right:0px;
            font-size: 14px;
        }
        .meta-like{
            margin-right:0px;
            font-size: 17px;
        }
        &:hover{
            color:#787878;
        }
    }
`
export const MetaA = styled.div`
    margin-right: 10px;
    color: #b4b4b4;
    display:inline-block;
    &:hover{
        color:#787878;
    }
`
export const LoadMore = styled.div`
    margin: 30px auto 60px;
    padding: 10px 15px;
    text-align: center;
    font-size: 15px;
    border-radius: 20px;
    color: #fff;
    background-color: #a5a5a5;
    cursor:pointer;
`

export const RecommendWrapper = styled.div`
    margin-top:26px;
    padding-bottom:4px;
` 
export const RecommendItem = styled.div`
    width:100%;
    height:50px;
    cursor: pointer;
    margin-bottom: 6px;
    border-radius: 4px;
    background: url(${(props) => props.imgUrl});
	background-size: contain;
` 
export const Download = styled.div`
    overflow:hidden;
    margin-top:10px;
    margin-bottom:30px;
    padding:10px 22px;
    border:1px solid #f0f0f0;
    border-radius:6px;
    background:#fff;
    .qrcode{
        float:left;
        width:60px;
        height:60px;
    }
`
export const DownloadInfo = styled.div`
    float:left;
    margin-left:15px;
    vertical-align: middle;
    .title{
        font-size: 15px;
        color: #333;
        margin-top:10px;
    }
    .description{
        margin-top: 4px;
        font-size: 13px;
        color: #999;
        margin-top:10px;
    }
`

export const WriterWrapper = styled.div`
    width: 100% ;  
    padding:10px 0;
`;

export const WriterTitle = styled.div`
 
    overflow:hidden;
    font-size: 14px;
    color: #969696;
    span{
        float:left;
    }
    a{
        float:right;
        display: inline-block;
        cursor:pointer;
    }
    .iconfont{
        display: inline-block;
        margin-right:5px;
        font-size: 14px;
        transition: .5s ease;
    }
`
export const WriterList = styled.div`
    margin: 0 0 20px;
    text-align: left;
` 
export const WriterListInfo = styled.div`
    margin-top: 20px;
    line-height: 20px;
`
export const Avatar = styled.div`
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    border: 1px solid #ddd;
    border-radius: 50%;
    background:url(${(props) => props.imgUrl});
    background-size:100% 100%;
`

export const Follow = styled.div`
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
    .add{
        font-size: 10px;
        margin-right:5px;
        vertical-align: 1px;
    }
`
export const WriterDesc = styled.div`
    .title{
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
    }
    p{
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }
`
export const WriterListAll = styled.div`
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    text-align:center;
    padding: 7px 7px 7px 12px;
    line-height:20px;
    cursor:pointer;
    .iconfont{
        font-size:14px;
        margin-left:5px;
        vertical-align: 1px;
    }
`
export const BackTop = styled.div`
	position: fixed;
	right: 100px;
	bottom: 100px;
	width: 60px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 14px;

`