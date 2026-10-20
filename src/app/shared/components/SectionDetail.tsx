import Tag from "./Tag";

interface LinkItem {
    name: string;
    url: string;
}

interface SectionDetailProps {
    title: string;
    listItems: string[] | LinkItem[];
    text?: string;
    type: "tecnologies" | "links" | "text";
}

export default function SectionDetail({
    title,
    listItems,
    text,
    type,
}: SectionDetailProps) {

    const typeReturnItems = {
        "links": (listItems as LinkItem[]).map((item: LinkItem) => {
            return (
                <li key={item.name}>
                    <a
                        href={item.url}
                        className="inline-block cursor-pointer transition-all ease-in-out duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414]"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Tag type="links">{item.name}</Tag>
                    </a>
                </li>
            )
        }),
        "tecnologies": (listItems as string[]).map((item: string) => {
            return (
                <li key={item}>
                    <Tag type="tecnology" className="text-[1rem] neue-machina-ultraBold">{item}</Tag>
                </li>
            )
        }),
        "text": <p>{text}</p>,
    }

    return (
        <section className="flex flex-wrap flex-col gap-4 md:w-[90%] sm:w-[95%] py-2 min-w-[300px] !mb-4">
            <h2 className="text-[2rem] neue-machina-ultraBold">{title}</h2>
            {type === "text" ? typeReturnItems[type] : <ul className="flex flex-wrap gap-2">{typeReturnItems[type]}</ul>}
        </section>
    )
}
