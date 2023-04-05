import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {appointmentsList: [], title: '', date: ''}

  onSubmitData = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  addTitleInput = event => {
    this.setState({title: event.target.value})
  }

  addDateInput = event => {
    console.log(event.target.value)
    this.setState({date: event.target.value})
  }

  makeAppointmentImportant = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachitem => {
        if (id === eachitem.id) {
          return {...eachitem, isStarred: true}
        }
        return {eachitem}
      }),
    }))
  }

  displayStarredItemsOnly = () => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.filter(
        eachitem => eachitem.isStarred === true,
      ),
    }))
  }

  render() {
    const {appointmentsList, title, date} = this.state
    return (
      <div className="appointments-app-bg-container">
        <form className="appointments-app-form" onSubmit={this.onSubmitData}>
          <div className="card-1">
            <div className="add-appointment-card">
              <h1 className="add-appointment-card-heading">Add Appointment</h1>
              <label htmlFor="titleBox" className="title">
                TITLE
              </label>
              <br />
              <input
                type="text"
                id="titleBox"
                className="text-box"
                placeholder="Title"
                onChange={this.addTitleInput}
                value={title}
              />
              <br />
              <label htmlFor="dateBox" className="date">
                DATE
              </label>
              <br />
              <input
                type="date"
                id="dateBox"
                className="date-box"
                onChange={this.addDateInput}
                value={date}
              />
              <br />
              <button type="submit" className="add-button">
                Add
              </button>
            </div>
            <div className="add-appointment-image-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="add-appointment-image-card-image"
              />
            </div>
            <hr />
          </div>
          <div className="card-2">
            <div className="card-2-title-card">
              <h1 className="card-2-title-card-heading">Appointments</h1>
              <button
                type="button"
                className="card-2-title-card-button"
                onClick={this.displayStarredItemsOnly}
              >
                Starred
              </button>
            </div>
            <ul className="appointments-list-card">
              {appointmentsList.map(eachitem => (
                <AppointmentItem
                  key={eachitem.id}
                  data={eachitem}
                  makeAppointmentImportant={this.makeAppointmentImportant}
                />
              ))}
            </ul>
          </div>
        </form>
      </div>
    )
  }
}

export default Appointments
