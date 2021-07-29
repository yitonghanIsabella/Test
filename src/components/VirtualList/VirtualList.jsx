import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./VirtualList.css";
import NewsItem from "../NewsItem/NewsItem";
import { getArticles } from '../../fake-api';

const Test = (props) => {
  /* console.log(props.categoryId); */
  const itemHeight = 200; //子item高度
  const [dataSource, setDataSource] = useState([]);
  const [dataSlice, setDataSlice] = useState([]); //数据切片
  const [scrollDis, setScrollDis] = useState(0);
  const [maxScrollDis, setMaxScrollDis] = useState(0);
  /* const [flag,setFlag]=useState(true); */
  const [offset,setOffset]=useState(0);
  const [hasMore,setHasMore]=useState();
  const [total,setTotal]=useState();

  const refContainer = useRef();
  const refVirtualContainer = useRef();

  let history = useHistory();
  const click=(id)=>{
    history.push(`/articles`,{id})
  }

  useEffect(
    () => {
      getArticles(props.categoryId, props.sortBy, offset, 10).then(res => {                      
      
        setDataSource(dataSource.concat(res.data.articles));

        /* setDataSource(res.data.articles); */
        setHasMore(res.has_more);
        setTotal(res.total);
      })
    // eslint-disable-next-line  
    }, [offset]
  )

  useEffect(
    () => {
      //设置虚拟容器高度
      const containerHeight = itemHeight * total;
      /* console.log(containerHeight); */
      refVirtualContainer.current.style.height = containerHeight + "px";
      //设置可视区域数据
      let refContainerHeight = refContainer.current.clientHeight;

      if(dataSource.length === 10) {
        const num = Math.ceil(refContainerHeight / itemHeight);
        setDataSlice(dataSource.slice(0, num));
      }
      /* console.log(maxScrollDis); */
      refContainer.current.addEventListener("scroll", (e) => {    
        /* if(flag)
        {
          setFlag(false);

          if(e.target.scrollTop>maxScrollDis){
            if(hasMore){
              setOffset(offset+10);
            }
            setMaxScrollDis(e.target.scrollTop);
          }
          setData(e.target.scrollTop, refContainerHeight, containerHeight);

          const timer = setTimeout(()=>{setFlag(true)
            clearInterval(timer);
          }, 200);
          
        }    */
        
        if(e.target.scrollTop>maxScrollDis){
          if(hasMore){
            setOffset(offset+10);
          }
          setMaxScrollDis(e.target.scrollTop);
        }
        setData(e.target.scrollTop, refContainerHeight, containerHeight);

      });
    // eslint-disable-next-line
    }, [dataSource,hasMore,total]
  )

  const setData = (scrollTop, refContainerHeight, containerHeight) => {
    /* console.log("scrollTop:"+scrollTop+"  containerHeight:"+containerHeight+"  total:"+total); */
    const beginNum = Math.ceil((scrollTop / containerHeight) * total);
    const domNum = Math.ceil(refContainerHeight / itemHeight);
    /* console.log(beginNum); */
    setDataSlice(dataSource.slice(beginNum, domNum *3 + beginNum));
    setScrollDis(scrollTop);
  };

  return (
    <div>
      <div ref={refContainer} className="container">
        <div className="virtual-container" ref={refVirtualContainer}>
          <div
            className="virtual"
            style={{ transform: `translateY(${scrollDis}px)` }}
          >
            {dataSlice.map((article,id) => ( 
              <div onClick={()=>click(article.article_id)}
                key={id}
                className="item"
              >
                <NewsItem article={article} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Test;