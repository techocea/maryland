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
  { id: 3, label: "Destinations", href: "/study-destinations" },
  { id: 4, label: "Gallery", href: "/gallery" },
  { id: 5, label: "Contact", href: "/contact" },
];

export const GALLERY: GalleryImage[] = [
  {
    id: 1,
    title: "success stories",
    images: [
      {
        id: 1,
        src: "/testimonial6.jpeg",
        alt: "testimonial 6",
      },
      {
        id: 2,
        src: "/testimonial7.jpeg",
        alt: "testimonial 7",
      },
      {
        id: 3,
        src: "/testimonial8.jpeg",
        alt: "testimonial 8",
      },
      // {
      //   id: 4,
      //   src: "/testimonial9.jpeg",
      //   alt: "testimonial 9",

      // },
      {
        id: 5,
        src: "/testimonial10.jpeg",
        alt: "testimonial 10",
      },
      {
        id: 6,
        src: "/testimonial11.jpeg",
        alt: "testimonial 11",
      },
      // {
      //   id: 7,
      //   src: "/testimonial12.jpeg",
      //   alt: "testimonial 12",

      // },
      {
        id: 8,
        src: "/testimonial5.jpeg",
        alt: "testimonial 5",
      },
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
      //
      // },
      {
        id: 10,
        src: "/ireland-fair2.jpeg",
        alt: "ireland fair 2",
      },
      {
        id: 11,
        src: "/ireland-fair3.jpg",
        alt: "ireland fair 3",
      },
      {
        id: 12,
        src: "/ireland-fair4.jpg",
        alt: "ireland fair 4",
      },
      {
        id: 13,
        src: "/ireland-fair5.jpg",
        alt: "ireland fair 5",
      },
      // {
      //   id: 14,
      //   src: "/ireland-fair6.jpg",
      //   alt: "ireland fair 6",

      // },
      {
        id: 15,
        src: "/ireland-fair7.jpg",
        alt: "ireland fair 7",
      },
      {
        id: 16,
        src: "/ireland-fair8.jpg",
        alt: "ireland fair 8",
      },
      {
        id: 17,
        src: "/ireland-fair9.jpg",
        alt: "ireland fair 9",
      },
      {
        id: 18,
        src: "/ireland-fair10.jpg",
        alt: "ireland fair 10",
      },
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
      },
      {
        id: 20,
        src: "/griffith-fair2.JPG",
        alt: "griffith fair 2",
      },
      {
        id: 21,
        src: "/griffith-fair3.JPG",
        alt: "griffith fair 3",
      },
      {
        id: 22,
        src: "/griffith-fair4.JPG",
        alt: "griffith fair 4",
      },
      {
        id: 23,
        src: "/griffith-fair5.JPG",
        alt: "griffith fair 5",
      },
      {
        id: 24,
        src: "/griffith-fair6.JPG",
        alt: "griffith fair 6",
      },
      // {
      //   id: 25,
      //   src: "/griffith-fair7.JPG",
      //   alt: "griffith fair 7",

      // }
    ],
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
    country: "ireland",
    image: "/ireland.png",
    flag: "/ireland-flag.png",
    description:
      "Students and professionals choose Ireland for its high-quality universities, growing job market, and peaceful lifestyle.",
    universities: [
      "St. Clair College - Downtown Campus",
      "Algoma University – Brampton",
      "Capilano University – North Vancouver",
      "Crandall University",
    ],
  },
  {
    id: 2,
    country: "united kingdom",
    image: "/uk.jpg",
    flag: "/uk-flag.jpg",
    description:
      "The UK offers world-class education, diverse career opportunities, and a multicultural environment. With rich history and modern innovation.",
    universities: [
      "Coventry University",
      "Kingston University London",
      "London Metropolitan University",
      "Brunel University London",
    ],
  },
  {
    id: 3,
    country: "new zealand",
    image: "/new-zealand.png",
    flag: "/nz-flag.png",
    description:
      "New Zealand provides a safe, nature-filled environment with excellent universities and a strong work-life balance.",
    universities: [
      "Southern New Hampshire University",
      "University of Arizona",
      "Southeast Missouri State University",
      "Tennessee Tech University",
    ],
  },
  {
    id: 4,
    country: "australia",
    image: "/australia.jpg",
    flag: "/australia-flag.svg",
    description:
      "Australia is known for its high standard of living, global-ranking universities, and steady demand for skilled professionals.",
    universities: [
      "Southern New Hampshire University",
      "University of Arizona",
      "Southeast Missouri State University",
      "Tennessee Tech University",
    ],
  },
  {
    id: 5,
    country: "finland",
    image: "/finland.jpg",
    flag: "/finland-flag.png",
    description:
      "It offers a peaceful environment, modern infrastructure, and strong opportunities for students and researchers.",
    universities: [
      "Southern New Hampshire University",
      "University of Arizona",
      "Southeast Missouri State University",
      "Tennessee Tech University",
    ],
  },
  {
    id: 6,
    country: "latvia",
    image: "/latvia.png",
    flag: "/latvia-flag.png",
    description:
      "With its strategic European location, the country provides opportunities for international students and young professionals.",
    universities: [
      "Southern New Hampshire University",
      "University of Arizona",
      "Southeast Missouri State University",
      "Tennessee Tech University",
    ],
  },
  {
    id: 7,
    country: "netherlands",
    image: "/netherlands.jpg",
    flag: "/netherlands-flag.png",
    description:
      "Its modern lifestyle and international community make it a popular destination for students and skilled workers.",
    universities: [
      "Southern New Hampshire University",
      "University of Arizona",
      "Southeast Missouri State University",
      "Tennessee Tech University",
    ],
  },
  {
    id: 8,
    country: "lithuania",
    image: "/lithuania.jpg",
    flag: "/lithuania-flag.png",
    description:
      "Lithuania provides affordable education, fast-growing digital industries, and a welcoming environment for newcomers.",
    universities: [
      "Southern New Hampshire University",
      "University of Arizona",
      "Southeast Missouri State University",
      "Tennessee Tech University",
    ],
  },
  {
    id: 9,
    country: "malta",
    image: "/malta.jpg",
    flag: "/malta-flag.png",
    description:
      "Malta combines a warm climate, English-speaking environment, and growing job opportunities in gaming, fintech, and tourism.",
    universities: [
      "Southern New Hampshire University",
      "University of Arizona",
      "Southeast Missouri State University",
      "Tennessee Tech University",
    ],
  },
  {
    id: 10,
    country: "more schengen destinations",
    image: "/Algoma University.jpeg",
    flag: "/schengen.png",
    universities: [
      "Southern New Hampshire University",
      "University of Arizona",
      "Southeast Missouri State University",
      "Tennessee Tech University",
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
      "+94 75 949 4999 - +94 75 949 4444",
      "contact@marylanconsultancy.lk",
      "135, 2nd Floor, Tisara Plaza, Dutugamunu Street, Kohuwala, Nugegoda, Sri Lanka",
    ],
  },
];
