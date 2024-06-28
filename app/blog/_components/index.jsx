"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";
const MainContent = () => {
  return (
    <div className="flex flex-col relative w-full gap-4">
      {/* {loading && <Loader />} */}
      <div className="w-full flex flex-col gap-8">
        {/* single posts */}
        <div className="w-full flex items-center justify-center bg-[#fff] py-12">
          <div className="w-[90%] md:w-[700px] max-w-custom_1 flex flex-col items-start gap-4 justify-center mx-auto">
            <div className="flex w-full flex-col gap-8">
              <h4 className="text-4xl md:text-5xl font-bold">
                Create your Blog
                <span className="block font-normal text-base pt-3 text-grey">
                  Write appealing and amazing content here!
                </span>
              </h4>
              <form className="w-full flex flex-col gap-4">
                <label
                  htmlFor="title"
                  className="text-base flex flex-col gap-2 font-semibold"
                >
                  Title
                  <input type="text" className="input" />
                </label>
                <label
                  htmlFor="username"
                  className="text-base flex flex-col gap-2 font-semibold"
                >
                  Description
                  <textarea type="text" className="textarea h-[200px] outline-none" />
                </label>
                <div className="flex pt-4">
                  <button className="btn py-3 px-8 rounded-xl text-white text-lg">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
