import React from "react";

const AuthContainer = (props) => {
  return (
    <div className="flex flex-col relative justify-center mx-auto min-h-screen w-[90%] md:w-[400px] sm:w-[500px]">
      {props.children}
    </div>
  );
};

export default AuthContainer;
