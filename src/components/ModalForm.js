import React, {Component} from 'react';

class ModalForm extends Component {

    state = {id: '', buildingId: '', boilerId: '', technician: ''};


    // Sumbit Form
    onSubmit = (e) => {
        e.preventDefault();
        this.props.closeModal();
        this.props.addAppointment(this.state)
        this.setState({
            id: '',
            buildingId: '',
            boilerId: '',
            technician: ''
        })
    }

    // Edit inputs on change
    handleChange = e => this.setState({[e.target.name]: e.target.value});

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.appointment !== this.state) {
            this.setState(nextProps.appointment);
        }
    }

    render() {

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="number"
                    name="id"
                    placeholder="Service Number"
                    value={this.state.id}
                    onChange={this.handleChange}
                    readOnly={this.props.appointment.id!==''?"readOnly":''}
                />
                <input
                    type="number"
                    name="buildingId"
                    placeholder="Building ID"
                    value={this.state.buildingId}
                    onChange={this.handleChange}
                />
                <input
                    type="number"
                    name="boilerId"
                    placeholder="Boiler ID"
                    value={this.state.boilerId}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="technician"
                    placeholder="Technician"
                    value={this.state.technician}
                    onChange={this.handleChange}
                />
                <button>Submit</button>
            </form>
        );
    }
}

export default ModalForm;