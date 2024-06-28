import Head from "next/head";
import HomeIndex from "./_components";
import Navbar from "@/components/loader/common/Navbar";
import getCurrentUserSession from "../actions/getCurrentUser";

export default async function Root() {
  const user = await getCurrentUserSession();
  // if (user) {
  //   return window.location.push("/");
  // }
  return (
    <div className="relative">
      <HomeIndex user={user} />
    </div>
  );
}
