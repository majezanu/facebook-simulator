import React from 'react'

const Image = (props) => (
    <img src={
        props.image ? props.image : 'http://clipart-library.com/images/8TzK6xzpc.png'} 
        alt={props.alt ? props.alt : 'NotFound'}
        className={props.style}/>
);

export default Image