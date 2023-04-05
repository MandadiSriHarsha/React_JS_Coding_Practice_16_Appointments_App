import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {data, makeAppointmentImportant} = props
  const {id, title, date, isStarred} = data
  const date2 = new Date(date)
  const starImage = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  const formattedDate = format(new Date(date2), 'dd MMMM yyyy, EEEE')
  const addAppointment = () => {
    makeAppointmentImportant(id)
  }
  return (
    <li className="created-appointment">
      <div className="created-appointment-title-card">
        <p className="created-appointment-title-card-heading">{title}</p>
        <button
          type="button"
          className="star-button"
          onClick={addAppointment}
          data-testid="star"
        >
          <img
            src={starImage}
            alt="star"
            className="created-appointment-title-card-image"
          />{' '}
        </button>
      </div>
      <div className="created-appointment-description-card">
        <p className="created-appointment-description-card-text">
          Date: {formattedDate}
        </p>
      </div>
    </li>
  )
}

export default AppointmentItem
