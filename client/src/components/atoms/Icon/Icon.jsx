import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Icon.css';
const Icon = (props) => (
    <React.Fragment>
        {
            props.icon && <FontAwesomeIcon
                className={props.style ? props.style : 'icon'}
                icon={[props.type, props.icon]} />
        }
    </React.Fragment>
    
)
export default Icon;