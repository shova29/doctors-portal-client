import { format } from "date-fns";
import React, { useEffect, useState } from "react";

const useAppointment = () => {
  const [services, setSerivces] = useState([]);
  // const [date, setDate] = useState(new Date());
  // const formattedDate = format(date, "PP");
  useEffect(() => {
    fetch(`http://localhost:5000/service`)
      .then((response) => response.json())
      .then((data) => setSerivces(data));
  }, []);
  return [services, setSerivces];
};

export default useAppointment;
