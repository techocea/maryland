import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image, { StaticImageData } from "next/image";

interface WhyUsCardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const WhyUsCard = ({ item }: { item: WhyUsCardProps }) => {
  const { image, title, description } = item;
  return (
    <Card>
      <CardHeader className="flex items-center justify-center md:items-start md:justify-start flex-col">
        <Image
          src={image}
          width={50}
          height={50}
          alt="Study abroad,study abroad,colombo,near me"
        />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="md:text-left">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default WhyUsCard;
