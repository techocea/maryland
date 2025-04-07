"use client";

import { z } from "zod";
import axios from "axios";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { DocumentFields, SelectionValues, steps } from "@/utils/constants";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formDataSchema } from "@/app/lib/zodSchema";
import { UploadDropzone } from "@/lib/uploadthing";
import { Link, Loader2, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { FileImage, FileText, File } from "lucide-react";

type Inputs = z.infer<typeof formDataSchema>;
type FieldName = keyof Inputs;

const ProfilePage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [documents, setDocuments] = useState<
    Record<string, { url: string; type: string; name: string }>
  >({});
  const delta = currentStep - previousStep;
  const {
    register,
    control,
    trigger,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(formDataSchema),
    defaultValues: {
      firstName: "Juliya",
      lastName: "Roberts",
      nic: "200320610690",
      nationality: "Sri Lankan",
      gender: "Female",
      maritalStatus: "Single",
      email: "julia.roberts@marylaconsultancy.lk",
      contact: "777711335",
      address1: "234/Alan`s Street",
      address2: "California",
      district: "Gampaha",
      province: "Western",
      olEnglish: "A",
      alEnglish: "A",
      englishTest: "IELTS",
      passport: "",
      degreeCertificate: "",
      curriculumVitae: "",
      alCertificate: "",
      olCertificate: "",
      statementOfPurpose: "",
      degreeTranscript: "",
      englishProficiencyTest: "",
      academicRecommendationLetter: "",
      workRecommendationLetter: "",
    },
  });

  const provinces =
    SelectionValues.find((item) => item.id == 1)?.provinces || [];
  const districts =
    SelectionValues.find((item) => item.id == 2)?.districts || [];

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  const getFileIcon = (type: string) => {
    if (type?.startsWith("image/"))
      return <FileImage className="text-blue-600 w-8 h-8" />;
    if (type === "application/pdf")
      return <FileText className="text-red-600 w-8 h-8" />;
    return null;
  };

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    if (!documents) {
      toast.error("Please upload documents before submitting.");
      return;
    }

    try {
      setIsLoading(true);
      const finalData = {
        ...formData,
        passport: documents.passport,
        degreeCertificate: documents.degreeCertificate,
        curriculumVitae: documents.curriculumVitae,
        alCertificate: documents.alCertificate,
        olCertificate: documents.olCertificate,
        statementOfPurpose: documents.statementOfPurpose,
        degreeTranscript: documents.degreeTranscript,
        englishProficiencyTest: documents.englishProficiencyTest,
        academicRecommendationLetter: documents.academicRecommendationLetter,
        workRecommendationLetter: documents.workRecommendationLetter,
      };

      const response = await axios.post("/api/submit", finalData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        toast.success("Application Form Submitted", {
          autoClose: 2000,
        });
        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    } catch (error) {
      console.error("[FORM_SUBMIT_ERROR]", error);
      toast.error("Submission failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex bg-secondary py-12">
      <section className="bg-white max-w-3xl md:max-w-4xl lg:max-w-5xl lg:mx-auto h-full w-full p-10">
        <nav aria-label="Progress">
          <ol
            role="list"
            className="space-y-4 md:flex md:space-x-8 md:space-y-0"
          >
            {steps.map((step, index) => (
              <li key={step.name} className="max-w-md w-full">
                {currentStep > index ? (
                  <div className="flex  w-full flex-col border-l-4 border-sky-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                    <span className="text-sm font-medium text-sky-600 transition-colors ">
                      {step.id}
                    </span>
                    <span className="text-sm font-medium">{step.name}</span>
                  </div>
                ) : currentStep === index ? (
                  <div
                    className="flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                    aria-current="step"
                  >
                    <span className="text-sm font-medium text-sky-600">
                      {step.id}
                    </span>
                    <span className="text-sm font-medium">{step.name}</span>
                  </div>
                ) : (
                  <div className="flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                    <span className="text-sm font-medium text-gray-500 transition-colors">
                      {step.id}
                    </span>
                    <span className="text-sm font-medium">{step.name}</span>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <form className="mt-12" onSubmit={handleSubmit(onSubmit)}>
          {currentStep === 0 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="my-10 grid grid-cols-1 gap-x-6 gap-y-8">
                <div className="">
                  <Label
                    htmlFor="firstName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </Label>
                  <div className="mt-2">
                    <Input
                      type="text"
                      placeholder="First Name"
                      {...register("firstName")}
                    />
                    {errors.firstName?.message && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="">
                  <Label
                    htmlFor="lastName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name
                  </Label>
                  <div className="mt-2">
                    <Input
                      type="text"
                      placeholder="Last Name"
                      {...register("lastName")}
                    />
                    {errors.lastName?.message && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 w-full justify-between">
                  <div className="lg:max-w-1/2 w-full">
                    <Label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email Address
                    </Label>
                    <div className="mt-2">
                      <Input
                        placeholder="Email Address"
                        {...register("email")}
                      />
                      {errors.email && (
                        <span className="text-red-500 text-sm">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="lg:max-w-1/2 w-full">
                    <Label
                      htmlFor="contact"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Contact Number
                    </Label>
                    <div className="mt-2">
                      <Input
                        type="text"
                        placeholder="Contact Number"
                        {...register("contact")}
                      />
                      {errors.contact && (
                        <span className="text-red-500 text-sm">
                          {errors.contact.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 w-full justify-between">
                  <div className="lg:max-w-1/2 w-full">
                    <Label
                      htmlFor="nic"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      National Identity Number
                    </Label>
                    <div className="mt-2">
                      <Input
                        type="text"
                        placeholder="National Identity Number"
                        {...register("nic")}
                      />
                      {errors.nic && (
                        <span className="text-red-500 text-sm">
                          {errors.nic.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="lg:max-w-1/2 w-full">
                    <Label
                      htmlFor="nationality"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Nationality
                    </Label>
                    <div className="mt-2">
                      <Input
                        type="text"
                        placeholder="Nationality"
                        {...register("nationality")}
                      />
                      {errors.nationality && (
                        <span className="text-red-500 text-sm">
                          {errors.nationality.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 w-full justify-between">
                  <div className="lg:max-w-1/2 w-full">
                    <Label
                      htmlFor="gender"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Gender
                    </Label>
                    <div className="mt-2">
                      <Controller
                        name="gender"
                        control={control}
                        render={({ field }) => (
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select Gender" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem value="Male">Male</SelectItem>
                                <SelectItem value="Female">Female</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        )}
                      />

                      {errors.gender && (
                        <span className="text-red-500 text-sm">
                          {errors.gender.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="lg:max-w-1/2 w-full">
                    <Label
                      htmlFor="maritalStatus"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Marital Status
                    </Label>
                    <div className="mt-2">
                      <Controller
                        name="maritalStatus"
                        control={control}
                        render={({ field }) => (
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select Marital Status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem value="Single">Single</SelectItem>
                                <SelectItem value="Married">Married</SelectItem>
                                <SelectItem value="Divorced">
                                  Divorced
                                </SelectItem>
                                <SelectItem value="Widowed">Widowed</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        )}
                      />

                      {errors.maritalStatus && (
                        <span className="text-red-500 text-sm">
                          {errors.maritalStatus.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          {currentStep === 1 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="my-10 grid grid-cols-1 gap-x-6 gap-y-8">
                <div>
                  <Label
                    htmlFor="address1"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Address Line 1
                  </Label>
                  <div className="mt-2">
                    <Input
                      type="text"
                      placeholder="Address Line 1"
                      {...register("address1")}
                    />
                    {errors.address1?.message && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.address1.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="address2"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Address Line 2
                  </Label>
                  <div className="mt-2">
                    <Input
                      type="text"
                      placeholder="Address Line 2"
                      {...register("address2")}
                    />
                    {errors.address2?.message && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.address2.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 w-full justify-between">
                  <div className="lg:max-w-1/2 w-full">
                    <Label
                      htmlFor="province"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Province
                    </Label>
                    <div className="mt-2">
                      <Controller
                        name="province"
                        control={control}
                        render={({ field }) => (
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select Your Province" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                {provinces.map(
                                  (province: string, idx: number) => (
                                    <SelectItem key={idx} value={province}>
                                      {province}
                                    </SelectItem>
                                  )
                                )}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        )}
                      />
                      {errors.province?.message && (
                        <span className="text-red-500 text-sm">
                          {errors.province.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="lg:max-w-1/2 w-full">
                    <Label
                      htmlFor="district"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      District
                    </Label>
                    <div className="mt-2">
                      <Controller
                        name="district"
                        control={control}
                        render={({ field }) => (
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select Your District" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                {districts.map(
                                  (district: string, idx: number) => (
                                    <SelectItem key={idx} value={district}>
                                      {district}
                                    </SelectItem>
                                  )
                                )}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        )}
                      />
                      {errors.district?.message && (
                        <span className="text-red-500 text-sm">
                          {errors.district.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          {currentStep === 2 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="my-10 grid grid-cols-1 gap-x-6 gap-y-8">
                <div className="lg:max-w-1/2 w-full">
                  <Label
                    htmlFor="olEnglish"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    What was your Ordinary Level English Result
                  </Label>
                  <div className="mt-2">
                    <Controller
                      name="olEnglish"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="O/L English Result" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="A">A</SelectItem>
                              <SelectItem value="B">B</SelectItem>
                              <SelectItem value="C">C</SelectItem>
                              <SelectItem value="D">D</SelectItem>
                              <SelectItem value="F">F</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      )}
                    />

                    {errors.olEnglish && (
                      <span className="text-red-500 text-sm">
                        {errors.olEnglish.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="lg:max-w-1/2 w-full">
                  <Label
                    htmlFor="alEnglish"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    What was your Advance Level English Result
                  </Label>
                  <div className="mt-2">
                    <Controller
                      name="alEnglish"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="A/L English Result" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="A">A</SelectItem>
                              <SelectItem value="B">B</SelectItem>
                              <SelectItem value="C">C</SelectItem>
                              <SelectItem value="D">D</SelectItem>
                              <SelectItem value="F">F</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      )}
                    />

                    {errors.alEnglish && (
                      <span className="text-red-500 text-sm">
                        {errors.alEnglish.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="lg:max-w-1/2 w-full">
                  <Label
                    htmlFor="englishTest"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Have you done an English Proficiency Test?
                  </Label>
                  <div className="mt-2">
                    <Controller
                      name="englishTest"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="English Test Result" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="IELTS">IELTS</SelectItem>
                              <SelectItem value="PTE">PTE</SelectItem>
                              <SelectItem value="TOEFEL">TOEFEL</SelectItem>
                              <SelectItem value="None">None</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      )}
                    />

                    {errors.englishTest && (
                      <span className="text-red-500 text-sm">
                        {errors.englishTest.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          {currentStep === 3 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="my-10 grid grid-cols-1 gap-x-6 gap-y-8">
                {DocumentFields.map((doc) => (
                  <div key={doc.name} className="space-y-2 mt-6">
                    <Label
                      htmlFor={doc.label}
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      {doc.label}
                    </Label>
                    <Controller
                      name={doc.label as FieldName}
                      control={control}
                      render={() => (
                        <>
                          <UploadDropzone
                            endpoint="mixedUploader"
                            onClientUploadComplete={(res) => {
                              const file = res[0];
                              const uploadedUrl = file.ufsUrl;
                              const fileType = file.type;
                              const fileName = `${
                                doc.name
                              }_${Date.now()}.${file.name.split(".").pop()}`;

                              setDocuments((prev) => ({
                                ...prev,
                                [doc.name]: {
                                  url: uploadedUrl,
                                  type: fileType,
                                  name: fileName,
                                },
                              }));

                              setValue(doc.name as FieldName, uploadedUrl);
                              toast.success(
                                `${doc.label} uploaded successfully!`
                              );
                            }}
                            onUploadError={(error) => {
                              toast.error(
                                `Upload failed for ${doc.label}: ${error.message}`
                              );
                            }}
                          />
                          {documents[doc.name] && (
                            <div className="pt-4 flex items-center justify-between border mt-2 rounded px-4 py-2 shadow-sm">
                              <div className="flex items-center gap-2">
                                {getFileIcon(documents[doc.name].type)}
                                <span className="text-lg font-semibold text-gray-800">
                                  {documents[doc.name].name}
                                </span>
                              </div>
                              <button
                                onClick={() => {
                                  setDocuments((prev) => {
                                    const copy = { ...prev };
                                    delete copy[doc.name];
                                    return copy;
                                  });
                                  setValue(doc.name as FieldName, "");
                                }}
                                type="button"
                                className="text-red-600"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>
                          )}

                          {errors[doc.name as FieldName]?.message && (
                            <span className="text-red-500 text-sm">
                              {errors[doc.name as FieldName]?.message}
                            </span>
                          )}
                        </>
                      )}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
          <div className="mt-8 pt-5">
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prev}
                disabled={currentStep === 0}
                className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                disabled={currentStep === steps.length - 1}
                className={cn(
                  currentStep === 3
                    ? "hidden"
                    : "rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
              {currentStep === 3 && (
                <button className="px-4 py-2 bg-green-500 text-white rounded-md">
                  {isLoading ? (
                    <div className="flex">
                      Submitting <Loader2 />
                    </div>
                  ) : (
                    "Submit"
                  )}
                </button>
              )}
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default ProfilePage;
