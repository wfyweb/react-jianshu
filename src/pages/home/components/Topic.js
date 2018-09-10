import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
    TopicWrapp,
    TopicItem,
    TopicItemMore,
} from '../style'
class Topic extends Component {
    render() {
        const { list } = this.props
        return (
            <TopicWrapp>
                {
                    list.map((item)=>{
                        return(
                            <TopicItem key={item.get('id')}>
                                <img className="topic-name-img" alt="" src={item.get('imgUrl')} />   
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }
                
                <TopicItemMore>
                    更多热门专题
                    <i className="iconfont">&#xe658;</i>
                </TopicItemMore>
                
            </TopicWrapp>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        list:state.getIn(['home','topicList'])
    }
}
export default connect(mapStateToProps,null)(Topic)