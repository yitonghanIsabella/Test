import React, { Component } from 'react'
import "./NewsItem.css";

export default class NewsItem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.article.author_user_info.user_name}</p>
                <div className="left">
                    <p style={{fontSize:"23px"}}><b>{this.props.article.article_info.title}</b></p>
                    <p className="content">{this.props.article.article_info.brief_content}</p>
                    {/* <img className="icon" src="https://i.loli.net/2021/07/24/iwgGQ4usND256lt.png" alt="es-lint want to get"/> */}
                </div>
                <div className="right">
                    <img src={this.props.article.article_info.cover_image} alt="es-lint want to get"/>
                </div>
            </div>
        )
    }
}
