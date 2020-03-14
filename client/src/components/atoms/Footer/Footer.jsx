import React from 'react'

const Footer = (props) => {
    return (
        <footer className="page-footer font-small teal pt-4 fixed-bottom">
            {
                props.children ? props.children : 
                <div className="footer-copyright text-center py-3">© 2020 Copyright: Manuel Zavala     </div>
            }
            
        </footer>
    );
}

export default Footer