"use server";
import { signIn } from "@/auth";

export default async function LoginBtn() {
  // const handleSignIn = async (event) => {
  //   event.preventDefault(); // Prevent the default form submission

  //   try {
  //     await signIn("google"); // Call signIn function with the provider (Google in this case)
  //   } catch (error) {
  //     console.error("Sign in error:", error);
  //     // Handle sign in errors here
  //   }
  // };

  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button
        type="submit"
        className="btn py-3 px-4 rounded-[10px] text-base cursor-pointer text-white font-semibold hover:text-white"
      >
        Signin
      </button>
    </form>
  );
}

