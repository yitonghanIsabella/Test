import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import "./Articles.css";
import {getArticleById} from '../../fake-api';

class Articles extends Component {
	constructor(props) {
		super(props);
		this.state = {content: ''};
	}

	back = ()=>{
		this.props.history.goBack()
	}

	componentWillMount(){
		const {id} = this.props.location.state || {}
		getArticleById(id).then(res => 
			this.setState({
				content: res.data.article.article_content
			})
		)
	}

	render() {		
		return (
			<div>
				<button className="backButton" onClick={this.back}>返回</button>

				<div className="detailImgWrap" dangerouslySetInnerHTML={{ __html:this.state.content}}></div>

				{/* <div style={{marginTop:'50px'}} className="list">
					<VirtualList />         
				</div> */}
			</div>
		)
	}
}

export default withRouter(Articles)