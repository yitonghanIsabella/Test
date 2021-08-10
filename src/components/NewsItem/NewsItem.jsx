import React, { Component } from 'react'
import "./NewsItem.css";
import {intervalTime} from '../Tools/Tools'

export default class NewsItem extends Component {
    render() {
        if(this.props.article.article_info.cover_image.length!==0){
            return (
                <div>
                    <p>{this.props.article.author_user_info.user_name}&nbsp;&nbsp;|&nbsp;&nbsp;{intervalTime(this.props.article.article_info.ctime)}</p>
                    <div className="left">
                        <p style={{fontSize:"23px"}}><b>{this.props.article.article_info.title}</b></p>
                        <p className="content">{this.props.article.article_info.brief_content}</p>
                        <img className="icon" src="https://i.loli.net/2021/07/24/iwgGQ4usND256lt.png" alt="es-lint want to get"/>
                        <p className="iconNumber">{this.props.article.article_info.view_count}</p>
                        <img className="icon" src="https://i.loli.net/2021/08/02/C5QoLhZwsOJ1HvN.png" alt="es-lint want to get"/>
                        <p className="iconNumber">{this.props.article.article_info.digg_count}</p>
                        <img style={{width:"21px",height:"21px", verticalAlign:"middle"}} src="https://i.loli.net/2021/08/02/Cq2zpAfBVOsSK9R.png" alt="es-lint want to get"/>
                        <p className="iconNumber">{this.props.article.article_info.comment_count}</p>
                    </div>
                    <div className="right">
                        <img className="img" src={this.props.article.article_info.cover_image} alt="es-lint want to get"/>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <p>{this.props.article.author_user_info.user_name}&nbsp;&nbsp;|&nbsp;&nbsp;{intervalTime(this.props.article.article_info.ctime)}</p>
                <div >
                    <p style={{fontSize:"23px"}}><b>{this.props.article.article_info.title}</b></p>
                    <p className="content">{this.props.article.article_info.brief_content}</p>
                    <img className="icon" src="https://i.loli.net/2021/07/24/iwgGQ4usND256lt.png" alt="es-lint want to get"/>
                    <p className="iconNumber">{this.props.article.article_info.view_count}</p>
                    <img className="icon" src="https://i.loli.net/2021/08/02/C5QoLhZwsOJ1HvN.png" alt="es-lint want to get"/>
                    <p className="iconNumber">{this.props.article.article_info.digg_count}</p>
                    <img style={{width:"21px",height:"21px", verticalAlign:"middle"}} src="https://i.loli.net/2021/08/02/Cq2zpAfBVOsSK9R.png" alt="es-lint want to get"/>
                    <p className="iconNumber">{this.props.article.article_info.comment_count}</p>
                </div>
            </div>
        )
    }
}
