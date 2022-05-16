import React from "react";
import appointmentBg from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const ContactUs = () => {
  return (
    <section
      className="mt-32 flex justify-center items-center"
      style={{
        backgroundImage: `url(${appointmentBg})`,
      }}
    >
      <div className="card flex-shrink-0 w-full max-w-sm py-6">
        <div className="card-body">
          <div className="text-center py-6">
            <h2 className="text-xl text-primary">Contact Us</h2>
            <p className="text-white text-3xl">Stay connected with us</p>
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Email Address"
              className="input w-full max-w-sm"
            />
          </div>
          <div className="form-control py-4">
            <input
              type="text"
              placeholder="Subject"
              className="input w-full max-w-sm"
            />
          </div>
          <div>
            <textarea
              className="textarea textarea-bordered  w-full max-w-sm h-24"
              placeholder="Your message"
            ></textarea>
          </div>

          <div className="form-control mt-6 w-1/2 mx-auto">
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};
{
  /* <div className="flex-1 px-6 py-6">
        <h3 className="text-xl text-primary font-fold">Appointment</h3>
        <h2 className="text-3xl text-white py-6">Make an appointment Today</h2>
        <p className="text-white pb-6 text-justify">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div> */
}

export default ContactUs;
