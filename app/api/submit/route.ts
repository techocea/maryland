import Application from "@/app/lib/applicationSchema";
import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
      workRecommendationLetter,
    });

    const fullName = `${firstName} ${lastName}`;

    const documentLinks = [
      { name: "Passport", link: passport.url },
      { name: "Degree Certificate", link: degreeCertificate.url },
      { name: "Curriculum Vitae", link: curriculumVitae.url },
      { name: "A/L Certificate", link: alCertificate.url },
      { name: "O/L Certificate", link: olCertificate.url },
      { name: "Statement of Purpose", link: statementOfPurpose.url },
      { name: "Degree Transcript", link: degreeTranscript.url },
      { name: "English Proficiency Test", link: englishProficiencyTest.url },
      {
        name: "Academic Recommendation Letter",
        link: academicRecommendationLetter.url,
      },
      {
        name: "Work Recommendation Letter",
        link: workRecommendationLetter.url,
      },
    ].filter((doc) => doc.link);

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #2c3e50;">New Student Application Submission</h2>
        <p>A new student application has been submitted. Below are the details:</p>

        <h3 style="color: #3498db;">Personal Details</h3>
        <table border="1" cellpadding="8" cellspacing="0" width="100%" style="border-collapse: collapse;">
          <tr><th align="left">Full Name</th><td>${fullName}</td></tr>
          <tr><th align="left">Email</th><td>${email}</td></tr>
          <tr><th align="left">Contact</th><td>${contact}</td></tr>
          <tr><th align="left">Nationality</th><td>${nationality}</td></tr>
          <tr><th align="left">NIC</th><td>${nic}</td></tr>
          <tr><th align="left">Gender</th><td>${gender}</td></tr>
          <tr><th align="left">Marital Status</th><td>${maritalStatus}</td></tr>
        </table>

        <h3 style="color: #3498db;">Address Information</h3>
        <table border="1" cellpadding="8" cellspacing="0" width="100%" style="border-collapse: collapse;">
          <tr><th align="left">Address Line 1</th><td>${address1}</td></tr>
          <tr><th align="left">Address Line 2</th><td>${address2}</td></tr>
          <tr><th align="left">Province</th><td>${province}</td></tr>
          <tr><th align="left">District</th><td>${district}</td></tr>
        </table>

        <h3 style="color: #3498db;">Education & English Proficiency</h3>
        <table border="1" cellpadding="8" cellspacing="0" width="100%" style="border-collapse: collapse;">
          <tr><th align="left">O/L English Grade</th><td>${olEnglish}</td></tr>
          <tr><th align="left">A/L English Grade</th><td>${alEnglish}</td></tr>
          <tr><th align="left">English Test</th><td>${englishTest}</td></tr>
        </table>

        <h3 style="color: #3498db;">Submitted Documents</h3>
        <table border="1" cellpadding="8" cellspacing="0" width="100%" style="border-collapse: collapse;">
          <tr><th align="left">Document</th><th align="left">Download Link</th></tr>
          ${documentLinks
            .map(
              (doc) =>
                `<tr><td>${doc.name}</td><td><a href="${doc.link}" target="_blank">Download</a></td></tr>`
            )
            .join("")}
        </table>

        <p>If you are unable to download the documents, they are also attached to this email.</p>
        <p>Best Regards, <br> Maryland Consultancy</p>
      </div>
    `;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Student Application Submission - ${fullName}`,
      html: htmlContent,
      attachments: documentLinks.map((doc) => ({
        filename: `${doc.name}.pdf`,
        path: doc.link,
      })),
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
