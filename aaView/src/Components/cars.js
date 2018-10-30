import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCars, sortTable } from '../actions/carActions';
import { enterNewCar } from '../actions/modalActions'
import Car from './car';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';


class Cars extends Component {

  componentDidMount() {
    this.props.getCars();
  }

  onEnterNewCar() {
    this.props.enterNewCar();
  }
  onSortTable(columName) {
    if (this.props.cars.sortColumn !== columName) {
      this.props.sortTable(columName, 'ASC');
    } else {
      if (this.props.cars.sortOrder === 'ASC') {
        this.props.sortTable(columName, 'DSC');
      } else {
        this.props.sortTable(columName, 'ASC');
      }
    }
  }

  render() {
    const { cars } = this.props.cars;
    return (
      <div className="container">
        <button type="button" onClick={() => this.onEnterNewCar()} className="btn btn-sm btn-outline-dark pull-right mb-2">Add New Car</button>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col" >Manufacturer
              <i className={
                  "ml-3 fa " + (this.props.cars.sortOrder === 'ASC' ? 'fa-sort-alpha-asc ' : 'fa-sort-alpha-desc ') +
                  (this.props.cars.sortColumn === 'manufacturer' ? 'sortAcitve ' : 'sortInActive ')
                }
                  onClick={() => this.onSortTable('manufacturer')}
                /></th>
              <th scope="col">Make
              <i className={
                  "ml-3 fa " + (this.props.cars.sortOrder === 'ASC' ? 'fa-sort-alpha-asc ' : 'fa-sort-alpha-desc ') +
                  (this.props.cars.sortColumn === 'make' ? 'sortAcitve ' : 'sortInActive ')
                }
                  onClick={() => this.onSortTable('make')}
                /></th>
              <th scope="col">Model <i className={
                "ml-3 fa " + (this.props.cars.sortOrder === 'ASC' ? 'fa-sort-alpha-asc ' : 'fa-sort-alpha-desc ') +
                (this.props.cars.sortColumn === 'model' ? 'sortAcitve ' : 'sortInActive ')
              }
                onClick={() => this.onSortTable('model')}
              /></th>
              <th scope="col">Year
              <i className={
                  " ml-3 fa " + (this.props.cars.sortOrder === 'ASC' ? 'fa-sort-numeric-asc ' : 'fa-sort-numeric-desc ') +
                  (this.props.cars.sortColumn === 'year' ? 'sortAcitve ' : 'sortInActive ')
                }
                  onClick={() => this.onSortTable('year')}
                /></th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody>
            {cars.map(car => (
              <Car key={car.carID} car={car} />
            ))}
          </tbody>
        </table>


      </div>
    );
  }
}

Cars.propTypes = {
  cars: PropTypes.object.isRequired,
  getCars: PropTypes.func.isRequired,
  enterNewCar: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
  cars: state.car
});

export default connect(mapStateToProps, { getCars, enterNewCar, sortTable })(Cars);
