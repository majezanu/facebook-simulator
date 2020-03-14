import React from 'react'
import './Textarea.css'
const Textarea = props => (
    <div className="form-group">
        <div contentEditable='true' 
            className={props.style ? props.style : 'form-control'}
            id={props.name}
            name={props.name}
            placeholder={props.placeholder}
            onChange={props.handleChange}
            value={props.value}
        />
    </div>
)

export default Textarea;