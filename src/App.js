import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import News from './pages/News/News'
import Articles from './pages/Articles/Articles'
// eslint-disable-next-line
import { getCategories, getArticleById, getArticles, getCommentsByArticleId } from './fake-api';

export default class App extends Component {
  componentWillMount()
  {
    /* getCategories().then(res => console.log(res))
    getCategories().then(res => console.log(res.data.categories)) */
  }

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
