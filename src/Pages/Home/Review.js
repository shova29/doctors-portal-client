import React from "react";

const Review = ({ review }) => {
  const { name, des, img, place } = review;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p className="text-justify">{des}</p>

        <div className="flex items-center py-6">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={img} alt={img} />
            </div>
          </div>
          <div className="">
            <h2 className="card-title">{name}</h2>
            <p>{place}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
