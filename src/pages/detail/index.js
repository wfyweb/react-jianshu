import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { actionCreator } from './store' 
import { connect } from 'react-redux'
import { 
    DetailWrapper,
    Header,
    Content
} from './style'
class Detail extends Component {
    
    render() {
        console.log(this.props)
        return(
            <DetailWrapper>
                <Header>{ this.props.title }</Header>
                <Content dangerouslySetInnerHTML={{__html:this.props.content}}  />
            </DetailWrapper>
        )
    }
    componentDidMount () {
        this.props.getDetailData(this.props.match.params.id)
    }
}



const mapStateToProps = (state) => ({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
})

const mapDispatchToProps = (dispatch) =>{
    return {
        getDetailData (id){
            dispatch(actionCreator.getDetail(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail))