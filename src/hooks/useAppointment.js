import React, { useEffect, useState } from "react";

export default (useAppointment) => {
  const [services, setSerivces] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((response) => response.json())
      .then((data) => setSerivces(data));
  }, []);
  return [services, setSerivces];
};
