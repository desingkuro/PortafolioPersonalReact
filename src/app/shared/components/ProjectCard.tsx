
import { motion } from "motion/react"
import { Link } from "react-router";

export interface ProjectCardProps {
    title: string;
    image: string;
    id: number;
    setLoadimage: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProjectCard({ title, image, id, setLoadimage }: ProjectCardProps) {
    return (
        <motion.div
            layoutId={`project-card-${id}`}
            style={{ viewTransitionName: `project-image-${id}` }}
            className="relative w-auto h-auto aspect-[16/9] bg-gray-900 min-w-[calc(40%-20px)] flex items-center justify-center overflow-hidden rounded-[20px]">
            <div className="absolute z-[15] w-full h-full top-0 left-0 ">
            </div>
            <img
                onLoad={() => setLoadimage(true)}
                className="w-full h-full object-center object-center" src={image} alt={title} />
            <Link
                to={`/projects/${id}`}
                className="absolute z-20 bottom-4 bg-black/80 rounded-[20px] !p-2 !px-4 w-[98%] flex items-center justify-between text-[1rem] 
                transition-all duration-300 ease-in-out
                hover:!px-6 hover:cursor-pointer
                "
            >
                <h2 className="neue-machina-ultraBold text-ellipsis text-wrap line-clamp-1">{title}</h2>
                <p className="neue-machina-ultraBold">{"→"}</p>
            </Link>
        </motion.div>
    )
}