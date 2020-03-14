import React, {useState, useEffect } from 'react';
import './Post.css';
import Icon from '@atoms/Icon/Icon';
import Button from '@atoms/Button/Button';
const Post = (props) => {
    const [post, setPost] = useState({
        autor: 'Manuel Zavala',
        time: '5 m',
        content: 'Me encanta esta vida contigo, '+
                 'no la cambiaría por nada, me haces feliz, '+
                 'te hago feliz, nos hacemos felices, compartimos '+
                 'nuestra felicidad y juntos hemos estado siendo '+
                 'mejores versiones de nosotros mismos. Te Amo. '+
                 'Y como a diario te digo, ¿Te casas conmigo otra vez?, '+
                 'porque yo sí, Grisel Díaz.',
        likes: 4,
        userHasLiked: false
    });

    return (
        <div className="card post"  style={{maxWidth: '600px'}}>
            <div className="card-body text-left post-content">
                <p>{post.content}</p>              
            </div>
            <div className="card-footer post-card-footer-text text-left">
                <div className="row">
                    <div className="col post-autor">
                        <a href="">
                            {post.autor} 
                            <br/>
                            <span className='post-timestamp'>
                                {post.time}
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