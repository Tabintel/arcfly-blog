import Navbar from "@/components/loader/common/Navbar";
import "./globals.css";
import ToasterProvider from "./providers/ToasterProvider";
import "react-loading-skeleton/dist/skeleton.css";
import { auth, signIn } from "@/auth";
export const metadata = {
  title: "Envitab Blog",
  description:
    "Building a Secure Next.js Blog with Fly.io and Arcjet - HackMD hackmd.io",
};

export default async function RootLayout({ children }) {
    const session = await auth();
    // console.log(session.user);
  return (
    <html lang="en">
      <body>
        <ToasterProvider />
        <Navbar user={session?.user} />
        {children}
      </body>
    </html>
  );
}
