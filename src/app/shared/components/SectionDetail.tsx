import Tag from "./Tag";

interface SectionDetailProps {
    title: string;
    listItems: string[] | any[];
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
        "links": listItems.map((item: any, index: number) => {
            return (
                <a href={item.url} className="cursor-pointer" target="_blank" rel="noopener noreferrer" key={index}>
                    <Tag className="text-[1rem] neue-machina-ultraBold hover:opacity-80 hover:scale-110 transition-all duration-300 ease-in-out">{item.name}</Tag>
                </a>
            )
        }),
        "tecnologies": listItems.map((item: any, index: number) => {
            return (
                <Tag className="text-[1rem] neue-machina-ultraBold" key={index}>{item}</Tag>
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