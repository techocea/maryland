import {
  FooterSection,
  NavItem,
  Service,
  Testimonial,
  WhyUs,
} from "@/types";
import talk from "@/public/talk.png";
import application from "@/public/application.png";
import trust from "@/public/trust.png";
import visa from "@/public/visa.png";

export const NavItems: NavItem[] = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "About", href: "/about" },
  { id: 3, label: "Study Destinations", href: "/study-destinations" },

  { id: 5, label: "Contact", href: "/contact" },
];

export const steps = [
  {
    id: "Step 1",
    name: "Personal Information",
    fields: [
      "firstName",
      "lastName",
      "nic",
      "nationality",
      "gender",
      "maritalStatus",
      "email",
      "contact",
    ],
  },
  {
    id: "Step 2",
    name: "Address",
    fields: ["address1", "address2", "province", "district"],
  },
  {
    id: "Step 3",
    name: "Education",
    fields: ["olEnglish", "alEnglish", "englishTest"],
  },
  {
    id: "Step 04",
    name: "Documents Submission",
  },
];

export const SelectionValues = [
  {
    id: 1,
    provinces: [
      "Central ",
      "Eastern ",
      "North Central ",
      "Northern ",
      "North Western ",
      "sabaragamuwa ",
      "Southern ",
      "Uva ",
      "Western ",
    ],
  },
  {
    id: 2,
    districts: [
      "Ampara",
      "Anuradhapura",
      "Badulla",
      "Batticalao",
      "Colombo",
      "Galle",
      "Gampaha",
      "Hambanthota",
      "Jaffna",
      "Kaluthara",
      "Kandy",
      "Kegalle",
      "Kilinochchi",
      "Kurunegala",
      "Mannar",
      "Mathale",
      "Monaragala",
      "Mullaitivu",
      "Nuwara Eliya",
      "Polonnaruwa",
      "Puttalam",
      "Rathnapura",
      "Trincomalee",
      "Vavuniya",
    ],
  },
];

export const WhyUsData: WhyUs[] = [
  {
    id: 1,
    image: talk,
    title: "Consultancy",
    description:
      "Our experienced consultants provide personalized advice and support to help you",
  },
  {
    id: 2,
    image: application,
    title: "Application Process",
    description:
      "We streamline the application process to help you complete and submit your applications",
  },
  {
    id: 3,
    image: trust,
    title: "Trustworthy",
    description:
      "With a proven track record we support you not only before  but also after the migration process",
  },
  {
    id: 4,
    image: visa,
    title: "Visa Process",
    description:
      "Our dedicated team assists you in your visa process with a 100% success rate",
  },
];

export const TestimonialData: Testimonial[] = [
  {
    id: 1,
    saying:
      "Lorem ipsum dolor sit amet consectetur. Pulvinar scelerisque commodo imperdiet mattis interdum justo nisl volutpat. Lacus enim dui lectus vitae.",
    avatar: undefined,
    name: "john ",
    university: "University of Melbourne",
  },
  {
    id: 2,
    saying:
      "Lorem ipsum dolor sit amet consectetur. Pulvinar scelerisque commodo imperdiet mattis interdum justo nisl volutpat. Lacus enim dui lectus vitae.",
    avatar: undefined,
    name: "john doe",
    university: "University of Melbourne",
  },
  {
    id: 3,
    saying:
      "Lorem ipsum dolor sit amet consectetur. Pulvinar scelerisque commodo imperdiet mattis interdum justo nisl volutpat. Lacus enim dui lectus vitae.",
    avatar: undefined,
    name: "john doe doe",
    university: "University of Melbourne",
  },
];

export const ServiceData: Service[] = [
  {
    id: "01",
    image: "/counselling.png",
    title: "counselling",
  },
  {
    id: "02",
    image: "/conditional-letter.png",
    title: "course selection",
  },
  {
    id: "03",
    image: "/application-copy.png",
    title: "application",
  },
  {
    id: "04",
    image: "/conditional-letter.png",
    title: "Conditional offer letter",
  },
  {
    id: "05",
    image: "/visa-process.png",
    title: "Visa Process & Application",
  },
  {
    id: "06",
    image: "/financial.png",
    title: "fulfilling all financial aid docs ",
  },
  {
    id: "07",
    image: "/tuition-fee.png",
    title: "Pay tuition fees",
  },
  {
    id: "08",
    image: "/invoice.png",
    title: "Invoice issued",
  },
];

export const UniversityData = [
  {
    id: 1,
    country: "canada",
    universities: [
      {
        name: "St. Clair College - Downtown Campus",
        image: "/St. Clair College.jpg",
      },
      {
        name: "Algoma University – Brampton",
        image: "/Algoma University.jpeg",
      },
      {
        name: "Capilano University – North Vancouver",
        image: "/Capilano University.jpeg",
      },
      {
        name: "Crandall University",
        image: "/Crandall Univer.jpeg",
      },
    ],
  },
  {
    id: 2,
    country: "united kingdom",
    universities: [
      {
        name: "Coventry University",
        image: "/Coventry University.jpeg",
      },
      {
        name: "Kingston University London",
        image: "/Kingston University.jpg",
      },
      {
        name: "London Metropolitan University",
        image: "/London Metropolitan.jpeg",
      },
      {
        name: "Brunel University London",
        image: "/Brunel University.jpg",
      },
    ],
  },
  {
    id: 3,
    country: "USA",
    universities: [
      {
        name: "Southern New Hampshire University",
        image: "/Southern New Hampshire University.jpeg",
      },
      {
        name: "University of Arizona",
        image: "/University of Arizona.jpeg",
      },
      {
        name: "Southeast Missouri State University",
        image: "/Southeast Missouri State University.jpg",
      },
      {
        name: "Tennessee Tech University",
        image: "/Tennessee Tech Universi.jpeg",
      },
    ],
  },
];

export const FooterData: FooterSection[] = [
  {
    id: 1,
    label: "Company",
    links: [
      {
        title: "Services",
        href: "/about",
      },
      {
        title: "Study Destinations",
        href: "/study-destinations",
      },
      {
        title: "Gallery",
        href: "/gallery",
      },
    ],
  },
  {
    id: 2,
    label: "information",
    links: [
      {
        title: "About us",
        href: "/about",
      },
      {
        title: "Terms & Conditions",
        href: "/terms",
      },
      {
        title: "Privacy Policy",
        href: "/policy",
      },
    ],
  },
  {
    id: 3,
    label: "Contact",
    contacts: [
      "+94 77  771 1335",
      "info@marylanconsultancy.lk",
      "135, 2nd Floor, Tisara Plaza, Dutugamunu Street, Kohuwala, Nugegoda, Sri Lanka",
    ],
  },
];
