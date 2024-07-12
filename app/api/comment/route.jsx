// app/api/nsfw/route.js
import { NextResponse } from "next/server";
import prisma from "@/prisma";
import { auth } from "@/auth";
import arcjet, { tokenBucket } from "@arcjet/next";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    // Create a token bucket rate limit. Other algorithms are supported.
    tokenBucket({
      mode: "LIVE", // will block requests. Use "DRY_RUN" to log only
      characteristics: ["userId"], // Rate limit based on the Clerk userId
      refillRate: 1, // refill 1 tokens per interval
      interval: 60, // refill every 60 seconds
      capacity: 1, // bucket maximum capacity of 1 tokens
    }),
  ],
});
export async function POST(req) {
  const { body, postId } = await req.json();
  const session = await auth();
     try {
       if (!session) {
         return NextResponse.json(
           { message: "You are not allowed to perform this action" },
           { status: 401 }
         );
       }

       if (session) {
         // console.log("User:", session.user);

         // If there is a user ID then use it, otherwise use the email
         let userId;
         if (session.user?.id) {
           userId = session.user.id;
         } else if (session.user?.email) {
           // A very simple hash to avoid sending PII to Arcjet. You may wish to add a
           // unique salt prefix to protect against reverse lookups.
           const email = session.user?.email;
           const emailHash = require("crypto")
             .createHash("sha256")
             .update(email)
             .digest("hex");

           userId = emailHash;
         } else {
           return Response.json({ message: "Unauthorized" }, { status: 401 });
         }

         // Deduct 5 tokens from the token bucket
         const decision = await aj.protect(req, { userId, requested: 1 });
         // console.log("Arcjet Decision:", decision);

         if (decision.isDenied()) {
           return Response.json(
             {
               message: "Too Many Requests",
               reason: decision.reason,
             },
             {
               status: 429,
             }
           );
         }
         // message creation handler

         const comment = await prisma.comment.create({
           data: {
             body,
             postId,
             username: session?.user?.name,
             userimage: session?.user?.image,
           },
         });

         return NextResponse.json(comment);
       }
     } catch (error) {
       return NextResponse.json(
         {
           message: error.response?.data?.message || error.message,
         },
         { status: error.response?  .status || 500 }
       );
     }

}

export async function GET(req, { params }) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("query");
  // console.log(query);
  try {
    const comment = await prisma.comment.findMany({
      where: {
        postId: query,
      },
    });

    return NextResponse.json(comment);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.response?.data?.message || error.message,
      },
      { status: error.response?.status || 500 }
    );
  }
}
