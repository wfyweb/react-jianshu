import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {
    ListItem,
    ListInfo,
    ListMeta,
    MetaA,
    LoadMore
} from '../style'
import { actionCreator } from '../store'
class List extends Component {
    render() {
        const { list, page, handleMore } =  this.props
        return (
            <div> 
                {
                   list.map((item,index)=>{
                        return(
                            <Link to={'/detail/'+item.get('id')} key={index}>
                                <ListItem key={index} >
                                    <img className="pic" alt="" src={item.get('imgUrl')} />
                                    <ListInfo>
                                        <h3>{item.get('title')}</h3>
                                        <div className="desc">
                                            {item.get('desc')}
                                        </div>
                                        <ListMeta>
                                            <MetaA >{item.get('meta')}</MetaA>
                                            <span><i className="iconfont meta-comments">&#xe659;</i> {item.get('comments')}</span>
                                            <span><i className="iconfont meta-like">&#xe703;</i> {item.get('like')}</span>
                                        </ListMeta>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={()=>{handleMore(page)}}>加载更多</LoadMore>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    list:state.getIn(['home','articleList']),
    page:state.getIn(['home','articlePage']),
})

const mapDispathToProps = (dispath) =>{
    return {
        handleMore (page) {
           dispath( actionCreator.changeMoreData(page))
        }
    }
}

export default connect(mapStateToProps,mapDispathToProps)(List) 