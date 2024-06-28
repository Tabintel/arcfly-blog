import Head from "next/head";
import HomeIndex from "./_components";
import Navbar from "@/components/loader/common/Navbar";
export default async function Root({ params }) {
  return (
    <div className="relative">
      <HomeIndex blogid={params?.id} />
    </div>
  );
}
