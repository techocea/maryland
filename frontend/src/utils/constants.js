import { IoMdAirplane } from "react-icons/io";
import { FaUserGraduate } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa6";
import { BsCurrencyExchange } from "react-icons/bs";

export const NavItems = [
  {
    id: 1,
    to: "/",
    title: "Home",
  },
  {
    id: 2,
    to: "/about",
    title: "About",
  },
  {
    id: 3,
    title: "Services",
    services: [
      {
        to: "/services/work-visa",
        label: "Work Visa Loans",
      },
      {
        to: "/services/student-visa",
        label: "Student Visa Loans",
      },
      {
        to: "/services/study-abroad",
        label: "Study Abroad",
      },
      {
        to: "/services/western-union",
        label: "Western Union",
      },
      {
        to: "/services/gold-pawning",
        label: "Gold Pawning",
      },
    ],
  },
  // {
  //   id: 4,
  //   to: "/news",
  //   title: "News",
  // },
  {
    id: 5,
    to: "/contact",
    title: "Contact",
  },
];

export const ServiceData = [
  {
    id: 1,
    to: "work-visa",
    title: "Migration Loans",
    icons: IoMdAirplane,
  },
  {
    id: 2,
    to: "student-visa",
    title: "Student Loans",
    icons: FaUserGraduate,
  },

  {
    id: 3,
    to: "western-union",
    title: "Western union",
    icons: FaDollarSign,
  },
  {
    id: 4,
    to: "study-abroad",
    title: "Study Abroad",
    icons: BsCurrencyExchange,
  },
];

export const Purpose = [
  {
    id: 1,
    title: "Work visa",
  },
  {
    id: 2,
    title: "Student visa",
  },
  {
    id: 1,
    title: "Personal",
  },
];

export const footerData = [
  {
    id: 1,
    title: "About",
    to: ["about"],
    lists: ["Our history"],
  },
  {
    id: 2,
    title: "services",
    to: ["migration-loans", "student-loans", "western-union", "gold-pawning"],
    lists: [
      "Migration Loans",
      "Student Loans",
      "Western union",
      "Gold Pawning",
    ],
  },
  {
    id: 3,
    title: "Loan",
    to: ["loans"],
    lists: ["Loan details"],
  },
  {
    id: 4,
    title: "Terms of use",
    to: ["privacy-policy", "terms-conditions"],
    lists: ["Privacy policy", "Terms & conditions"],
  },
];
