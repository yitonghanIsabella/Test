import React, { Component } from 'react'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import Hot from './Hot/Hot'
import Latest from './Latest/Latest'
import History from './History/History'
import "./News.css";

export default class News extends Component {
  render() {
    return (
    <div>
        <div>
        <Switch>
          <Route path="/news/hot" component={Hot}/>
          <Route path="/news/latest" component={Latest}/>
          <Route path="/news/history" component={History}/>
          <Redirect to="/news/hot"/>
        </Switch>        
        </div>                

        <div className="footer">
          <NavLink className="navitem" activeClassName="blogNav" to="/news/hot">热门</NavLink>
          <NavLink className="navitem" activeClassName="blogNav" to="/news/latest">最新</NavLink>
          <NavLink className="navitem" activeClassName="blogNav" to="/news/history">历史</NavLink>
        </div>
                    
	</div>      
    )
  }
}
