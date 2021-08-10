import React, { useState, useEffect} from "react";
import { getCommentsByArticleId } from '../../fake-api';
import CommentsItem from "../CommentsItem/CommentsItem";
import "./Comments.css";

const VirtualList=(props)=>{
  const [List, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);
  const [articleId, setArticleId] = useState(0);

  useEffect(() => {
    setArticleId(props.articleId)
    // eslint-disable-next-line
  }, [props]);

  window.onscroll = () => {
    /* console.log(window.innerHeight+" "+document.documentElement.scrollTop+" "+document.documentElement.offsetHeight) */
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
  }, [articleId]);

  useEffect(() => {          
    if(List.length===0 && noData===false && page===0){
      loadList(page)
    }
    // eslint-disable-next-line
  }, [List,noData,page]);

  const loadList = (page) => {
      setLoading(true);
      getCommentsByArticleId(articleId, page, 10).then
        (res => {        
            const newPage = page + 10;
            const newList = List.concat(res.data.comments);
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
      <div className="comments">
        {List.map((comment, id) => 
          ( 
            <div
                key={id}
                className="commentsItem">
                <CommentsItem comment={comment} />
            </div>
          )
        )}
        {loading ?  <div className="text-center">loading data ...</div> : "" }
        {noData ? <div className="text-center">no data anymore ...</div> : "" }    
      </div>
    </div>
  );
}
export default VirtualList

