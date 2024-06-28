// app/api/nsfw/route.js
import { NextResponse } from "next/server";
import prisma from "@/prisma";
import { auth } from "@/auth";
export async function POST(req) {
  const { body, postId } = await req.json();
  const session = await auth();
  if (!session) {
    return NextResponse.json(
      { message: "You are not allowed to perform this action" },
      { status: 401 }
    );
  }
  try {
    const comment = await prisma.comment.create({
      data: {
        body,
        postId,
        username: session?.user?.name,
        userimage: session?.user?.image,
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
