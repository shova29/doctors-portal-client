import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
// import useAppointment from "../../hooks/useAppointment";
import AvailableAppointment from "./AvailableAppointment";
import BookingAppointment from "./BookingAppointment";

const AvailableAppointments = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "PP");

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then(
      (response) => response.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

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
        {services?.map((service) => (
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
          refetch={refetch}
        ></BookingAppointment>
      )}
    </div>
  );
};

export default AvailableAppointments;
