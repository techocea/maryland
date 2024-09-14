import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Document from "./components/document";

import { NextUIProvider } from "@nextui-org/react";
import App from "./App.jsx";
import "./index.css";

import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import About from "./pages/about.jsx";
import WorkVisa from "./pages/workVisa.jsx";
import StudentVisa from "./pages/studentVisa.jsx";
import ErrorPage from "./pages/errorPage.jsx";
import WesternUnion from "./pages/westernUnion.jsx";
import Contact from "./pages/contact.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

const routeTitles = {
  "/": "Welcome to Brescia Grameen",
  "/about": "About Us",
  "/services/work-visa": "Work Visa",
  "/services/student-visa": "Student Visa",
  "/services/study-abroad": "Study in Abroad",
  "/services/western-union": "Western Union",
  "/services/gold-pawning": "Gold Pawning",
  "/contact": "Contact Us Now",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <ToastContainer />
      <BrowserRouter>
        <Document titles={routeTitles} />
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <App />
              </MainLayout>
            }
          />
          <Route
            path="/about"
            element={
              <MainLayout>
                <About />
              </MainLayout>
            }
          />
          <Route
            path="/services/work-visa"
            element={
              <MainLayout>
                <WorkVisa />
              </MainLayout>
            }
          />
          <Route
            path="/services/student-visa"
            element={
              <MainLayout>
                <StudentVisa />
              </MainLayout>
            }
          />
          <Route path="/services/study-abroad" element={<ErrorPage />} />
          <Route
            path="/services/western-union"
            element={
              <MainLayout>
                <WesternUnion />
              </MainLayout>
            }
          />
          <Route path="/services/gold-pawning" element={<ErrorPage />} />
          {/* <Route
            path="/news"
            element={
              <MainLayout>
                <About />
              </MainLayout>
            }
          /> */}
          <Route
            path="/contact"
            element={
              <MainLayout>
                <Contact />
              </MainLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>
);
