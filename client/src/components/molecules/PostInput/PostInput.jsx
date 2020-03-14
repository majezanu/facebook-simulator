import React, {useState, useEffect } from 'react';
import Textarea from '../../atoms/Textarea/Textarea';
import Button from '../../atoms/Button/Button';
import './PostInput.css';
const PostInput = (props) => {
    const [post, setPost] = useState({
        content: ''
    });

    return (
        <div className="card post-input"  style={{maxWidth: '600px'}}>
            <div className="post-input-card-header post-input-card-header-text">
                Crear publicación
            </div>
            <div className="card-body">
                <Textarea 
                    style='post-input-textarea'
                    name='post-content' 
                    placeholder='¿Qué estás pensando?'/>
                <hr/>
                <Button>Publicar</Button>
                
            </div>
        </div>
    )
};

export default PostInput;