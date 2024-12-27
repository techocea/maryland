import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
 
    const client = await clientPromise;
    const db = client.db("test");

    const data = await req.json();
    const collection = db.collection("applicationforms");

    const result = await collection.insertOne(data);

    return NextResponse.json(
      {
        message: "Data inserted successfully",
        result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return NextResponse.json(
      {
        message: "Error occurred while processing the request",
      },
      { status: 500 }
    );
  }
}
