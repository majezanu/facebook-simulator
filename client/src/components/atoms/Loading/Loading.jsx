import React from 'react';

const Loading = (props) => {    
    return (
        <div className={`spinner-grow ${props.style ? props.tyle : 'text-primary'}`} role="status">
            <span class="sr-only">Loading...</span>
        </div>
    )
};

export default Loading;