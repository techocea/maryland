import CountrySelector from "@/components/CountrySelector";
import CTASection from "@/components/CTASection";
import { Separator } from "@/components/ui/separator";
import { UNIVERSITY_DATA } from "@/utils/constants";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const CountryPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;
    const country = UNIVERSITY_DATA.find(
        (d) =>
            d.country.replace(/\s+/g, "-").toLowerCase() ===
            (slug ?? "").toLowerCase()
    );

    if (!country) {
        notFound();
    }

    const displayName = slug
        ? slug.replace("-", " ").charAt(0) + slug.replace("-", " ").slice(1)
        : "";

    return (
        <div className="lg:max-w-6xl px-4 sm:px-6 lg:px-10 mb-12 w-full mx-auto py-12">
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Left side - Image */}
                <div className="flex-[2] flex flex-col gap-6">
                    <div className="w-48 h-48 bg-gray-200 rounded-lg overflow-hidden">
                        <Image
                            src={country?.flag ?? ""}
                            width={250}
                            height={250}
                            alt={displayName}
                            quality={100}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h1 className="text-4xl font-bold uppercase text-primary">
                        Study in {displayName}
                    </h1>
                    <p className="leading-relaxed text-muted-foreground -mt-2">
                        {country?.readMore ?? ""}
                    </p>

                    <Separator />

                    <div className="space-y-2">
                        <h2 className="font-semibold uppercase text-lg tracking-wide text-primary-foreground">
                            leading universities in {displayName}
                        </h2>
                        <ul className="space-y-2">
                            {UNIVERSITY_DATA.map(
                                (item) =>
                                    item.country.replace(/\s+/g, "-").toLowerCase() === slug && (
                                        <React.Fragment key={item.id}>
                                            <div
                                                className={`grid gap-2 ${item.universities.length > 10
                                                    ? "sm:grid-cols-1 lg:grid-cols-2"
                                                    : "grid-cols-1"
                                                    }`}
                                            >
                                                {item.universities.map((uni, idx) => (
                                                    <div key={idx} className="py-1">
                                                        <Link
                                                            href={typeof uni === "string" ? uni : uni.url}
                                                            className="flex items-center gap-1 text-sm text-muted-foreground"
                                                        >
                                                            <ChevronRight />
                                                            {typeof uni === "string" ? uni : uni.name}
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
                                        </React.Fragment>
                                    )
                            )}
                        </ul>
                    </div>
                </div>

                {/* Right side - Country Selector & CTA */}
                <div className="flex-1 flex flex-col gap-8">
                    <CountrySelector currentSlug={slug} />
                    <CTASection />
                </div>
            </div>
        </div>
    );
};

export default CountryPage;
