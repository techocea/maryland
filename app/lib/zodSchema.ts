import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Required" }),
  contact: z
    .string()
    .min(10, { message: "Required" }),
  email: z.string().email("Required"),
  destination: z.string().min(2, { message: "Required" }),
  area: z.string().min(2, { message: "Required" }),
  mode: z.string().min(2, { message: "Required" }),
});

export const userSchema = z.object({
  email: z.string().email("Email is required"),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .max(8, { message: "Password should contain 8 characters" }),
});

export const formDataSchema = z.object({
  firstName: z.string().min(2, { message: "First Name is required" }),
  lastName: z.string().min(2, { message: "Last Name is required" }),
  nic: z.string().min(2, { message: "National Id No is required" }),
  nationality: z.string().min(2, { message: "Nationality is required" }),
  gender: z.string().min(2, { message: "Gender is required" }),
  maritalStatus: z.string().min(2, { message: "Marital Status is required" }),
  email: z.string().email(),
  contact: z
    .string()
    .min(2, { message: "Contact number should be greater than 2 digits" })
    .max(9, { message: "Omit the first 0" }),
  address1: z.string().min(2, { message: "Please enter your address" }),
  address2: z.string().min(2, { message: "Please enter your address" }),
  district: z.string().min(2, { message: "Please select your district" }),
  province: z.string().min(2, { message: "Please select your province" }),
  olEnglish: z.string(),
  alEnglish: z.string(),
  englishTest: z.string(),
  passport: z.string().url("Please upload the Passport"),
  degreeCertificate: z.string().url("Please upload the Degree Certificate"),
  curriculumVitae: z.string().url("Please upload the Curriculum Vitae"),
  alCertificate: z.string().url("Please upload the A/L certificate"),
  olCertificate: z.string().url("Please upload the O/L certificate"),
  statementOfPurpose: z.string().url("Please upload the statement of purpose"),
  degreeTranscript: z.string().url("Please upload the degree transcript"),
  englishProficiencyTest: z
    .string()
    .url("Please upload the English proficiency test"),
  academicRecommendationLetter: z
    .string()
    .url("Please upload the academic recommendation letter"),
  workRecommendationLetter: z
    .string()
    .url("Please upload the work recommendation letter"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type UserData = z.infer<typeof userSchema>;
export type FormData = z.infer<typeof formDataSchema>;
