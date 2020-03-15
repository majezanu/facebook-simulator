import React, {useState } from 'react';

import Image from 'atoms/Image/Image';
import Input from 'atoms/Input/Input';
import Button from 'atoms/Button/Button';
import './Navbar.css';

const Navbar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    }
    return (
        <nav className="navbar navbar-expand-md fixed-top bg-light justify-content-between">
            <span className="navbar-brand text-dark">
                <h3>
                    <Image style={`navbar-logo`}/> Facebook Open
                </h3>
            </span>
            
            <form className="form-inline">
                    {
                    props.searchAction ?
                    <React.Fragment>
                        <Input 
                            style={`form-control mr-sm-2`}
                            name="search" 
                            type="search"
                            value={searchTerm}
                            placeholder="Buscar..."
                            handleChange={handleInputChange}
                            />
                        <Button 
                            style={`btn btn-outline-success my-2 my-sm-0 search-button`}
                            type='submit'
                            action={e => props.searchAction(e, searchTerm)}>Buscar</Button>
                        <Image style={`moviedb-logo`}/>
                    </React.Fragment>
                    :
                    <Button 
                            style={`btn btn-outline-success my-2 my-sm-0 search-button`}
                            type='submit'
                            action={e => props.openPageAction(e)}>Home</Button>
                    }
                </form>

        
        </nav>
    );
};

export default Navbar;