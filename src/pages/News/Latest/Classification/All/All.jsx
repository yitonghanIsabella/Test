import React, { Component } from 'react'
import VirtualList from '../../../../../components/VirtualList/VirtualList';

export default class Type extends Component {
	render() {
        const {fld} = this.props.location.state || {}
		return (
			<div style={{marginTop:'100px'}}>
				<VirtualList categoryId={fld} sortBy= 'new'/>         
			</div>
		)
	}
}
