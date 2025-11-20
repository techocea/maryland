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
    id: 3,
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
      "Leaving home felt like walking into fog, but the team cleared every doubt before it became a problem. Visa, university shortlist, accommodation—everything flowed step by step. Studying in the UK felt impossible until they showed me how possible it actually was.",
    avatar: "/testimonial1.jpeg",
    name: "venuja pethmin",
    university: "University of Melbourne",
  },
  {
    id: 2,
    saying:
      "I used to think studying abroad was only for privileged students. They broke that myth in the first meeting. They helped me find scholarships, guided me through applications, and kept reminding me I’m capable of more than I think. Now I’m in Melbourne, doing work I never imagined.",
    avatar: "/testimonial2.jpeg",
    name: "isuru masinghe",
    university: "University of Melbourne",
  },
  {
    id: 3,
    saying:
      "I didn’t just get paperwork support—I got direction. Every time I got stuck, they checked in like mentors, not agents. Thanks to them, I’m studying in Canada and working part-time in a field I love.",
    avatar: "/testimonial3.jpeg",
    name: "kanushka nanayakkara",
    university: "University of Melbourne",
  },
  {
    id: 4,
    saying:
      "The entire process felt scientific—every choice explained, every risk measured. That gave me confidence. My admission in Germany came through without a single document returned for correction. That precision changed everything.",
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
    readMore:
      "Ireland blends modern innovation with centuries of culture. Students benefit from globally recognized universities, strong tech-sector partnerships, and a welcoming atmosphere for international learners. The country offers opportunities in IT, business, health sciences, and creative fields, supported by a growing economy and vibrant student communities.",
    universities: [
      {
        name: "Atlantic Technological University (ATU)",
        url: "https://www.educationinireland.com/en/where-can-i-study-/view-all-universities-colleges/atlantic-technological-university-atu.html",
      },
      {
        name: "Dublin City University (DCU)",
        url: "https://www.educationinireland.com/en/where-can-i-study-/view-all-universities-colleges/dublin-city-university-introduction.html",
      },
      {
        name: "Maynooth University",
        url: "https://www.educationinireland.com/en/where-can-i-study-/view-all-universities-colleges/national-university-of-ireland-maynooth-introduction.html",
      },
      {
        name: "Munster Technological University",
        url: "https://www.educationinireland.com/en/where-can-i-study-/view-all-universities-colleges/munster-technological-university-introduction.html",
      },
      {
        name: "University of Galway (formerly NUI Galway)",
        url: "https://www.educationinireland.com/en/where-can-i-study-/view-all-universities-colleges/university-of-galway-introduction.html",
      },
      {
        name: "Royal College of Surgeons in Ireland",
        url: "https://www.educationinireland.com/en/where-can-i-study-/view-all-universities-colleges/royal-college-of-surgeons-in-ireland-introduction.html",
      },
      {
        name: "South East Technological University",
        url: "https://www.educationinireland.com/en/where-can-i-study-/view-all-universities-colleges/south-east-technological-university.html",
      },
      {
        name: "Trinity College Dublin (TCD)",
        url: "https://www.educationinireland.com/en/where-can-i-study-/view-all-universities-colleges/trinity-college-dublin-introduction.html",
      },
      {
        name: "Technological University Dublin",
        url: "https://www.educationinireland.com/en/where-can-i-study-/view-all-universities-colleges/technological-university-dublin-.html",
      },
      {
        name: "Technological University of the Shannon - Midlands Midwest",
        url: "https://www.educationinireland.com/en/where-can-i-study-/view-all-universities-colleges/technological-university-of-the-shannon-midlands-midwest.html",
      },
      {
        name: "University College Cork (UCC)",
        url: "https://www.educationinireland.com/en/where-can-i-study-/view-all-universities-colleges/university-college-cork-ucc-introduction.html",
      },
      {
        name: "University College Dublin (UCD)",
        url: "https://www.educationinireland.com/en/where-can-i-study-/view-all-universities-colleges/university-college-dublin-introduction.html",
      },
      {
        name: "University of Limerick",
        url: "https://www.educationinireland.com/en/where-can-i-study-/view-all-universities-colleges/university-of-limerick-ul-introduction.html",
      },
    ],
  },
  {
    id: 2,
    country: "united kingdom",
    image: "/uk.jpg",
    flag: "/uk-flag.jpg",
    description:
      "The UK offers world-class education, diverse career opportunities, and a multicultural environment. With rich history and modern innovation.",
    readMore:
      "The UK is home to some of the world’s most respected universities and a diverse range of academic pathways. Its strong employment market, multicultural environment, and global business connections attract students seeking high-quality education and future career opportunities across technology, finance, healthcare, and the arts.",
    universities: [
      {
        name: "Leeds Beckett University",
        url: "https://www.leedsbeckett.ac.uk/",
      },
      {
        name: "Manchester Metropolitan University",
        url: "https://www.mmu.ac.uk/",
      },
      {
        name: "University of the West of England",
        url: "https://www.uwe.ac.uk/",
      },
      {
        name: "York St John University",
        url: "https://www.yorksj.ac.uk/",
      },
      {
        name: "University of Bradford",
        url: "https://www.bradford.ac.uk/",
      },
      {
        name: "University of Huddersfield",
        url: "https://www.hud.ac.uk/",
      },
      {
        name: "London South Bank University",
        url: "https://www.lsbu.ac.uk/",
      },
      {
        name: "University of the West of Scotland",
        url: "https://www.uws.ac.uk/",
      },
      {
        name: "Regent College London",
        url: "https://www.rcl.ac.uk/",
      },

      {
        name: "University of Hull",
        url: "https://www.hull.ac.uk/",
      },

      {
        name: "University of Sunderland",
        url: "https://www.sunderland.ac.uk/",
      },
    ],
  },
  {
    id: 3,
    country: "new zealand",
    image: "/new-zealand.png",
    flag: "/nz-flag.png",
    description:
      "New Zealand provides a safe, nature-filled environment with excellent universities and a strong work-life balance.",
    readMore:
      "New Zealand offers an ideal balance between academic excellence and quality of life. Its universities rank highly for research, teaching, and student experience. The country’s natural beauty, friendly communities, and emphasis on sustainability create a safe and inspiring learning environment for international students.",
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
    readMore:
      "Australia is one of the most popular study destinations due to its top-tier universities, strong economy, and multicultural cities. Students have access to world-leading research facilities, diverse work opportunities, and a lifestyle that promotes health, safety, and long-term career development in competitive global industries.",
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
    readMore:
      "Finland is widely recognised for its exceptional education system, innovative technology sector, and high quality of life. International students appreciate the country’s strong focus on research, creativity, and problem-solving. Safe environments, modern infrastructure, and student-friendly policies make Finland an excellent place to pursue higher education.",
    universities: [
      {
        name: "Turku University of Applied Sciences",
        url: "https://www.turkuamk.fi/en/",
      },
      {
        name: "Karelia University of Applied Sciences",
        url: "https://www.karelia.fi/",
      },
      {
        name: "LAB University of Applied Sciences",
        url: "https://lab.fi/en",
      },
      {
        name: "LUT University",
        url: "https://www.lut.fi/en",
      },
      {
        name: "Satakunta University of Applied Sciences (SAMK)",
        url: "https://www.samk.fi/en/",
      },
      {
        name: "Seinäjoki University of Applied Sciences (SeAMK)",
        url: "https://www.seamk.fi/en/",
      },
      {
        name: "South-Eastern Finland University of Applied Sciences (XAMK)",
        url: "https://www.xamk.fi/en/",
      },
      {
        name: "KAMK University of Applied Sciences",
        url: "https://kamk.fi/en/",
      },
      {
        name: "Savonia University of Applied Sciences",
        url: "https://www.savonia.fi/en/",
      },
      {
        name: "Hanken School of Economics",
        url: "https://www.hanken.fi/en",
      },
      {
        name: "Vaasa University of Applied Sciences (VAMK)",
        url: "https://www.vamk.fi/en/",
      },
      {
        name: "Arcada University of Applied Sciences",
        url: "https://www.arcada.fi/en",
      },
      {
        name: "Tampere University of Applied Sciences (TAMK)",
        url: "https://www.tuni.fi/en",
      },
      {
        name: "University of Vaasa",
        url: "https://www.uwasa.fi/en",
      },
    ],
  },
  {
    id: 6,
    country: "latvia",
    image: "/latvia.png",
    flag: "/latvia-flag.png",
    description:
      "With its strategic European location, the country provides opportunities for international students and young professionals.",
    readMore:
      "Latvia provides affordable education with European standards, attracting students who value quality learning and a manageable cost of living. Its universities offer English-taught programs in IT, business, and engineering. The country’s emerging tech sector and central European location create opportunities for growth and exploration.",
    universities: [
      {
        name: "Turiba University",
        url: "https://www.turiba.lv/en",
      },
      {
        name: "EKA University of Applied Sciences",
        url: "https://www.augstskola.lv",
      },
    ],
  },
  {
    id: 7,
    country: "netherlands",
    image: "/netherlands.jpg",
    flag: "/netherlands-flag.png",
    description:
      "Its modern lifestyle and international community make it a popular destination for students and skilled workers.",
    readMore:
      "The Netherlands is known for its forward-thinking education, with many programs taught entirely in English. Students benefit from a collaborative academic culture, strong global rankings, and excellent employment prospects. Its cities are modern, bike-friendly, and highly international, making the learning environment both comfortable and dynamic.",
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
    readMore:
      "Lithuania has become a rising destination for international students thanks to its affordable tuition, supportive academic culture, and fast-growing digital economy. Its universities emphasize practical learning, innovation, and entrepreneurship, giving students a strong foundation for careers in technology, business, and creative industries.",
    universities: [
      {
        name: "Vilnius University",
        url: "https://www.vu.lt/en/",
      },
    ],
  },
  {
    id: 9,
    country: "malta",
    image: "/malta.jpg",
    flag: "/malta-flag.png",
    description:
      "Malta combines a warm climate, English-speaking environment, and growing job opportunities in gaming, fintech, and tourism.",
    readMore:
      "Malta combines academic opportunity with a relaxed Mediterranean lifestyle. Its English-speaking environment makes it especially accessible for international students. Malta’s economy is rapidly growing in technology, gaming, finance, and tourism, offering pathways for internships, part-time work, and long-term professional development.",
    universities: [
      "Southern New Hampshire University",
      "University of Arizona",
      "Southeast Missouri State University",
      "Tennessee Tech University",
    ],
  },
  {
    id: 10,
    country: "more european destinations",
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
      "075 949 4999 / 075 949 4444 / 0112 820 294",
      "contact@marylandconsultancy.lk",
      "135, 2nd Floor, Tisara Plaza, Dutugamunu Street, Kohuwala, Nugegoda, Sri Lanka",
    ],
  },
];
