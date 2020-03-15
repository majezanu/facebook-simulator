import React, {Component} from 'react'
import './Textarea.css'

class Textarea extends Component {
    constructor(props) {
        super(props);
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.value !== this.refs.content.innerHTML;;
    }

    componentDidUpdate() {
        if ( this.props.value !== this.refs.content.innerHTML ) {
            this.refs.content.innerHTML = this.props.value;
        }
        
    }
    emitChange =() => {
        var html = this.refs.content.innerHTML;
        if (this.props.handleChange && html !== this.lastHtml) {
            this.props.handleChange({target: {
                id: this.props.name,
                value: html
            }});
        }
        this.lastHtml = html;
        
    }
    render ( ) {
        return <div className="form-group">
            <div contentEditable='true' 
                ref='content'
                className={this.props.style ? this.props.style : 'form-control'}
                id={this.props.name}
                name={this.props.name}
                placeholder={this.props.placeholder}
                onInput={this.emitChange}
                value={this.props.value}
            />
        </div>
    }
};

export default Textarea;