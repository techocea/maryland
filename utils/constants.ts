import {
  FooterSection,
  GalleryImage,
  NavItem,
  Service,
  Testimonial,
  WhyUs,
} from "@/types";
import talk from "@/public/talk.png";
import application from "@/public/application.png";
import trust from "@/public/trust.png";
import visa from "@/public/visa.png";

export const NAVITEMS: NavItem[] = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "About", href: "/about" },
  { id: 3, label: "Study Destinations", href: "/study-destinations" },
  { id: 4, label: "Gallery", href: "/gallery" },
  { id: 5, label: "Contact", href: "/contact" },
];

export const GALLERY:GalleryImage[]= [
  {
    id: 1,
    title: "success stories",
    images: [
      {
        id: 1,
        src: "/testimonial6.jpeg",
        alt: "testimonial 6",
        aspectRatio: "square",
      },
      {
        id: 2,
        src: "/testimonial7.jpeg",
        alt: "testimonial 7",
        aspectRatio: "portrait",
      },
      {
        id: 3,
        src: "/testimonial8.jpeg",
        alt: "testimonial 8",
        aspectRatio: "landscape",
      },
      {
        id: 4,
        src: "/testimonial9.jpeg",
        alt: "testimonial 9",
        aspectRatio: "square",
      },
      {
        id: 5,
        src: "/testimonial10.jpeg",
        alt: "testimonial 10",
        aspectRatio: "portrait",
      },
      {
        id: 6,
        src: "/testimonial11.jpeg",
        alt: "testimonial 11",
        aspectRatio: "landscape",
      },
      {
        id: 7,
        src: "/testimonial12.jpeg",
        alt: "testimonial 12",
        aspectRatio: "square",
      },
      {
        id: 8,
        src: "/testimonial5.jpeg",
        alt: "testimonial 5",
        aspectRatio: "landscape",
      }
    ],
  },
  {
    id: 2,
    title: "ireland fair - 2025",
    images: [
      // {
      //   id: 9,
      //   src: "/ireland-fair1.jpeg",
      //   alt: "ireland fair 1",
      //   aspectRatio: "square",
      // },
      {
        id: 10,
        src: "/ireland-fair2.jpeg",
        alt: "ireland fair 2",
        aspectRatio: "portrait",
      },
      {
        id: 11,
        src: "/ireland-fair3.jpg",
        alt: "ireland fair 3",
        aspectRatio: "landscape",
      },
      {
        id: 12,
        src: "/ireland-fair4.jpg",
        alt: "ireland fair 4",
        aspectRatio: "square",
      },
      {
        id: 13,
        src: "/ireland-fair5.jpg",
        alt: "ireland fair 5",
        aspectRatio: "portrait",
      },
      {
        id: 14,
        src: "/ireland-fair6.jpg",
        alt: "ireland fair 6",
        aspectRatio: "landscape",
      },
      {
        id: 15,
        src: "/ireland-fair7.jpg",
        alt: "ireland fair 7",
        aspectRatio: "square",
      },
      {
        id: 16,
        src: "/ireland-fair8.jpg",
        alt: "ireland fair 8",
        aspectRatio: "landscape",
      },
      {
        id: 17,
        src: "/ireland-fair9.jpg",
        alt: "ireland fair 9",
        aspectRatio: "square",
      },
      {
        id: 18,
        src: "/ireland-fair10.jpg",
        alt: "ireland fair 10",
        aspectRatio: "portrait",
      }
    ],
  },
  {
    id: 2,
    title: "griffith college fair - 2025",
    images: [
      {
        id: 19,
        src: "/griffith-fair1.JPG",
        alt: "griffith fair 1",
        aspectRatio: "landscape",
      },
      {
        id: 20,
        src: "/griffith-fair2.JPG",
        alt: "griffith fair 2",
        aspectRatio: "square",
      },
      {
        id: 21,
        src: "/griffith-fair3.JPG",
        alt: "griffith fair 3",
        aspectRatio: "portrait",
      },
      {
        id: 22,
        src: "/griffith-fair4.JPG",
        alt: "griffith fair 4",
        aspectRatio: "landscape",
      },
      {
        id: 23,
        src: "/griffith-fair5.JPG",
        alt: "griffith fair 5",
        aspectRatio: "square",
      },
      {
        id: 24,
        src: "/griffith-fair6.JPG",
        alt: "griffith fair 6",
        aspectRatio: "landscape",
      },
      {
        id: 25,
        src: "/griffith-fair7.JPG",
        alt: "griffith fair 7",
        aspectRatio: "square",
      }
    ]
  },
   

];

export const STEPS = [
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

export const SELECTION_VALUES = [
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

export const WHY_US: WhyUs[] = [
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

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    saying:
      "Lorem ipsum dolor sit amet consectetur. Pulvinar scelerisque commodo imperdiet mattis interdum justo nisl volutpat. Lacus enim dui lectus vitae.",
    avatar: "/testimonial1.jpeg",
    name: "venuja pethmin",
    university: "University of Melbourne",
  },
  {
    id: 2,
    saying:
      "Lorem ipsum dolor sit amet consectetur. Pulvinar scelerisque commodo imperdiet mattis interdum justo nisl volutpat. Lacus enim dui lectus vitae.",
    avatar: "/testimonial2.jpeg",
    name: "isuru masinghe",
    university: "University of Melbourne",
  },
  {
    id: 3,
    saying:
      "Lorem ipsum dolor sit amet consectetur. Pulvinar scelerisque commodo imperdiet mattis interdum justo nisl volutpat. Lacus enim dui lectus vitae.",
    avatar: "/testimonial3.jpeg",
    name: "kanushka nanayakkara",
    university: "University of Melbourne",
  },
  {
    id: 4,
    saying:
      "Lorem ipsum dolor sit amet consectetur. Pulvinar scelerisque commodo imperdiet mattis interdum justo nisl volutpat. Lacus enim dui lectus vitae.",
    avatar: "/testimonial4.jpeg",
    name: "hashmi sathnara",
    university: "University of Melbourne",
  },
  {
    id: 5,
    saying:
      "Lorem ipsum dolor sit amet consectetur. Pulvinar scelerisque commodo imperdiet mattis interdum justo nisl volutpat. Lacus enim dui lectus vitae.",
    avatar: "/testimonial5.jpeg",
    name: "nayani nadishika",
    university: "University of Melbourne",
  },
];

export const SERVICE_DATA: Service[] = [
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

export const UNIVERSITY_DATA = [
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

export const FOOTER_DATA: FooterSection[] = [
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
