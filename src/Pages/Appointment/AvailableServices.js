import { format } from "date-fns";
import React from "react";
import useAppointment from "../../hooks/useAppointment";
import AvailableService from "./AvailableService";

const AvailableServices = ({ date }) => {
  const [services, setSerivces] = useAppointment();
  return (
    <div>
      <h4 className="text-xl text-secondary text-center">
        {" "}
        Available Services on {format(date, "PP")}
      </h4>
      <h5 className="text-2xl text-gray-400 text-center">
        Please select a service.
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <AvailableService
            key={service._id}
            service={service}
          ></AvailableService>
        ))}
      </div>
    </div>
  );
};

export default AvailableServices;
