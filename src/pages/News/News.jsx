import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import React, {useState} from "react";
import Now from './Now/Now'
import History from './History/History'
import "./News.css";

  const News = ()=> {
    const [nav,setNav]=useState(["rgb(25, 122, 233)","grey","grey"])

    const click=(id)=>{
      for(var i=0;i<3;i++){
        nav[i]="grey";
      }
      nav[id]="rgb(25, 122, 233)";
      setNav(nav);
    }

    return (
    <div>
        <div>
        <Switch>
          <Route path="/news/now" component={Now}/>
          <Route path="/news/history" component={History}/>
          <Redirect to="/news/now"/>
        </Switch>        
        </div>                

        <div className="footer">
          <NavLink onClick={()=>click(0)} style={{color:nav[0]}} className="navitem" to={'/news/now/recommend/?time=hot'}>热门</NavLink>
          <NavLink onClick={()=>click(1)} style={{color:nav[1]}} className="navitem" to={'/news/now/recommend/?time=new'}>最新</NavLink>
          <NavLink onClick={()=>click(2)} style={{color:nav[2]}} className="navitem" to="/news/history">历史</NavLink>
        </div>        
	  </div>      
    )
}
export default News
