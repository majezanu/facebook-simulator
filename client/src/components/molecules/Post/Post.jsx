import React, {useState, useEffect } from 'react';
import './Post.css';
import Icon from 'atoms/Icon/Icon';
import Button from 'atoms/Button/Button';
import moment from 'moment';
import 'moment/locale/es';
const Post = (props) => {
    const [post, setPost] = useState(props.post);
    return (
        <div className="card post"  style={{maxWidth: '600px'}}>
            <div className="card-body text-left post-content">
                <p>{post.content}</p>              
            </div>
            <div className="card-footer post-card-footer-text text-left">
                <div className="row">
                    <div className="col post-autor">
                        <a href="">
                            {post.user.name} 
                            <br/>
                            <span className='post-timestamp'>
                                {moment(post.createdAt).locale('es').calendar()}
                            </span> 
                        </a>
                    </div>
                    <div className="col text-right">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <Button style='btn post-like-btn'>
                                        <Icon icon='heart' type={post.userHasLiked ? 'fas' : 'far'}></Icon>
                                    </Button>
                                    {post.likes}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Post;