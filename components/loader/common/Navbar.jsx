"use server";
import React from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import LoginBtn from "./Login";
import { signOut } from "@/auth";
// import { signOut } from "next-auth/react";
const Navbar = async ({ user }) => {
  // console.log(user);
  const linkData = [
    {
      text: "Home",
      path: "",
    },
    {
      text: "About",
      path: "",
    },
    {
      text: "Blog",
      path: "",
    },
    {
      text: "Contact",
      path: "",
    },
    // {
    //   text: "Login",
    //   path: "login",
    // },
    // {
    //   text: "Sign Up",
    //   path: "register",
    // },
  ];

  return (
    <div className="w-full z-[30000] py-6 bg-[#000]">
      <div className="w-[90%] max-w-custom mx-auto flex items-center gap-4 justify-between">
        <Link href={"/"} className="text-xl font-semibold text-white">
          Envita Blog
        </Link>
        <ul className="flex items-center justify-end gap-8">
          {linkData?.map((data, index) => {
            return (
              <Link
                key={index}
                className="text-base hidden md:flex text-grey font-semibold hover:text-white"
                href={`/${data?.path}`}
              >
                {data?.text}
              </Link>
            );
          })}
          <div className="flex items-center group relative">
            {user ? (
              <li className="text-base flex items-center gap-3 text-white">
                <img
                  src={user?.image}
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
                <span>
                  {user?.name}

                  <span className="block text-xs">{user?.email}</span>
                </span>
              </li>
            ) : (
              <LoginBtn />
            )}
            {user && (
              <div
                style={{ transition: "all .4s" }}
                className="w-[130px] bg-white shadow-lg z-[348858585] absolute group-hover:flex top-[100%] hidden flex-col"
              >
                <span className="block bg-white border-b w-full hover:bg-[#fafafa] cursor-pointer font-bold p-4 text-sm">
                  Blog
                </span>
                <form
                  className="w-full"
                  action={async () => {
                    "use server";
                    await signOut();
                  }}
                >
                  <button
                    type="submit"
                    className="block w-full text-start bg-white border-b hover:bg-[#fafafa] cursor-pointer font-bold p-4 text-sm"
                  >
                    Log Out
                  </button>
                </form>
              </div>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
