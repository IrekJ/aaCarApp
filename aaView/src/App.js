import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import Cars from './Components/cars';
import ModalContainer from './Components/modal-container';
import { hideModal } from './actions/modalActions';


class App extends Component {
  componentWillMount() {
    this.props.hideModal();
  }
  modalContent() {
    if (!this.props.modalProps.showModal) {
      return null;
    } else {
      return <ModalContainer />
    }
  }
  render() {
    return (
      <div className="App">
        <h4>AA test app.</h4>
        <Cars />
        {this.modalContent()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  modalProps: state.modal.modalProps
});
export default connect(mapStateToProps, { hideModal })(App);
