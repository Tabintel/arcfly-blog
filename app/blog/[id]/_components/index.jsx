"use client";
import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import toast from "react-hot-toast";
import { allPosts } from "@/.contentlayer/generated/index.mjs";
import Loader from "@/components/loader";

const MainContent = ({ blogid }) => {
  // console.log(decodeURIComponent(blogid));
  const blog = allPosts?.find(
    (blog) => blog._raw.flattenedPath === decodeURIComponent(blogid)
  );
  const [body, setBody] = useState("");
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [commentisloading, setCommentIsLoading] = useState(false);
  // console.log(blog);
  const handleCreateComment = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/comment", {
        body: body,
        postId: decodeURIComponent(blogid),
      });
      setBody("");
      setLoading(false);
      toast.success("Comment successfully created");
      // setComment(data);
      setComment([data, ...comment]);
    } catch (error) {
      setBody("");
      setLoading(false);
      toast.error(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };
  const path = `/api/comment?query=${decodeURIComponent(blogid)}`;
  // console.log(comment)

  useEffect(() => {
    const getAllComment = async () => {
      setCommentIsLoading(true);
      try {
        const { data } = await axios.get(`${path}`);
        setBody("");
        setCommentIsLoading(false);
        setComment(data);
      } catch (error) {
        toast.error(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        );
      }
    };
    getAllComment();
  }, [setComment, setCommentIsLoading]);
  return (
    <div className="flex flex-col relative w-full gap-4">
      {commentisloading && <Loader />}
      {/* {loading && <Loader />} */}
      <div className="w-full flex flex-col gap-8">
        {/* single posts */}
        <div className="w-full flex items-center justify-center bg-[#fff] py-12">
          <div className="w-[90%] md:w-[70%] max-w-custom_1 flex flex-col items-start gap-4 justify-center mx-auto">
            <div className="w-full flex flex-col gap-8">
              <div className="w-full">
                <img
                  src="https://generated.vusercontent.net/placeholder.svg"
                  alt=""
                  className="object-cover h-[300px] md:h-[430px] w-full"
                />
              </div>
              <div className="flex w-full py-8 flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl md:text-4xl font-bold">
                    {blog?.title}
                  </h3>
                  <h5 className="text-lg flex items-center gap-4 font-semibold">
                    <span>by {blog?.author} </span>
                    <span>{moment(blog?.createdAt).format("DD MMM YYYY")}</span>
                  </h5>
                  <p className="text-lg font-semibold">
                    {blog?.shortDescription}
                  </p>
                </div>
                {/* <div className="w-full flex flex-col gap-4">
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
                </div> */}

                {/* comment section */}
                <div className="w-full flex flex-col gap-4">
                  <div className="w-full flex p-8 bg-[#fafafa] flex-col gap-8">
                    {/* single posts */}
                    <div className="flex w-full flex-col gap-4">
                      <h4 className="text-4xl font-bold">Comments</h4>
                    </div>
                    <div className="w-full">
                      {comment?.length === 0 ? (
                        <span className="block text-xl text-[#000]">
                          No Comments
                        </span>
                      ) : (
                        <div className="w-full lg flex flex-col gap-4">
                          {comment?.map((data, index) => {
                            return (
                              <div
                                key={index}
                                className="w-full flex items-center gap-4"
                              >
                                <img
                                  src={data?.userimage}
                                  alt=""
                                  className="object-cover h-[60px] w-[60px] rounded-full"
                                />
                                <div className="flex-1 flex items-center gap-4">
                                  <h4 className="w-full text-lg font-bold">
                                    <span className="flex items-center gap-4">
                                      {" "}
                                      {data?.username}
                                      <span className="text-xs font-bold font-booking_font">
                                        {moment(data?.createdAt).format(
                                          "DD MMM YYYY"
                                        )}
                                      </span>
                                    </span>
                                    <span className="block text-sm md:text-base text-grey font-normal">
                                      {data?.body}
                                    </span>
                                  </h4>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    <div className="flex w-full flex-col gap-4">
                      <h4 className="text-2xl font-bold">Leave a Comment</h4>
                      <form className="w-full flex flex-col gap-4">
                        <label
                          htmlFor="comment"
                          className="text-lg flex flex-col gap-4 font-semibold"
                        >
                          Comment
                          <textarea
                            value={body}
                            name={"body"}
                            onChange={(e) => setBody(e.target.value)}
                            type="text"
                            className="textarea h-[130px] outline-none"
                          />
                        </label>
                      </form>
                    </div>
                  </div>
                  <div className="flex pt-4">
                    <button
                      disabled={body === "" || loading}
                      onClick={handleCreateComment}
                      className="btn py-3 px-8 rounded-xl text-white text-lg"
                    >
                      {loading ? (
                        <span className="flex items-center gap-6">
                          <Loader type={"dots"} />
                          Comment in progress
                        </span>
                      ) : (
                        "Submit"
                      )}
                    </button>
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
