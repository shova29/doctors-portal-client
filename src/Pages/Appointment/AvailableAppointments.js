import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import useAppointment from "../../hooks/useAppointment";
import AvailableAppointment from "./AvailableAppointment";
import BookingAppointment from "./BookingAppointment";

const AvailableAppointments = ({ date }) => {
  const [services, setSerivces] = useAppointment();
  const [treatment, setTreatment] = useState(null);
  return (
    <div>
      <h4 className="text-xl text-secondary text-center">
        {" "}
        Available Appointments on {format(date, "PP")}
      </h4>
      <h5 className="text-2xl text-gray-400 text-center">
        Please select a appointment.
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <AvailableAppointment
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></AvailableAppointment>
        ))}
      </div>
      {treatment && (
        <BookingAppointment
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingAppointment>
      )}
    </div>
  );
};

export default AvailableAppointments;
