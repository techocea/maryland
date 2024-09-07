import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <ToastContainer />
      <BrowserRouter>
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
