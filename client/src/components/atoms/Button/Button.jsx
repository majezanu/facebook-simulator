import React from 'react';
import Icon from '../Icon/Icon';

const Button = (props) => (
    <button 
        className={
            props.style ? 
            props.style : 
            'btn btn-outline-primary'} 
            onClick={props.action}
            type={props.type}>
    <   Icon icon={props.icon}></Icon>
    {props.children}    
    </button>
);

export default Button;