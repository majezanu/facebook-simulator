import React, {Component} from 'react'
import Navbar from 'organisms/Navbar/Navbar';
import PostInput from 'molecules/PostInput/PostInput';
import Post from 'molecules/Post/Post';
import './Home.css';
import socketService from 'services/socketService';
import { EVENTS } from '../../../common/constants';
import postService from 'services/postService';

class Home extends Component {    
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        postService.list((response) => {
            this.setState({
                posts: response
            });
        }, () => {});
        socketService.socket.on(EVENTS.BROADCAST_POST, (data) => {
            this.setState(prevState => ({
                posts: [...prevState.posts, data]
            }));
        });
    }

    postInputAction = (post) => {
        post.token = localStorage.getItem('token');
        socketService.socket.emit(EVENTS.CREATE_POST, post);
    } 

    sendLikeAction = (post) => {
        console.log(post);
        post.token = localStorage.getItem('token');
        socketService.socket.emit(EVENTS.SEND_LIKE, post);
    }

    deletePostAction = (post) => {
        post.token = localStorage.getItem('token');
        socketService.socket.emit(EVENTS.DELETE_POST, post);
    }
    render () {
        return <div className="container-fluid">
            <Navbar></Navbar>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <span>Inicio</span>
                        <div className="container-fluid">
                            <PostInput publishPost={this.postInputAction}></PostInput>
                            {
                                this.state.posts.map(post => {
                                    return <Post 
                                            key={post._id} 
                                            post={post} 
                                            sendLikeAction={this.sendLikeAction}
                                            deletePostaction={this.deletePostAction}></Post>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    }
};

export default Home