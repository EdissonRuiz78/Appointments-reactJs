import React, { Fragment, useState } from "react";
import uuid from "uuid/dist/v4";
import PropTypes from "prop-types";

const Form = ({ createAppt }) => {
  const [appt, updateAppt] = useState({
    pet: "",
    owner: "",
    date: "",
    time: "",
    symptons: "",
  });
  const [error, updateError] = useState(false);

  const handleOnChange = (event) => {
    updateAppt({
      ...appt,
      [event.target.name]: event.target.value,
    });
  };

  const { pet, owner, date, time, symptons } = appt;

  const submitAppt = (event) => {
    event.preventDefault();

    if (
      pet.trim() === "" ||
      owner.trim() === "" ||
      date.trim() === "" ||
      time.trim() === "" ||
      symptons.trim() === ""
    ) {
      updateError(true);
      return;
    }
    updateError(false);

    appt.id = uuid();
    createAppt(appt);

    updateAppt({
      pet: "",
      owner: "",
      date: "",
      time: "",
      symptons: "",
    });
  };

  return (
    <Fragment>
      <h3>New Appointment</h3>
      {error ? (
        <p className="alert-error">All the fields are required</p>
      ) : null}
      <form onSubmit={submitAppt}>
        <label>Pet name</label>
        <input
          className="u-full-width"
          type="text"
          name="pet"
          placeholder="Pet name"
          onChange={handleOnChange}
          value={pet}
        />
        <label>Pet owner</label>
        <input
          className="u-full-width"
          type="text"
          name="owner"
          placeholder="Pet owner"
          onChange={handleOnChange}
          value={owner}
        />
        <label>Date</label>
        <input
          className="u-full-width"
          type="date"
          name="date"
          onChange={handleOnChange}
          value={date}
        />
        <label>Time</label>
        <input
          className="u-full-width"
          type="time"
          name="time"
          onChange={handleOnChange}
          value={time}
        />
        <label>Symptoms</label>
        <textarea
          className="u-full-width"
          name="symptons"
          onChange={handleOnChange}
          value={symptons}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Create Appointment
        </button>
      </form>
    </Fragment>
  );
};

Form.propTypes = {
  createAppt: PropTypes.func.isRequired,
};

export default Form;
