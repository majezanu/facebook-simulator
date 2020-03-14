import React from 'react'

const Title = (props) => (
    <h1 className={props.title}>
        {
            props.children ? props.children : 'Title'
        }
    </h1>
);

export default Title