import React from "react";
import { ThreeDots } from "react-loader-spinner";
const Loader = ({type}) => {
  if(type === 'dots') {
    return (
      <ThreeDots
        height="20"
        width="20"
        radius="10"
        color={"#fff"}
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    );
  }
  return (
    <div
      className="flex items-center top-0 left-0 z-[10000000] justify-center"
      style={{
        width: "100vw",
        position: "fixed",
        height: "100vh",
        background: "#ffffffc3",
      }}
    >
      <ThreeDots
        height="70"
        width="70"
        radius="10"
        color={"#000"}
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
