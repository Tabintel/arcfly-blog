
import { auth } from "@/auth";
export default async function getCurrentUserSession() {
  try {
       const session = await auth();
       if(session?.user) {
        return session?.user;
       } else {
        return null
       }
    // return session;
  } catch (error) {
    return null;
  }
}
