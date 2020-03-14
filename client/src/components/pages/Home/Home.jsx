import React, {useState, useEffect } from 'react'
import Navbar from '../../organisms/Navbar/Navbar';
import PostInput from '../../molecules/PostInput/PostInput';
import Post from '../../molecules/Post/Post';
const Home = (props) => {    
    return (
        <div className="container-fluid">
            <Navbar></Navbar>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <span>Inicio</span>
                        <div className="container-fluid">
                            <PostInput></PostInput>
                            <Post></Post>
                        </div>
                    </div>
                    <div className="col">
                        <span>Chat</span>
                        <PostInput></PostInput>
                    </div>
                </div>
            </div>

            
        </div>
    )
};

export default Home