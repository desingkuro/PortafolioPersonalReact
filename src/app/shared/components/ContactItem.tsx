import type { SocialMediaProps } from "./SocialMedia";
import SocialMedia from "./SocialMedia";
import { motion } from "framer-motion";

export interface ContactItemProps {
    socialMedia?: SocialMediaProps[] | null;
    firstText: string;
    secondText?: string | null;
    icon?: React.ReactNode;
    index: number;
}

export default function ContactItem({ socialMedia, firstText, secondText, icon, index }: ContactItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className=" sm:h-28 h-[110px] w-full flex justify-start flex-wrap flex-col min-w-[360px]">
            <header className="flex items-center justify-center h-[50px] w-[20%]">
                {icon}
            </header>
            <main className="w-[80%] flex flex-wrap">
                <p className="w-full h-[50px] flex items-center justify-start">
                    <span className="text-[18px] sm:text-2xl neue-machina-ultraBold">
                        {firstText}
                    </span>
                </p>
                <p className={secondText !== null ? "w-full h-[30px] flex items-center justify-start" : "hidden"}>
                    {secondText !== null && (
                        <span className=" text-[16px] sm:text-xl neue-machina-ultraBold whitespace-normal">
                            {secondText}
                        </span>
                    )}
                </p>
                <div className="w-full flex items-center justify-start flex-wrap">
                    {
                        socialMedia !== null && socialMedia?.map((socialMedia: SocialMediaProps, index: number) => {
                            return (
                                <SocialMedia
                                    key={index}
                                    url={socialMedia.url}
                                    icon={socialMedia.icon}
                                    name={socialMedia.name}
                                />
                            )
                        })
                    }
                </div>
            </main>
        </motion.div>
    );
}