import React, { Component } from 'react'
import VirtualList from '../../../../components/VirtualList/VirtualList';
import '../../News.css';

export default class Recommend extends Component {
	render() {
		return (
			<div style={{marginTop:'60px'}} className="list">
				<VirtualList categoryId={0} sortBy= 'hot'/>         
			</div>
		)
	}
}
