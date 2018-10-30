import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import { connect } from 'react-redux';
import ModalContent from './modalContent';


class ModalContainer extends Component {
    constructor(props) {
        super(props)
        this.container = document.createElement('div');
        document.body.appendChild(this.container)
    }

    // Cleanup 
    componentWillUnmount() {
        document.body.removeChild(this.container);
    }
    render() {
        return ReactDOM.createPortal(
            <ModalContent />, this.container
        )
    }
}

export default connect(null, null)(ModalContainer);
