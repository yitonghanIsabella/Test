import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import News from './pages/News/News'
import Articles from './pages/Articles/Articles'

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/news" component={News}/>
          <Route path="/articles" component={Articles}/>          
          <Redirect to="/news"/>
        </Switch>
			</div>      
    )
  }
}
