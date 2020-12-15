import React, { Component } from 'react';
import AppointmentItem from "./AppointmentItem";
import PropTypes from 'prop-types';
import Modal from "./Modal";

class Appointments extends Component {

    state = { show: false };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
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
                       />
                    ))}
                <Modal show={this.state.show} handleClose={this.hideModal} addAppointment={this.props.addAppointment}>
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
