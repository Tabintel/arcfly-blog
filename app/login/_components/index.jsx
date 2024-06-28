"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";
const MainContent = () => {
  // const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (!result.error) {
      // Handle successful login
      toast.success("Login process succesfully");
    } else {
      toast.error(result.error);
      // Handle error
    }
  };

  return (
    <div className="flex flex-col relative w-full gap-4">
      {/* {loading && <Loader />} */}
      <div className="w-full flex flex-col gap-8">
        {/* single posts */}
        <div className="w-full flex items-center justify-center bg-[#fff] py-12">
          <div className="w-[90%] md:w-[500px] max-w-custom_1 flex flex-col items-start gap-4 justify-center mx-auto">
            <div className="flex w-full flex-col gap-8">
              <h4 className="text-2xl md:text-4xl font-bold">
                Sign in Here
                <span className="block font-normal text-base pt-4 text-grey">
                  Login in to your account to have access to exclusive rights
                  and contents
                </span>
              </h4>
              <form className="w-full flex flex-col gap-4">
                <label
                  htmlFor="name"
                  className="text-base flex flex-col gap-4 font-semibold"
                >
                  Email
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    className="input"
                  />
                </label>
                <label
                  htmlFor="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  className="text-base flex flex-col gap-4 font-semibold"
                >
                  Password
                  <input type="password" className="input" />
                </label>
                <div className="flex pt-4">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="btn py-3 px-8 rounded-xl text-white text-lg"
                  >
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
