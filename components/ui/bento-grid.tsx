import { cn } from "@/lib/utils";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    saying,
    name,
    university,
    header,
    icon,
    avatar,
}: {
    className?: string;
    name: string;
    university: string;
    avatar: string;
    saying: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "group/bento row-span-1 relative flex flex-col justify-between space-y-4 rounded-xl border border-[rgba(255,255,255,0.1)] shadow-lg shadow-primary/10 bg-accent p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
                className
            )}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-quote absolute -right-2 -top-2 w-16 h-16 text-[#22C55E]/20"
            >
                <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
            </svg>
            {header}
            <div className="transition duration-200 group-hover/bento:translate-x-2">
                {icon}

                <div className="font-sans text-sm font-medium text-muted-foreground">{saying}</div>
            </div>
            <div className="flex items-center jsutify-center gap-2">
                <div className="rounded-full w-10 h-10 flex items-center justify-center">
                    <img src={avatar} alt={name + university} className="rounded-full w-10 h-10 object-contain" />
                </div>
                <div className="flex flex-col gap-1">
                    <h4 className="font-bold text-sm text-black capitalize">{name}</h4>
                    <p className="text-sm text-muted-foreground">{university}</p>
                </div>
            </div>
        </div>
    );
};
