import React, { Component } from "react";
import AppointmentItem from "./AppointmentItem";
import PropTypes from "prop-types";
import Modal from "./Modal";

class Appointments extends Component {
  state = {
    show: false,
    appointment: { id: "", buildingId: "", boilerId: "", technician: "" },
  };

  showModal = (appointment, action) => {
    this.setState({ action: action, show: true, appointment: appointment });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  addEditAppointment = (appointment) => {
    if (this.state.action === "edit") {
      this.props.editAppointment(appointment);
    } else {
      this.props.addAppointment(appointment);
    }
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
        {this.props.appointments.map((appointment) => (
          <AppointmentItem
            key={appointment.id}
            appointment={appointment}
            deleteAppointment={this.props.deleteAppointment}
            openEdit={this.showModal}
          />
        ))}
        <Modal
          show={this.state.show}
          handleClose={this.hideModal}
          addAppointment={this.addEditAppointment}
          appointment={this.state.appointment}
        />
        <button
          type="button"
          onClick={() => {
            this.setState({
              action: "add",
              show: true,
              appointment: {
                id: "",
                buildingId: "",
                boilerId: "",
                technician: "",
              },
            });
            //console.log(appointment)
          }}
        >
          Add Appointment
        </button>
      </div>
    );
  }
}

Appointments.propTypes = {
  appointments: PropTypes.array.isRequired,
};

export default Appointments;
