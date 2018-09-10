import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    RecommendWrapper,
    RecommendItem,
    Download,
    DownloadInfo
} from '../style'

class Recommend extends Component {
    render() {
        return (
            <RecommendWrapper>
                {
                    this.props.list.map((item)=>{
                        return(
                            <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommendItem>
                        )
                    })
                }
                <Download>
                    <img className="qrcode" alt="" src="/img/qrcode.png" />
                    <DownloadInfo>
                        <div className="title">下载简书手机App<i className="iconfont">&#xe658;</i></div>
                        <div className="description">随时随地发现和创作内容</div>
                    </DownloadInfo>    
                </Download>  

            </RecommendWrapper>
        )
    }
}

const mapState = (state) => ({
	list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recommend);
