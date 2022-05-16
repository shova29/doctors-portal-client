import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import DentalCare from "./DentalCare";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="px-12">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <DentalCare></DentalCare>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;