import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import {getArticleById} from '../../../fake-api';
import NewsItem from "../../../components/NewsItem/NewsItem";
import "../../../components/VirtualList/VirtualList.css";

const History=(props)=>{
  const [List, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);

  /* localStorage.clear(); */  

  useEffect(() => {
    let tempList=[]
    if(localStorage.getItem(1)){
      if((localStorage.getItem(1)).length===1)
        tempList=[localStorage.getItem(1)]
      else if( (localStorage.getItem(1)).length>1 ){
        tempList=localStorage.getItem(1).split( ',' )
      }
    }

    let data=[]
    if(localStorage.getItem(2)){
      if((localStorage.getItem(2)).length===1)
        data=[localStorage.getItem(2)]
      else if( (localStorage.getItem(2)).length>1 ){
        data=localStorage.getItem(2).split( ',' )
      }
    }

    for(var i=0;i<tempList.length;i++){
      // eslint-disable-next-line
      let repeat=data.findIndex(d => d === tempList[i])
      if(repeat!==-1)
        data.splice(repeat,1)
      data.unshift(tempList[i])
    }

    localStorage.setItem(2,data)

    if(data.length!==0){
      setNoData(false);
      setPage(0);
      setList([])
    }
    else{
      setNoData(true);
    }
    // eslint-disable-next-line
  }, [localStorage.getItem(1)]);

  useEffect(() => {
    if(page===0 && noData===false && List.length===0){
      loadList(page);
    }
    // eslint-disable-next-line
  }, [List,page,noData])

  window.onscroll = () => {
    if (window.innerHeight + Math.ceil(document.documentElement.scrollTop) === document.documentElement.offsetHeight) {
      if(!noData) {
        loadList(page);
      }
    }
  }

  const loadList = (page) => {
      setLoading(true);
      let tempList=[...List]

      let data=[]
      if((localStorage.getItem(2)).length===1)
        data=[localStorage.getItem(2)]
      else if( (localStorage.getItem(2)).length>1 ){
        data=localStorage.getItem(2).split( ',' )
      }
      
      for(var i=page;i<page+10;i++)
      {
        if(i>(data.length-1)){
          break;
        }
        getArticleById(data[i]).then(res => {
          tempList.push(res.data.article)
          let temp=[...tempList]
          setList(temp) 
        })
      }   
      setLoading(false);
      const newPage = page + i;
      setPage(newPage);
      if(i!==page+10)
        setNoData(true)
      else{
        if(data.length===10)
          setNoData(true)
      }
  }

  return (
    <div>
      <div className="container">
        {List.map((article, id) => 
          ( 
			      <Link className="link" target="_blank" to={`/articles/?id=${article.article_id}`} key={id}>
            <div 
                className="item">
                <NewsItem article={article} />
            </div>
			      </Link>
          )
        )}
        {loading ?  <div>loading data ...</div> : "" }
        {noData ? <div>no data anymore ...</div> : "" }    
      </div>
    </div>
  );
}
export default History
