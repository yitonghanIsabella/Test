import React, { Component } from 'react'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import Recommend from './Recommend/Recommend'
import Classification from './Classification/Classification'
import '../News.css';

export default class Latest extends Component {
	pushShow = (field)=>{
		this.props.history.push(`/news/latest/classification`,{field})
	}

	render() {
		return (
			<div>
				<div>
				<Switch>
					<Route path="/news/latest/recommend" component={Recommend}/>
					<Route path="/news/latest/classification" component={Classification}/>
					<Redirect to="/news/latest/recommend"/>
				</Switch>        
				</div>                

				<div className="navbox">
					<NavLink style={{paddingTop:"1.5px"}} className="navitem" activeClassName="blogNav" to="/news/latest/Recommend">推荐</NavLink>
					<NavLink className="navitem" activeClassName="blogNav" to={{pathname:'/news/latest/classification/all',state:{field:1}}}>后端</NavLink>	
					
					
					{/* <button className="navitem" onClick={()=> this.pushShow(1)}>后端</button>
					<button className="navitem" onClick={()=> this.pushShow(2)}>前端</button>
					<button className="navitem" onClick={()=> this.pushShow(3)}>Android</button>
					<button className="navitem" onClick={()=> this.pushShow(4)}>iOS</button> */}
				</div>
			</div>
		)
	}
}
