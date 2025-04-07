import { createUploadthing } from "uploadthing/next";
const f = createUploadthing();

export const OurFileRouter = {
  mixedUploader: f(["image", "pdf"]).onUploadComplete(async ({ file }) => {
    console.log("file url", file.ufsUrl);
  }),
};

export type OurFileRouter = typeof OurFileRouter;
