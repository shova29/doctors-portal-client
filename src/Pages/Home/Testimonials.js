import React from "react";
import quote from "../../assets/icons/quote.svg";
import patient1 from "../../assets/images/people1.png";
import patient2 from "../../assets/images/people2.png";
import patient3 from "../../assets/images/people3.png";
import Review from "./Review";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      img: patient1,
      des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      place: "California",
    },
    {
      _id: 2,
      name: "Winson Herry",
      img: patient2,
      des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      place: "California",
    },
    {
      _id: 3,
      name: "Winson Herry",
      img: patient3,
      des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      place: "California",
    },
  ];
  return (
    <section className="my-28">
      <div className="flex justify-between">
        <div className="">
          <h2 className="text-xl text-primary font-bold">Testimonials</h2>
          <h4 className="text-4xl">What Our Patients Says</h4>
        </div>
        <div className="">
          <img src={quote} className="w-24 lg:w-48" alt={quote} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
