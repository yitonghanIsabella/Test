import React, { Component } from 'react'
import VirtualList from '../../../../components/VirtualList/VirtualList';
import '../../News.css';
import qs from 'querystring'

export default class Recommend extends Component {
	render() {
		const {search} = this.props.location
      	const {time} = qs.parse(search.slice(1))

		return (
			<div style={{marginTop:'60px'}}>
				<VirtualList categoryId={0} sortBy= {time}/>         
			</div>
		)
	}
}
