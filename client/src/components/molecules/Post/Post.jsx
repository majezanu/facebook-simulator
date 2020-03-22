import React, {Component} from 'react';
import './Post.css';
import Icon from 'atoms/Icon/Icon';
import Button from 'atoms/Button/Button';
import moment from 'moment';
import 'moment/locale/es';
import socketService from 'services/socketService';
import { EVENTS } from '../../../common/constants';

class Post  extends Component{
    constructor(props) {
        super(props);
        this.state = {
            post: props.post
        }
    }

    componentDidMount() {
        socketService.socket.on(EVENTS.POST_UPDATED, (data) => {
            if(data._id === this.state.post._id){
                this.setState({post:data});
            }

        });
    }

    sendLike = (e) => {
        e.preventDefault();
        this.props.sendLikeAction(this.state.post);
        //setPost({userHasLiked: false});
    }

    deletePost = (e) => {
        e.preventDefault();
        this.props.deletePostaction(this.state.post);
    }

    renderPost = () => {
        return <div className="card post"  style={{maxWidth: '600px'}}>
        <div className="card-body text-left post-content">
            <p>{this.state.post.content}</p>              
        </div>
        <div className="card-footer post-card-footer-text text-left">
            <div className="row">
                <div className="col post-autor">
                    <a href="">
                        {this.state.post.user.name} 
                        <br/>
                        <span className='post-timestamp'>
                            {moment(this.state.post.createdAt).locale('es').calendar()}
                        </span> 
                    </a>
                </div>
                <div className="col text-right">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Button style='btn post-like-btn' action={this.deletePost}>
                                    <Icon icon='trash' type='fas'></Icon>
                                </Button>
                                <Button style='btn post-like-btn' action={this.sendLike}>
                                    <Icon icon='heart' type={this.state.post.userHasLiked ? 'fas' : 'far'}></Icon>
                                </Button>
                                {this.state.post.likes.length}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    }
    render () {
        return <React.Fragment>
            {
                this.state.post.active ?
                this.renderPost() : null
            }
            </React.Fragment>
        
    }
};

export default Post;