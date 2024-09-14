import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

import { Purpose } from "../utils/constants";
import { toast } from "react-toastify";

import axios from "axios";
import { form } from "../api/formApi";

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    amount: "",
    purpose: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await form(formData);
      console.log("Form Submitted Succesfully");
      toast.success("Submission Success !", {
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      console.error("Contact Form Error", err);
      toast.error("Submission failed");
    }
  };

  return (
    <div className="my-10 flex items-center justify-center max-w-3xl w-full">
      <form
        className="bg-white  flex flex-col items-center justify-center py-10 shadow-xl"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-4  w-full p-6">
          <div className="flex w-full col-span-2 lg:col-span-1 flex-wrap md:flex-nowrap gap-4">
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              type="text"
              label="Name"
              required
            />
          </div>
          <div className="flex w-full col-span-2 lg:col-span-1 flex-wrap md:flex-nowrap gap-4">
            <Input
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              type="text"
              label="Contact"
              required
            />
          </div>
          <div className="flex w-full col-span-2 lg:col-span-1 gap-4">
            <Input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              label="Email"
              required
            />
          </div>
          <div className="flex w-full col-span-2 lg:col-span-1  gap-4">
            <Input
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              type="text"
              label="Amount (LKR)"
              required
            />
          </div>
          <select
            onChange={handleInputChange}
            name="purpose"
            value={formData.purpose}
            label="Loan Purpose"
            className="col-span-2 w-full"
            required
          >
            <option
              value=""
              required
              className="text-slate-500 cursor-not-allowed w-full"
            >
              -select loan purpose-
            </option>
            <option value="Work Visa">Work Visa</option>
            <option value="Student Visa">Student Visa</option>
            <option value="Personal">Personal</option>
          </select>
          <div className="w-full col-span-2">
            <Button
              type="submit"
              color="primary"
              className="hover:bg-primary py-2 mt-2 w-full text-white font-bold rounded-full"
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
