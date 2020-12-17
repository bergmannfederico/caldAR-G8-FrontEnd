import React, { Component } from 'react';
import AppointmentItem from "./AppointmentItem";
import PropTypes from 'prop-types';
import Modal from "./Modal";

class Appointments extends Component {

    state = { show: false ,
              showEdit: false,
                appointment: {id: '', buildingId: '', boilerId: '', technician: ''}};

    showModal = () => {
        this.setState({ show: true, appointment: {id: '', buildingId: '', boilerId: '', technician: ''}});
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    openEdit = (appointment) => {
        console.log(appointment)
        this.setState({ showEdit: true, appointment: appointment });
    };

    hideEdit = () => {
        this.setState({ showEdit: false });
    };

    render() {
        return (
            <div>
                <ul>
                    <li>Service number</li>
                    <li>Building</li>
                    <li>Boiler</li>
                    <li>Technician</li>
                    <li>Actions</li>
                </ul>
                    { this.props.appointments.map((appointment) => (
                       <AppointmentItem
                           key={appointment.id}
                           appointment={appointment}
                           deleteAppointment={this.props.deleteAppointment}
                           openEdit = {this.openEdit}
                       />
                    ))}
                <Modal
                    show={this.state.show}
                    handleClose={this.hideModal}
                    addAppointment={this.props.addAppointment}
                    appointment = {this.state.appointment}
                >
                </Modal>
                <Modal
                    show={this.state.showEdit}
                    handleClose={this.hideEdit}
                    addAppointment={this.props.editAppointment}
                    appointment = {this.state.appointment}
                >
                </Modal>
                <button type="button" onClick={this.showModal}>
                    Add Appointment
                </button>
            </div>
        );
    }
}

Appointments.propTypes = {
    appointments: PropTypes.array.isRequired
}

export default Appointments;
