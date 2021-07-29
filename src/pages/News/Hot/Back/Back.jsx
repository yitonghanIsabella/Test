import React, { Component } from 'react'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import VirtualList from '../../../../components/VirtualList/VirtualList';
import '../../News.css';


import All from './All/All'
import Bback from './Bback/Bback'
import Java from './Java/Java'


export default class Back extends Component {
	render() {
		return (
				<div>		
					<div>	
						<div className="tagbox">				
							<NavLink className="tag" activeClassName="selectedTag" to="/news/hot/back/all">全部</NavLink>							
							<NavLink className="tag" activeClassName="selectedTag" to="/news/hot/back/bback">后端</NavLink>
							<NavLink className="tag" activeClassName="selectedTag" to="/news/hot/back/java">Java</NavLink>
						</div>	

						<div style={{marginTop:'100px'}} className="list">
							<VirtualList />         
						</div>

						<Switch>
							<Route path="/news/hot/back/all" component={All}/>
							<Route path="/news/hot/back/bback" component={Bback}/>
							<Route path="/news/hot/back/java" component={Java}/>
							<Redirect to="/news/hot/back/all"/>
						</Switch>
					</div>
				</div>
			)
	}
}
