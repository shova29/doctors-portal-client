import React from "react";
import care from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const DentalCare = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={care} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="px-12">
          <h1 className="text-5xl font-bold">
            Exceptional Dental
            <span> Care, on Your Terms</span>
          </h1>
          <p className="py-6 text-justify">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
