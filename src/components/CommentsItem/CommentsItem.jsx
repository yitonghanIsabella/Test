import React, { Component } from 'react'
import "./CommentsItem.css";
import {intervalTime} from '../Tools/Tools'

export default class CommentsItem extends Component {
    render() {
        if(this.props.comment.reply_infos.length!==0){
            return (
                <div>
                    <div>
                        <div className="Left">
                            <img className="head" src={this.props.comment.user_info.avatar_large} alt="es-lint want to get"/>
                        </div>
                        <div>
                            <p className="content">{this.props.comment.user_info.user_name}</p>
                            <p className="content">{this.props.comment.comment_info.comment_content}</p>
                            <div>
                            <p style={{float:'left',paddingLeft:'20px'}}>{intervalTime(this.props.comment.comment_info.ctime)}</p>
                            <div className="Right">
                                <img className="icon" src="https://i.loli.net/2021/08/02/C5QoLhZwsOJ1HvN.png" alt="es-lint want to get"/>
                                <p className="iconNumber">{this.props.comment.comment_info.digg_count}</p>
                                <img style={{width:"21px",height:"21px", verticalAlign:"middle"}} src="https://i.loli.net/2021/08/02/Cq2zpAfBVOsSK9R.png" alt="es-lint want to get"/>
                                <p className="iconNumber">{this.props.comment.comment_info.reply_count}</p>
                            </div>
                    </div>
                        </div>
                    </div>
                    
                    <div style={{paddingLeft:"80px"}}>
                    {this.props.comment.reply_infos.map((reply, id) => 
                        ( 
                            <div key={id}>
                                <div className="Left">
                                    <img className="head" src={reply.user_info.avatar_large} alt="es-lint want to get"/>
                                </div>
                                <div>
                                    <p className="content">{reply.user_info.user_name}</p>
                                    <p className="content">{reply.reply_info.reply_content}</p>
                                    <div>
                                        <p style={{float:'left',paddingLeft:'20px'}}>{intervalTime(reply.reply_info.ctime)}</p>
                                        <div className="Reply">
                                            <img className="icon" src="https://i.loli.net/2021/08/02/C5QoLhZwsOJ1HvN.png" alt="es-lint want to get"/>
                                            <p className="iconNumber">{reply.reply_info.digg_count}</p>
                                            <img style={{width:"21px",height:"21px", verticalAlign:"middle"}} src="https://i.loli.net/2021/08/02/Cq2zpAfBVOsSK9R.png" alt="es-lint want to get"/>
                                            <p className="iconNumber">回复</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                    </div>
                </div>
            )
        }
        return (
            <div>
                <div className="Left">
                    <img className="head" src={this.props.comment.user_info.avatar_large} alt="es-lint want to get"/>
                </div>
                <div>
                    <p className="content">{this.props.comment.user_info.user_name}</p>
                    <p className="content">{this.props.comment.comment_info.comment_content}</p>
                    <div>
                        <p style={{float:'left',paddingLeft:'20px'}}>{intervalTime(this.props.comment.comment_info.ctime)}</p>
                        <div className="Right">
                            <img className="icon" src="https://i.loli.net/2021/08/02/C5QoLhZwsOJ1HvN.png" alt="es-lint want to get"/>
                            <p className="iconNumber">{this.props.comment.comment_info.digg_count}</p>
                            <img style={{width:"21px",height:"21px", verticalAlign:"middle"}} src="https://i.loli.net/2021/08/02/Cq2zpAfBVOsSK9R.png" alt="es-lint want to get"/>
                            <p className="iconNumber">{this.props.comment.comment_info.reply_count}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
