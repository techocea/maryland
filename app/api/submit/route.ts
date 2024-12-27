import Application from "@/app/lib/applicationSchema";
import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const {
    firstName,
    lastName,
    email,
    contact,
    nationality,
    nic,
    gender,
    maritalStatus,
    address1,
    address2,
    province,
    district,
    olEnglish,
    alEnglish,
    englishTest,
    passport,
    degreeCertificate,
    curriculumVitae,
    alCertificate,
    olCertificate,
    statementOfPurpose,
    degreeTranscript,
    englishProficiencyTest,
    academicRecommendationLetter,
    workRecommendationLetter,
  } = await req.json();

  try {
    await connectDB();
    await Application.create({
      firstName,
      lastName,
      email,
      contact,
      nationality,
      nic,
      gender,
      maritalStatus,
      address1,
      address2,
      province,
      district,
      olEnglish,
      alEnglish,
      englishTest,
      passport,
      degreeCertificate,
      curriculumVitae,
      alCertificate,
      olCertificate,
      statementOfPurpose,
      degreeTranscript,
      englishProficiencyTest,
      academicRecommendationLetter,
      workRecommendationLetter
    });

    return NextResponse.json(
      {
        message: "Data inserted successfully",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return NextResponse.json(
      {
        message: "Error occurred while processing the request",
        success: false,
      },
      { status: 500 }
    );
  }
}
