import React, { Component } from 'react'
import {Route,Switch,NavLink,Redirect} from 'react-router-dom'
import '../../News.css';
import Type from './Type/Type'
import All from './All/All'

export default class Classification extends Component {

  state = {
		messageArr:[
			{id:11,title:'Java'},
			{id:12,title:'Python'},
			{id:13,title:'Go'},
      {id:21,title:'JavaScript'},
			{id:22,title:'Vue'},
			{id:23,title:'React'},
      {id:31,title:'Flutter'},
			{id:32,title:'Java'},
			{id:33,title:'Kotlin'},
      {id:41,title:'Swift'},
			{id:42,title:'Objective-C'},
			{id:43,title:'Flutter'}
		],
    firstField:0,
    field:0,
	}

  /* componentDidMount(){
    this.setState({
      field:this.props.location.state
    });
  } */

  push = (field,typ)=>{
		this.props.history.push(`/news/latest/classification/type`,{field,typ})
	}

	render() {
    const {field} = this.props.location.state || {}
    console.log("field:"+field);
    /* if(field){
      this.setState({
        firstField:field
      });
    } */
    /* const {messageArr} = this.state */
		return (
				<div>				
						<div className="tagbox">	
                <NavLink className="tag" activeClassName="selectedTag" to={{pathname:'/news/latest/classification/all',state:{fld:field}}}>全部</NavLink>	
                <NavLink className="tag" activeClassName="selectedTag" to={{pathname:'/news/latest/classification/type',state:{fld:field,typ:1}}}>分类1</NavLink>	
                <NavLink className="tag" activeClassName="selectedTag" to={{pathname:'/news/latest/classification/type',state:{fld:field,typ:2}}}>分类2</NavLink>	
                <NavLink className="tag" activeClassName="selectedTag" to={{pathname:'/news/latest/classification/type',state:{fld:field,typ:3}}}>分类3</NavLink>	
                {/* <button className="tag" onClick={()=> this.push(field,1)}>分类1</button>
                <button className="tag" onClick={()=> this.push(field,2)}>分类2</button>
                <button className="tag" onClick={()=> this.push(field,3)}>分类3</button> */}
                {/* {
                  // eslint-disable-next-line
                    messageArr.map((msgObj)=>{                      
                      if(((msgObj.id-msgObj.id%10)/10) === field){
                          return (
                          <button key={msgObj.id} className="tag" onClick={()=> this.push(field,msgObj.id%10)}>{msgObj.title}</button>
                        )
                      }
                    })
                } */}
						</div>	

            <div>
						<Switch>
							<Route path="/news/latest/classification/type" component={Type}/>
              <Route path="/news/latest/classification/all" component={All}/>
              <Redirect to="/news/latest/classification/all"/>
						</Switch>
            </div>
				</div>
			)
	}
}
