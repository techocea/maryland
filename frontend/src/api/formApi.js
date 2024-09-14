import axios from "axios";

const API_URL = "https://brescia-production.up.railway.app/api/contact";

export const form = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}`, formData);
  } catch (err) {
    console.error("Error submitting the contact form", err);
  }
};
