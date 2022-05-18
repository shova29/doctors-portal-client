import React from "react";

const Loading = () => {
  return (
    // <div className="h-screen flex items-center justify-center space-x-2 animate-pulse delay-75 duration-1000 ease-in-out overflow-x-hidden">
    //   <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
    //   <div className="w-8 h-8 bg-green-400 rounded-full"></div>
    //   <div className="w-8 h-8 bg-black rounded-full"></div>
    // </div>
    <div className="h-screen flex items-center justify-center ">
      <div className="w-16 h-16 border-b-2 border-secondary border-gray-900 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
