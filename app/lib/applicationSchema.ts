import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  personal: {
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
      required: true,
    },
    maritalStatus: {
      type: String,
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
  },
  address: {
    address1: {
      type: String,
      required: true,
    },
    address2: {
      type: String,
      required: true,
    },
    city: {
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
  },
  education: {
    olEnglish: {
      type: String,
      required: true,
    },
    alEnglish: {
      type: String,
      required: true,
    },
    englishTest: {
      type: String,
      required: true,
    },
  },
  documents: {
    passport: {
      type: String,
      required: true,
    },
    degreeCertificate: {
      type: String,
      required: true,
    },
    curriculumVitae: {
      type: String,
      required: true,
    },
    alCertificate: {
      type: String,
      required: true,
    },
    olCertificate: {
      type: String,
      required: true,
    },
    statementOfPurpose: {
      type: String,
      required: true,
    },
    degreeTranscript: {
      type: String,
      required: true,
    },
    englishProficiencyTest: {
      type: String,
      required: true,
    },
    academicRecommendationLetter: {
      type: String,
      required: true,
    },
    workRecommendationLetter: {
      type: String,
      required: true,
    },
  },
});

export default mongoose.models.ApplicationForm ||
  mongoose.model("ApplicationForm", applicationSchema);
