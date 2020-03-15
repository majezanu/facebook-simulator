import React from 'react'
import './Input.css'
const Input = props => (
    <div className="form-group">
        <div className="container">
            <div className="row">
                <label htmlFor={props.name}>
                    {props.title}
                    &nbsp;
                </label>
            </div>
            <div className="row">
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
        </div>
    </div>
)

export default Input;