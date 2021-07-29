import React, { Component } from 'react'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import VirtualList from '../../../../components/VirtualList/VirtualList';
import '../../News.css';

import All from './All/All'
import Ffront from './Ffront/Ffront'
import JavaScript from './JavaScript/JavaScript'

export default class Front extends Component {
	render() {
		return (
			<div>		
					<div>	
						<div className="tagbox">				
							<NavLink className="tag" activeClassName="selectedTag" to="/news/hot/front/all">全部</NavLink>							
							<NavLink className="tag" activeClassName="selectedTag" to="/news/hot/front/ffront">前端</NavLink>
							<NavLink className="tag" activeClassName="selectedTag" to="/news/hot/front/javaScript">JavaScript</NavLink>
						</div>		

						<div style={{marginTop:'100px'}} className="list">
							<VirtualList />         
						</div>

						<Switch>
							<Route path="/news/hot/front/all" component={All}/>
							<Route path="/news/hot/front/ffront" component={Ffront}/>
							<Route path="/news/hot/front/javaScript" component={JavaScript}/>
							<Redirect to="/news/hot/front/all"/>
						</Switch>
					</div>
				</div>
		)
	}
}
