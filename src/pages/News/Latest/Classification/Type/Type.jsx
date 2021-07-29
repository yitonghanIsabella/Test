import React, { Component } from 'react'
import VirtualList from '../../../../../components/VirtualList/VirtualList';

export default class Type extends Component {
	render() {
        const {fld,typ} = this.props.location.state || {}
        console.log(fld+" "+typ)
		return (
			<div style={{marginTop:'100px'}}>
				<VirtualList categoryId={fld*10+typ} sortBy= 'new'/>         
			</div>
		)
	}
}
