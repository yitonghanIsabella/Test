import React, { Component } from 'react'
import VirtualList from '../../../components/VirtualList/VirtualList';
import '../News.css';

export default class History extends Component {
	render() {
		return (
			<div style={{marginTop:'60px'}} className="list">
				<VirtualList />         
			</div>
		)
	}
}
