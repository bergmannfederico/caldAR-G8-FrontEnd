import React, { Component } from "react";
import "./App.css";
import Appointments from "./components/Appointments";
import data from "./data/appointments.json";
import Header from "./components/layout/Header";

class App extends Component {
  state = data;

  // Delete Appointment
  deleteAppointment = (id) => {
    console.log(id);
    this.setState({
      appointments: [
        ...this.state.appointments.filter(
          (appointment) => appointment.id !== id
        ),
      ],
    });
  };

  // Add Appointment
  addAppointment = (appointment) => {
    console.log(appointment);

    let exists = false;
    this.state.appointments.forEach((oldApp) => {
      if (oldApp.id === appointment.id) {
        exists = true;
      }
    });
    if (!exists) {
      this.setState({
        appointments: [...this.state.appointments, appointment],
      });
    }
  };

  // Edit Appointment
  editAppointment = (appointment) => {
    console.log(appointment);

    this.setState({
      appointments: this.state.appointments.map((oldApp) => {
        if (oldApp.id === appointment.id) {
          return appointment;
        }
        return oldApp;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Appointments
          appointments={this.state.appointments}
          deleteAppointment={this.deleteAppointment}
          addAppointment={this.addAppointment}
          editAppointment={this.editAppointment}
        />
      </div>
    );
  }
}

export default App;
