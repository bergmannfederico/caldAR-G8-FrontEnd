import React, { Component } from 'react';
import './App.css';
import Appointments from "./components/Appointments";
import data from './data/appointments.json'
import Header from "./components/layout/Header";

class App extends Component {

  state = data;

  // Delete Appointment
  deleteAppointment = (id) => {
      console.log(id);
      this.setState( { appointments:
          [
              ...this.state.appointments.filter(appointment =>appointment.id !== id)
          ]});
  }

  // Add Appointment
  addAppointment = (appointment) => {
      console.log(appointment);

      let exists = false;
      this.state.appointments.forEach(oldApp => {
          if (oldApp.id === appointment.id) {
              exists = true;
          }
      });
      if(!exists) {
          this.setState({appointments: [...this.state.appointments, appointment]});
      }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Appointments
            appointments={this.state.appointments}
            deleteAppointment={this.deleteAppointment}
            addAppointment={this.addAppointment}
        />
      </div>
    );
  }
}

export default App;
