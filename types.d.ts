import { StaticImageData } from "next/image";

export type NavItem = {
  id: number;
  label: string;
  href: string;
};

export type WhyUs = {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
};

export type Testimonial = {
  id: number;
  saying: string;
  name: string;
  avatar: string;
  university: string;
};

export type FooterLink = {
  title: string;
  href: string;
};

export type FooterSection = {
  id: number;
  label?: string;
  links?: FooterLink[];
  contacts?: string[];
};

export type Service = {
  id: string;
  image: string;
  title: string;
};

export type UniversityTypes = {
  id: number;
  country: string;
  universities: oneUniversity[];
};

export type oneUniversity = {
  name: string;
  image: string;
};

export type SidebarTypes = {
  id: number;
  label: string;
};

export type GalleryImage = {
  id: number;
  title: string;
  images: ImageType[];
};

export type StylishGalleryProps = {
  images: ImageType[];
};

export type ImageType = {
  id: number;
  src: string;
  alt: string;
  aspectRatio?: "square" | "portrait" | "landscape";
};
