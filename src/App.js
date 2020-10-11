import React, { Fragment, useState, useEffect } from "react";
import Appointment from "./components/Appointment";
import Form from "./components/Form";
import Social from "./components/Social";

function App() {
  let initialState = JSON.parse(localStorage.getItem("appointments"));
  if (!initialState) {
    initialState = [];
  }

  const [appointments, updateAppointments] = useState(initialState);

  useEffect(() => {
    let initialState = JSON.parse(localStorage.getItem("appointments"));
    if (initialState) {
      localStorage.setItem("appointments", JSON.stringify(appointments));
    } else {
      localStorage.setItem("appointments", JSON.stringify([]));
    }
  }, [appointments]);

  const createAppt = (appt) => {
    updateAppointments([...appointments, appt]);
  };

  const removeAppt = (id) => {
    const newAppointment = appointments.filter(
      (appointment) => appointment.id !== id
    );
    updateAppointments(newAppointment);
  };

  const title = appointments.length === 0 ? "No Appointments" : "Appointments";
  const year = new Date().getFullYear();

  return (
    <Fragment>
      <div className="container">
        <h1>Customer Management</h1>
        <div className="row">
          <div className="one-half column">
            <Form createAppt={createAppt} />
          </div>
          <div className="one-half column">
            <h3>{title}</h3>
            {appointments.map((appointment) => (
              <Appointment
                key={appointment.id}
                appointment={appointment}
                removeAppt={removeAppt}
              />
            ))}
          </div>
        </div>
        <Social />
        <p className="rights">All rights reserved &copy; {year}</p>
      </div>
    </Fragment>
  );
}

export default App;
