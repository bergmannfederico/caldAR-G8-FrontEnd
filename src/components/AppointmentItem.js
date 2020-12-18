import React, { Component } from "react";
import PropTypes from "prop-types";

class AppointmentItem extends Component {
  render() {
    const { id, buildingId, boilerId, technician } = this.props.appointment;
    return (
      <ul>
        <li>{id}</li>
        <li>{buildingId}</li>
        <li>{boilerId}</li>
        <li>{technician}</li>
        <li>
          <button
            onClick={this.props.openEdit.bind(
              this,
              { id, buildingId, boilerId, technician },
              "edit"
            )}
          >
            Edit
          </button>
          <button onClick={this.props.deleteAppointment.bind(this, id)}>
            Delete
          </button>
        </li>
      </ul>
    );
  }
}

AppointmentItem.propTypes = {
  appointment: PropTypes.object.isRequired,
};

export default AppointmentItem;
