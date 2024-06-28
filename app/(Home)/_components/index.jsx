"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import { ThreeDots } from "react-loader-spinner";
import { BiChevronRight } from "react-icons/bi";
import toast from "react-hot-toast";
import Loader from "@/components/loader";
import { allPosts } from "../../../.contentlayer/generated/index.mjs";
const CommentData = [
  {
    id: 4565483929237,
    shortDescription:
      " Discover the benefits of sustainable gardening and tips to get started.",
    author: "Jane Smith",
    createdAt: "April 15, 2023",
  },
  {
    id: 44547484984,
    shortDescription:
      "From sustainable materials to energy-efficient upgrades, we&apos;ve got you covered.",
    author: "Michael Johnson",
    createdAt: "March 28, 2023",
  },
  {
    id: 4745644647884,
    shortDescription:
      "Your choices when it comes to your wardrobe. Reduce waste and support ethical brands.",
    author: "Sarah Lee",
    createdAt: "February 10, 2023",
  },
];
const MainContent = () => {
  // console.log(allPosts);

  return (
    <div className="flex flex-col relative w-full gap-4">
      {/* {loading && <Loader />} */}
      <div className="w-full flex flex-col gap-8">
        <div className="w-full z-20 flex items-center justify-center bg-[#F3F4F6] py-24">
          <div className="w-[90%] lg:w-[700px] max-w-custom_1 flex flex-col items-start gap-4 justify-center mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold">
              Subscribe to our Newsletter
              <span className="block font-normal text-lg text-grey">
                Get the latest updates and news form Envitab Blog
              </span>
            </h3>
            <form
              action=""
              className="w-full flex lg:flex-row flex-col justify-center items-center gap-4"
            >
              <input type="text" className="input text-lg w-full" />
              <button className="btn w-full lg:w-fit py-3 rounded-[10px] px-6 text-lg font-bold text-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        {/* subscription section */}
        {/* <div className="w-full flex items-center justify-center bg-[#fff] py-12">
          <div className="w-[90%] lg:w-[700px] max-w-custom_1 flex flex-col items-start gap-4 justify-center mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold">
              Your Account
              <span className="block font-normal text-lg text-grey">
                Manage your subscription details.
              </span>
            </h3>
            <form
              action=""
              className="w-full border rounded-[10px] p-8 flex gap-4"
            >
              <h4 className="text-2xl font-bold">Subscription Details</h4>
            </form>
          </div>
        </div> */}
        {/* single post */}
        <div className="w-full flex items-center justify-center bg-[#fff] py-12">
          <div className="w-[90%] max-w-custom_1 flex flex-col items-start gap-4 justify-center mx-auto">
            <div className="w-full flex flex-col lg:flex-row lg:items-center gap-8">
              <div className="w-full">
                <img
                  src="https://generated.vusercontent.net/placeholder.svg"
                  alt=""
                  className="object-cover h-[200px] lg:h-[430px] w-full"
                />
              </div>
              <div className="flex w-full flex-col gap-6">
                <h5 className="text-lg text-[#3B82F6] flex items-center gap-2 font-bold">
                  Latest Post
                </h5>
                <h3 className="text-3xl lg:text-5xl font-bold">
                  Sustainable Living: Tips for a Greener Lifestyle
                </h3>
                <h5 className="text-lg flex items-center gap-4 font-semibold">
                  <span>by John Doe </span>
                  <span>May 1, 2023</span>
                </h5>
                <p className="text-lg font-semibold">
                  In this blog post, we&apos;ll explore practical ways to
                  incorporate sustainable practices into your daily life, from
                  reducing waste to adopting eco-friendly habits. Join us on
                  this journey towards a more sustainable future.
                </p>
                {/* 8BC9F6 */}
                <Link
                  href={`/blog/${allPosts[0]?.url_path}`}
                  className="text-lg text-[#3B82F6] flex items-center gap-2 font-bold"
                >
                  Read More <BiChevronRight fontSize={"20px"} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* posts */}
        <div className="w-full flex items-center justify-center bg-[#fff] py-12">
          <div className="w-[90%] max-w-custom_1 grid lg:grid-cols-3 gap-8 justify-center mx-auto">
            {/* <Post/> */}
            {allPosts?.map((blog, index) => {
              return (
                <Link
                  href={`/blog/${blog?.url_path}`}
                  key={index}
                  className="w-full border overflow-hidden rounded-[10px] flex flex-col gap-4"
                >
                  <div className="w-full">
                    <img
                      src="https://generated.vusercontent.net/placeholder.svg"
                      alt=""
                      className="object-cover h-[200px] md:h-[250px] w-full"
                    />
                  </div>
                  <div className="flex p-4 md:p-8 w-full flex-col gap-6">
                    <h3 className="text-2xl font-bold">{blog?.title}</h3>
                    <h5 className="text-sm md:text-base flex items-center gap-3 md:gap-4 font-semibold">
                      <span>by {blog?.author} </span>
                      <span>
                        {moment(blog?.createdAt).format("DD MMM YYYY")}
                      </span>
                    </h5>
                    <p className="text-base font-semibold">
                      {blog?.shortDescription}
                    </p>
                    {/* 8BC9F6 */}
                    <h5 className="text-base text-[#3B82F6] flex items-center gap-2 font-bold">
                      Read More <BiChevronRight fontSize={"20px"} />
                    </h5>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* single posts */}
        <div className="w-full flex items-center justify-center bg-[#fff] py-12">
          <div className="w-[90%] max-w-custom_1 flex flex-col items-start gap-4 justify-center mx-auto">
            <div className="w-full flex flex-col border overflow-hidden rounded-[10px] gap-8">
              <div className="w-full">
                <img
                  src="https://generated.vusercontent.net/placeholder.svg"
                  alt=""
                  className="object-cover h-[430px] w-full"
                />
              </div>
              <div className="flex w-full p-4 md:p-8 flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <h3 className="text-3xl lg:text-5xl font-bold">
                    {allPosts[0]?.title}
                  </h3>
                  <h5 className="text-lg flex items-center gap-4 font-semibold">
                    <span>by {allPosts[0]?.author}</span>
                    <span> {moment(allPosts[0]?.createdAt).format('DD MMM YYYY')}</span>
                  </h5>
                  <p className="text-lg font-semibold">
                           {allPosts[0]?.shortdescription}
                  </p>
                </div>
                {/* 8BC9F6
                <h5 className="text-lg text-[#3B82F6] flex items-center gap-2 font-bold">
                  Read More <BiChevronRight fontSize={"20px"} />
                </h5> */}
                <div className="w-full flex flex-col gap-4">
                  <div className="flex w-full flex-col gap-4">
                    <h4 className="text-2xl font-bold">
                      Reduce, Reuse, Recycle
                    </h4>
                    <h5 className="text-lg font-semibold">
                      One of the most important aspects of sustainable living is
                      reducing waste. This can be achieved by adopting simple
                      habits like using reusable bags, avoiding single-use
                      plastics, and properly recycling items. By making
                      conscious choices to reduce our environmental impact, we
                      can make a significant difference.
                    </h5>
                  </div>
                  <div className="flex w-full flex-col gap-4">
                    <h4 className="text-2xl font-bold">Energy Efficiency</h4>
                    <h5 className="text-lg font-semibold">
                      Another key component of sustainable living is improving
                      energy efficiency in our homes. This can include upgrading
                      to energy-efficient appliances, installing solar panels,
                      and implementing smart home technology to optimize energy
                      usage. By reducing our energy consumption, we can lower
                      our carbon footprint and save money on utility bills.
                    </h5>
                  </div>
                  <div className="flex w-full flex-col gap-4">
                    <h4 className="text-2xl font-bold">
                      Sustainable Transportation
                    </h4>
                    <h5 className="text-lg font-semibold">
                      Choosing sustainable transportation options, such as
                      walking, cycling, or using public transit, can also have a
                      significant impact on the environment. If driving is
                      necessary, consider opting for an electric or hybrid
                      vehicle to reduce your carbon emissions.
                    </h5>
                  </div>
                </div>

                {/* comment section */}
                <div className="w-full flex pt-4 flex-col gap-8">
                  {/* single posts */}
                  <div className="flex w-full flex-col gap-4">
                    <h4 className="text-2xl font-bold">Leave a Comment</h4>
                    <form className="w-full lg:w-[400px] flex flex-col gap-4">
                      <label
                        htmlFor="name"
                        className="text-lg flex flex-col gap-4 font-semibold"
                      >
                        Name
                        <input type="text" className="input" />
                      </label>
                      <label
                        htmlFor="email"
                        className="text-lg flex flex-col gap-4 font-semibold"
                      >
                        Email
                        <input type="text" className="input" />
                      </label>
                      <label
                        htmlFor="comment"
                        className="text-lg flex flex-col gap-4 font-semibold"
                      >
                        Comment
                        <textarea
                          type="text"
                          className="textarea h-[130px] outline-none"
                        />
                      </label>

                      <div className="flex pt-4">
                        <button className="btn py-3 px-8 rounded-xl text-white text-lg">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* comment lisiting */}
                  <div className="flex w-full py-8 flex-col gap-4">
                    <h4 className="text-4xl font-bold">Comments</h4>
                    <div className="w-full lg:w-[600px] flex flex-col gap-4">
                      {CommentData?.map((data, index) => {
                        return (
                          <div key={index} className="w-full flex items-center gap-4">
                            <img
                              src="https://generated.vusercontent.net/placeholder.svg"
                              alt=""
                              className="object-cover h-[60px] w-[60px] rounded-full"
                            />
                            <h4 className="text-lg font-bold">
                              {data?.author}
                              <span className="block text-sm text-grey font-normal">
                                {data?.shortDescription}
                              </span>
                            </h4>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
