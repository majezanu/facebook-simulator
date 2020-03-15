import React, {useState, useEffect } from 'react';
import Textarea from 'atoms/Textarea/Textarea';
import Button from 'atoms/Button/Button';
import './PostInput.css';
const PostInput = (props) => {
    const [post, setPost] = useState({
        content: ''
    });

    const setData = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setPost(prevState => {
            return {...prevState, [key]: value}
        });
    }
    const publishPost = (e) => {
        e.preventDefault();
        props.publishPost(post);
        setPost({content: ''});
    }

    return (
        <div className="card post-input"  style={{maxWidth: '600px'}}>
            <div className="post-input-card-header post-input-card-header-text">
                Crear publicación
            </div>
            <div className="card-body">
                <Textarea 
                    id='content'
                    name='content'
                    style='post-input-textarea'
                    placeholder='¿Qué estás pensando?'
                    handleChange={setData}
                    value={post.content}/>
                <hr/>
                <Button action={publishPost}>Publicar</Button>
                
            </div>
        </div>
    )
};

export default PostInput;