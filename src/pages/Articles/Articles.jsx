import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import "./Articles.css";
import {getArticleById} from '../../fake-api';
import Comments from '../../components/Comments/Comments';
import qs from 'querystring'

class Articles extends Component {
	constructor(props) {
		super(props);
		this.state = {content: ''};
	}

	componentWillMount(){
		const {search} = this.props.location
      	const {id} = qs.parse(search.slice(1))
		getArticleById(id).then(res => 
			this.setState({
				content: res.data.article.article_content
			})
		)
	}

	render() {		
		const {id} = this.props.location.state || {}
		return (
			<div>
				<div className="detailImgWrap" dangerouslySetInnerHTML={{ __html:this.state.content}}></div>

				<div>
					<Comments articleId={id}/>         
				</div>
			</div>
		)
	}
}
export default withRouter(Articles)