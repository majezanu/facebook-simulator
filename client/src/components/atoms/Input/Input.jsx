import React from 'react'
import './Input.css'
const Input = props => (
    <div className="form-group">
        <label htmlFor={props.name}>
            {props.title}
            &nbsp;
        </label>
        <input 
            className={props.style ? props.style : 'form-control'}
            id={props.name}
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.handleChange}
            value={props.value}
        />
    </div>
)

export default Input;