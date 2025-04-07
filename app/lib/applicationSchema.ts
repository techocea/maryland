import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    nic: {
      type: String,
      required: true,
      index: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },
    maritalStatus: {
      type: String,
      enum: ["Single", "Married", "Divorced", "Widowed"],
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address1: {
      type: String,
      required: true,
    },
    address2: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    olEnglish: {
      type: String,
      enum: ["A", "B", "C", "D", "F"],
      required: true,
    },
    alEnglish: {
      type: String,
      enum: ["A", "B", "C", "D", "F"],
      required: true,
    },
    englishTest: {
      type: String,
      enum: ["IELTS", "PTE", "TOEFL", "None"],
      required: true,
    },
    passport: {
      type: Object,
      required: false,
    },
    degreeCertificate: {
      type: Object,
      required: false,
    },
    curriculumVitae: {
      type: Object,
      required: false,
    },
    alCertificate: {
      type: Object,
      required: false,
    },
    olCertificate: {
      type: Object,
      required: false,
    },
    statementOfPurpose: {
      type: Object,
      required: false,
    },
    degreeTranscript: {
      type: Object,
      required: false,
    },
    englishProficiencyTest: {
      type: Object,
      required: false,
    },
    academicRecommendationLetter: {
      type: Object,
      required: false,
    },
    workRecommendationLetter: {
      type: Object,
      required: false,
    },
  },
  { timestamps: true }
);

const Application =
  mongoose.models.Application ||
  mongoose.model("Application", applicationSchema);

export default Application;
