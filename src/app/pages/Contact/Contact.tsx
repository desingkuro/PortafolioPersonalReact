import { motion } from "framer-motion";
import ContactItem, { type ContactItemProps } from "../../shared/components/ContactItem";
import { useContext } from "react";
import { contextoPrincipal } from "../../shared/providers/context/contexto";

export default function Contact() {
    const { contactItems } = useContext(contextoPrincipal);
    return (
        <motion.div
            className="w-full h-full mx-auto flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <main className="flex items-start sm:items-center justify-center sm:h-full h-[600px] sm:w-[90%] w-[100%] min-w-[380px] flex-wrap">
                <section className="max-w-1/2 sm:w-50% w-full min-w-[350px] h-full flex items-center justify-between flex-wrap">
                    <h1 className="sm:text-9xl text-7xl">Get in touch.</h1>
                    <p className="sm:text-6xl text-3xl max-w-[500px]">Start a conversation</p>
                </section>

                <section className="max-w-1/2 min-w-[350px] sm:h-full h-[600px] flex items-center justify-center !pb-10">
                    <main className="flex flex-wrap">
                        {
                            contactItems.map((contactItem: ContactItemProps, index) => {
                                return (
                                    <ContactItem
                                        key={index}
                                        socialMedia={contactItem.socialMedia}
                                        firstText={contactItem.firstText}
                                        secondText={contactItem.secondText}
                                        icon={contactItem.icon}
                                        index={index}
                                    />
                                )
                            })
                        }
                    </main>
                </section>
            </main>
        </motion.div>
    );
}