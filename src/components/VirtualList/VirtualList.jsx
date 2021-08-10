import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import { getArticles } from '../../fake-api';
import NewsItem from "../NewsItem/NewsItem";
import "./VirtualList.css";

const VirtualList=(props)=>{
  const [List, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);
  const [category, setCategory] = useState(0);
  const [sort, setSort] = useState('hot');
  const [historyList,setHistoryList]=useState([])

  const click=(id)=>{
    let tempList=[]
    if( (localStorage.getItem(1)).length===1 )
      tempList=[localStorage.getItem(1)]
    else if( (localStorage.getItem(1)).length>1 ){
      tempList=localStorage.getItem(1).split( ',' )
    }
    tempList.push(id)
    setHistoryList(tempList)
  }

  useEffect(() => {
    localStorage.setItem(1,historyList)
  }, [historyList]);

  useEffect(() => {
    setCategory(props.categoryId)
    setSort(props.sortBy)
    // eslint-disable-next-line
  }, [props]);

  window.onscroll = () => {
    if (window.innerHeight + Math.round(document.documentElement.scrollTop) === document.documentElement.offsetHeight) {
      if(!noData) {
        loadList(page);
      }
    }
  }

  useEffect(() => {
    setList([])
    setNoData(false)
    setPage(0)
    // eslint-disable-next-line
  }, [category,sort]);

  useEffect(() => {          
    if(List.length===0 && noData===false && page===0){
      loadList(page)
    }
    // eslint-disable-next-line
  }, [List,noData,page]);

  const loadList = (page) => {
        setLoading(true);
        getArticles(Number(category), sort, page, 10).then
        (res => {        
            if(!res.has_more){
              setNoData(true)
              return
            }              
            const newPage = page + 10;
            const newList = List.concat(res.data.articles);
            setList(newList);
            setPage(newPage);
            
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() =>{
        setLoading(false);
        })
  }

  return (
    <div>
      <div className="container">
        {List.map((article, id) => 
          ( 
            <Link className="link" target="_blank" to={`/articles/?id=${article.article_id}`} 
            onClick={()=>click(article.article_id)} key={id}>
            <div 
                className="item">
                <NewsItem article={article} />
            </div>
            </Link>
          )
        )}
        {loading ?  <div className="text-center">loading data ...</div> : "" }
        {noData ? <div className="text-center">no data anymore ...</div> : "" }    
      </div>
    </div>
  );
}
export default VirtualList