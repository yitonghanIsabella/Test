import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import React, {useState, useEffect} from "react";
import Recommend from './Recommend/Recommend'
import Classification from './Classification/Classification'
import '../News.css';
import qs from 'querystring'

const FieldData = [
	{id:1,title:'后端'},
	{id:2,title:'前端'},
	{id:3,title:'Android'},
	{id:4,title:'iOS'}
]

const Now=(props)=> {
		const {search} = props.location
      	const {time} = qs.parse(search.slice(1))
		const [tag,setTag]=useState(["rgb(25, 122, 233)","grey","grey","grey","grey"])

		const click=(id)=>{
			for(var i=0;i<5;i++){
			  tag[i]="grey";
			}
			tag[id]="rgb(25, 122, 233)";
			setTag(tag);
		  }

		useEffect(() => {
			setTag(["rgb(25, 122, 233)","grey","grey","grey","grey"]);
		}, [time])

		return (
			<div>
				<div>
				<Switch>
					<Route path="/news/now/recommend" component={Recommend}/>
					<Route path="/news/now/classification" component={Classification}/>
					<Redirect to="/news/now/recommend/?time=hot"/>
				</Switch>        
				</div>                

				<div className="navbox">	
				<NavLink onClick={()=>click(0)} style={{color:tag[0]}} className="navitem" to={`/news/now/recommend/?time=${time}`}>推荐</NavLink>																	
				{					
					FieldData.map((field)=>{		
						return (							
							<NavLink onClick={()=>click(field.id)} style={{color:tag[field.id]}} key={field.id} className="navitem" to={`/news/now/classification/?time=${time}&field=${field.id}`}>{field.title}</NavLink>								
						)
					})
				}									
				</div>
			</div>
		)
}
export default Now
