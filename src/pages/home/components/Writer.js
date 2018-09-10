import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import {
	WriterWrapper,
	WriterTitle,
	WriterList,
	WriterListInfo,
	Avatar,
	Follow,
	WriterDesc,
	WriterListAll
} from '../style';

class Writer extends PureComponent {

	render() {
		return (
			<WriterWrapper>
				<WriterTitle>
					<span>推荐作者</span>
					<a><i className="iconfont">&#xe690;</i>换一批</a>
				</WriterTitle>
				<WriterList>
					{
						this.props.list.map((item)=>{
							return(
								<WriterListInfo key={item.get('id')}>
									<Avatar imgUrl={item.get('avatar_source')}></Avatar>
									<Follow><i className="iconfont add">&#xe624;</i>关注</Follow>
									<WriterDesc>
										<div className="title">{item.get('nickname')}</div>
										<p>写了{item.get('total_wordage')}字 · {item.get('total_likes_count')}喜欢</p>
									</WriterDesc>
								</WriterListInfo>
							)
						})
					}
					
				</WriterList>
				<WriterListAll>查看全部<i className="iconfont">&#xe658;</i></WriterListAll>
			</WriterWrapper>
		)
	}
}


const mapStateToProps = (state) =>{
    return {
        list:state.getIn(['home','wirterList'])
    }
}
export default connect(mapStateToProps,null)(Writer)