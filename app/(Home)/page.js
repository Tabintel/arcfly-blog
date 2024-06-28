import Head from "next/head";
import HomeIndex from "./_components";
import getCurrentUserSession from "../actions/getCurrentUser";
import LoginBtn from "@/components/loader/common/Login";
import { auth } from "@/auth";
export default async function Root() {

  return (
    <div className="relative z-40">
      <HomeIndex/>
      {/* <LoginBtn/> */}
    </div>
  );
}
