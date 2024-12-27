import mongoose from "mongoose";

const contactFormSchema = new mongoose.Schema(
  {
    name: {
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
    destination: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    mode: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.ContactForm ||
  mongoose.model("contactForm", contactFormSchema);
