import React from 'react'

const Text = (props) => (
    <React.Fragment>
        {
            props.children ?
            <p className={props.style}>
                {props.children}
            </p>
            :
            <p className={props.style}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique veritatis cupiditate ratione voluptate nesciunt earum iusto distinctio quod nihil aspernatur beatae dolore sapiente quis rerum modi, iste exercitationem culpa vitae!
            </p>
        }
    </React.Fragment>
);

export default Text