import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hideModal } from '../actions/modalActions';
import { SHOW_DETAIL, CONFIRM_DELETE, EDIT_CAR, ENTER_NEW_CAR } from '../actions/types';
import { deleteCar, updateCar, addCar } from '../actions/carActions';

import '../App.css';


class ModalContent extends Component {
    constructor(props) {
        super(props);
        console.log("modal type: ", this.props.modal.modalType);
        switch (this.props.modal.modalType) {
            case EDIT_CAR:
                this.state = { ...this.state, editCar: props.modal.editCar };
                break;
            case ENTER_NEW_CAR:
                this.state = { ...this.state, newCar: props.modal.newCar };
                break;
            default:
                break;
        };
        console.log(this.state);
    }

    onClose = () => {
        this.props.hideModal();
    }
    onConfirmDelete = (id) => {
        this.props.deleteCar(id);
        this.onClose();
    }
    onUpdateCar = () => {
        this.props.updateCar(this.state.editCar);
        this.onClose();
    }

    onAddCar = () => {
        this.props.addCar(this.state.newCar);
        this.onClose();
    }

    onEditChange = (e) => this.setState({ ...this.state, editCar: { ...this.state.editCar, [e.target.name]: e.target.value } })

    onNewChange = (e) => this.setState({ ...this.state, newCar: { ...this.state.newCar, [e.target.name]: e.target.value } })

    carDetail() {
        return (
            <div className="card">
                <div className="card-header">
                    Car Detail
                </div>
                <div className="card-body">
                    <div className="form-group row">
                        <label htmlFor="carManufacturer" className="col-sm-4 col-form-label text-right">Manufacturer:</label>
                        <div className="col-sm-8">
                            <input type="text"
                                className="form-control-plaintext"
                                id="carManufacturer"
                                value={this.props.modal.detailCar.manufacturer} readOnly />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="make" className="col-sm-4 col-form-label text-right">Make:</label>
                        <div className="col-sm-8">
                            <input type="text"
                                className="form-control-plaintext"
                                id="make"
                                value={this.props.modal.detailCar.make} readOnly />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="Model" className="col-sm-4 col-form-label text-right">Model:</label>
                        <div className="col-sm-8">
                            <input type="text"
                                className="form-control-plaintext"
                                id="model"
                                value={this.props.modal.detailCar.model} readOnly />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="year" className="col-sm-4 col-form-label text-right">Year:</label>
                        <div className="col-sm-8">
                            <input type="number"
                                className="form-control-plaintext"
                                id="year"
                                value={this.props.modal.detailCar.year} readOnly />
                        </div>
                    </div>
                    <hr />
                    <div className="pull-right">
                        <button className="btn btn-outline-primary" onClick={() => { this.onClose() }} >Close Car Detail</button>
                    </div>
                </div>
            </div>
        )
    }

    carConfirmDelete() {
        return (
            <div className="card rounded">
                <div className="card-header">
                    Confirm Record Deletion
                </div>
                <div className="card-body">
                    <div className="form-group row">
                        <label htmlFor="carManufacturer" className="col-sm-4 col-form-label text-right">Manufacturer:</label>
                        <div className="col-sm-8">
                            <input type="text"
                                className="form-control-plaintext"
                                id="carManufacturer"
                                value={this.props.modal.deleteCar.manufacturer} readOnly />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="make" className="col-sm-4 col-form-label text-right">Make:</label>
                        <div className="col-sm-8">
                            <input type="text"
                                className="form-control-plaintext"
                                id="make"
                                value={this.props.modal.deleteCar.make} readOnly />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="Model" className="col-sm-4 col-form-label text-right">Model:</label>
                        <div className="col-sm-8">
                            <input type="text"
                                className="form-control-plaintext"
                                id="model"
                                value={this.props.modal.deleteCar.model} readOnly />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="year" className="col-sm-4 col-form-label text-right">Year:</label>
                        <div className="col-sm-8">
                            <input type="number"
                                className="form-control-plaintext"
                                id="year"
                                value={this.props.modal.deleteCar.year} readOnly />
                        </div>
                    </div>
                    <hr />
                    <div className="pull-right "><button className="btn btn-outline-danger" onClick={() => { this.onClose() }} >CANCEL</button></div>
                    <div className="pull-right mr-2"><button className="btn btn-outline-primary"
                        onClick={() => { this.onConfirmDelete(this.props.modal.deleteCar.carID) }} >Delete Car Record</button></div>
                </div>
            </div>
        )
    }

    carEdit() {
        return (
            <div className="card">
                <div className="card-header">
                    Edit Car Info
                </div>
                <div className="card-body">
                    <div className="form-group row">
                        <label htmlFor="carManufacturer" className="col-sm-4 col-form-label text-right">Manufacturer:</label>
                        <div className="col-sm-8">
                            <input type="text"
                                className="form-control"
                                name="manufacturer"
                                id="carManufacturer"
                                value={this.state.editCar.manufacturer}
                                onChange={this.onEditChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="make" className="col-sm-4 col-form-label text-right">Make:</label>
                        <div className="col-sm-8">
                            <input type="text"
                                className="form-control"
                                id="make"
                                name="make"
                                value={this.state.editCar.make}
                                onChange={this.onEditChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="Model" className="col-sm-4 col-form-label text-right">Model:</label>
                        <div className="col-sm-8">
                            <input type="text"
                                className="form-control"
                                id="model"
                                name="model"
                                value={this.state.editCar.model}
                                onChange={this.onEditChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="year" className="col-sm-4 col-form-label text-right">Year:</label>
                        <div className="col-sm-8">
                            <input type="number"
                                className="form-control"
                                id="year"
                                name="year"
                                value={this.state.editCar.year}
                                onChange={this.onEditChange} />
                        </div>
                    </div>
                    <hr />
                    <div className="pull-right "><button className="btn btn-outline-danger" onClick={() => { this.onClose() }} >CANCEL</button></div>
                    <div className="pull-right mr-2"><button className="btn btn-outline-primary"
                        onClick={() => { this.onUpdateCar() }} >Save Changes</button></div>

                </div>
            </div>
        )
    }
    carNew() {
        return (
            <div className="card">
                <div className="card-header">
                    Edit Car Info
                </div>
                <div className="card-body">
                    <div className="form-group row">
                        <label htmlFor="carManufacturer" className="col-sm-4 col-form-label text-right">Manufacturer:</label>
                        <div className="col-sm-8">
                            <input type="text"
                                className="form-control"
                                name="manufacturer"
                                id="carManufacturer"
                                value={this.state.newCar.manufacturer}
                                onChange={this.onNewChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="make" className="col-sm-4 col-form-label text-right">Make:</label>
                        <div className="col-sm-8">
                            <input type="text"
                                className="form-control"
                                id="make"
                                name="make"
                                value={this.state.newCar.make}
                                onChange={this.onNewChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="Model" className="col-sm-4 col-form-label text-right">Model:</label>
                        <div className="col-sm-8">
                            <input type="text"
                                className="form-control"
                                id="model"
                                name="model"
                                value={this.state.newCar.model}
                                onChange={this.onNewChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="year" className="col-sm-4 col-form-label text-right">Year:</label>
                        <div className="col-sm-8">
                            <input type="number"
                                className="form-control"
                                id="year"
                                name="year"
                                value={this.state.newCar.year}
                                onChange={this.onNewChange} />
                        </div>
                    </div>
                    <hr />
                    <div className="pull-right "><button className="btn btn-outline-danger" onClick={() => { this.onClose() }} >CANCEL</button></div>
                    <div className="pull-right mr-2"><button className="btn btn-outline-primary"
                        onClick={() => { this.onAddCar() }} >Save New Record</button></div>

                </div>
            </div>
        )
    }

    carInvalidSelection() {
        return (
            <div className="card">
                <div className="card-header">
                    Invalid Selection
                </div>
                <div className="card-body">
                    <hr />
                    <div className="pull-right">
                        <button className="btn btn-outline-primary" onClick={() => { this.onClose() }} >Close Dialog</button>
                    </div>
                </div>
            </div>
        )
    }
    renderModal() {
        if (!this.props.modal.showModal || !this.props.modal.modalType) {
            return null;
        };
        switch (this.props.modal.modalType) {
            case SHOW_DETAIL:
                return this.carDetail();
            case CONFIRM_DELETE:
                return this.carConfirmDelete();
            case EDIT_CAR:
                return this.carEdit();
            case ENTER_NEW_CAR:
                return this.carNew();
            default:
                return this.carInvalidSelection();
        }
    }
    render() {
        return (
            <div className='aa-modal-backdrop'>
                <div className='aa-modal-content rounded border border-primary'>
                    {this.renderModal()}
                </div>
            </div>
        )
    }
}

//export default ModalContent;
const mapStateToProps = (state) => ({
    modal: state.modal.modalProps
});
ModalContent.propTypes = {
    modal: PropTypes.object.isRequired,
    hideModal: PropTypes.func.isRequired,
    deleteCar: PropTypes.func.isRequired,
    updateCar: PropTypes.func.isRequired,
    addCar: PropTypes.func.isRequired,
}
export default connect(mapStateToProps, { hideModal, deleteCar, updateCar, addCar })(ModalContent);