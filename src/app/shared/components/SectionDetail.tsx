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
                <a href={item.url} className="cursor-pointer transition-all ease-in-out duration-300" target="_blank" rel="noopener noreferrer" key={item.name}>
                    <Tag type="links" >{item.name}</Tag>
                </a>
            )
        }),
        "tecnologies": (listItems as string[]).map((item: string) => {
            return (
                <Tag type="tecnology" className="text-[1rem] neue-machina-ultraBold" key={item}>{item}</Tag>
            )
        }),
        "text": <p>{text}</p>,
    }

    return (
        <section className="flex flex-wrap flex-col gap-4 md:w-[90%] sm:w-[95%] py-2 min-w-[300px] !mb-4">
            <p className="text-[2rem] neue-machina-ultraBold">{title}</p>
            {type === "text" ? typeReturnItems[type] : <ul className="flex flex-wrap gap-2">{typeReturnItems[type]}</ul>}
        </section>
    )
}
