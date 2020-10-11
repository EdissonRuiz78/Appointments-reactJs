import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Appointment = ({ appointment, removeAppt }) => {
  const { pet, owner, date, time, symptons } = appointment;

  return (
    <Fragment>
      <div className="appointment">
        <p>
          Pet: <span>{pet}</span>
        </p>
        <p>
          Owner: <span>{owner}</span>
        </p>
        <p>
          Date: <span>{date}</span>
        </p>
        <p>
          Time: <span>{time}</span>
        </p>
        <p>
          Symptons: <span>{symptons}</span>
        </p>
        <button
          onClick={() => removeAppt(appointment.id)}
          className="button remove u-full-width"
        >
          Remove &times;
        </button>
      </div>
    </Fragment>
  );
};

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
  removeAppt: PropTypes.func.isRequired,
};

export default Appointment;
