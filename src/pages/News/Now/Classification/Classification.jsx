import React, { useState ,useEffect } from "react";
import '../../News.css';
import qs from 'querystring'
import VirtualList from '../../../../components/VirtualList/VirtualList';

const	messageArr=[
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
]

function getTitle(field){
  for(var i=0;i<12;i++)
  {
    if(messageArr[i].id === field)
      return messageArr[i].title;
  }
}

 const Classification = (props)=> {
      const {search} = props.location
      const {time,field} = qs.parse(search.slice(1))
      const [category, setCategory] = useState(field);
      const [color,setColor]=useState(["white","grey","grey","grey"])
      const [background,setBackground]=useState(["rgb(25, 122, 233)","white","white","white"])

      const handleClick=(tag,field,e)=>{
        setCategory(field);
        for(var i=0;i<4;i++){
          color[i]="grey";
          background[i]="white";
        }
        color[tag]="white";
        background[tag]="rgb(25, 122, 233)";
        setColor(color);
        setBackground(background);
      }

      useEffect(() => {
        setColor(["white","grey","grey","grey"])
        setBackground(["rgb(25, 122, 233)","white","white","white"])
      }, [time,field])

      useEffect(
        () => {
          setCategory(field)
        }, [field]
      )

      return (
          <div>				
              <div className="tagbox">
                  <button style={{color:color[0],backgroundColor:background[0]}} className="tag" onClick={(e) => handleClick(0,field, e)}>全部</button>
                  <button style={{color:color[1],backgroundColor:background[1]}} className="tag" onClick={(e) => handleClick(1,field*10+1, e)}>{getTitle(field*10+1)}</button>
                  <button style={{color:color[2],backgroundColor:background[2]}} className="tag" onClick={(e) => handleClick(2,field*10+2, e)}>{getTitle(field*10+2)}</button>
                  <button style={{color:color[3],backgroundColor:background[3]}} className="tag" onClick={(e) => handleClick(3,field*10+3, e)}>{getTitle(field*10+3)}</button>	                                                                     
              </div>	         
  
              <div style={{marginTop:'100px'}}>
                <VirtualList categoryId={category} sortBy= {time}/>         
              </div>
          </div>
      )
    
}
export default Classification