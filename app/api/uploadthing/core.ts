import { createUploadthing } from "uploadthing/next";
const f = createUploadthing();

export const OurFileRouter = {
  pdfUploader: f({ pdf: { maxFileSize: "4MB" } }).onUploadComplete(
    async ({ file }) => {
      console.log("file url", file.url);
    }
  ),
};

export type OurFileRouter = typeof OurFileRouter;