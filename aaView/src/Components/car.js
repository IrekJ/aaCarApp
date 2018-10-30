import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { confirmDelete, showDetail, editCar } from '../actions/modalActions';


import '../../node_modules/font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Car extends Component {
  onDeleteCar = (car) => {
    this.props.confirmDelete(car);
  }
  onShowDetail = (car) => {
    this.props.showDetail(car);
  }
  onEditCar = (car) => {
    this.props.editCar(car);
  }

  render() {
    return (
      <tr className="Car text-left">
        <td >
          <span className="clickSpan" onClick={() => this.onShowDetail(this.props.car)} >
            {this.props.car.manufacturer}
          </span>
        </td>
        <td>{this.props.car.make}</td>
        <td>{this.props.car.model}</td>
        <td>{this.props.car.year}</td>
        <td>
          <span className="clickSpan" onClick={() => this.onDeleteCar(this.props.car)} >
            <i className="fa fa-trash-o mr-4" /> </span>
          <span className="clickSpan" onClick={() => this.onEditCar(this.props.car)} >
            <i className="fa fa-pencil" /> </span></td>
      </tr>
    );
  }
}

Car.propTypes = {
  car: PropTypes.object.isRequired,
  confirmDelete: PropTypes.func.isRequired,
  showDetail: PropTypes.func.isRequired,
  editCar: PropTypes.func.isRequired
};

export default connect(null, { confirmDelete, showDetail, editCar })(Car);
