import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Front from './Front/Front' 
import Recommend from './Recommend/Recommend' 
import Back from './Back/Back'

export default class All extends Component {
	render() {
		return (
			<div>
				<Switch>
				<Route path="/news/hot/recommend" component={Recommend}/>
				<Route path="/news/hot/back" component={Back}/>
				<Route path="/news/hot/front" component={Front}/>   
				<Redirect to="/news/hot/recommend"/>                 
				</Switch>        
			</div>
		)
	}
}
