"use client";

import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { UNIVERSITY_DATA } from "@/utils/constants";
import { ChevronRight, SendHorizonal } from "lucide-react";

const CountrySelector = ({ currentSlug }: { currentSlug: string }) => {
    const router = useRouter();
    return (
        <div className="bg-secondary w-full h-auto rounded-md p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2">
                <SendHorizonal size={20} className="text-primary" />
                <h2 className="text-xl font-bold">Country</h2>
            </div>
            <ul className="space-y-2">
                {UNIVERSITY_DATA.map((item) => (
                    <li key={item.id}>
                        <Button
                            variant={
                                item.country.replace(/\s+/g, "-").toLowerCase() === currentSlug
                                    ? "outline"
                                    : "ghost"
                            }
                            onClick={() =>
                                router.push(
                                    `/study-destinations/${item.country
                                        .replace(/\s+/g, "-")
                                        .toLowerCase()}`
                                )
                            }
                            size="lg"
                            className="w-full bg-white pl-2 font-semibold justify-start capitalize hover:bg-primary-foreground/50 hover:text-white transition-all duration-300"
                        >
                            <ChevronRight /> {item.country}
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CountrySelector;
