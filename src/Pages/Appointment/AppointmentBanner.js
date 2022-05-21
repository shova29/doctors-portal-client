import React from "react";
import chair from "../../assets/images/chair.png";
import bannerBg from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid currentColor;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: blue;
    color: blue;
  }
  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color: #19D3AE;
  }
`;

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bannerBg})`,
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Dental Chair"
        />
        <div>
          <style>{css}</style>
          <DayPicker
            mode="single"
            required
            selected={date}
            onSelect={setDate}
            modifiersClassNames={{
              selected: "my-selected",
              today: "my-today",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
