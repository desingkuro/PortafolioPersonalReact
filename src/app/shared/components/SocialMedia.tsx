import '../styles/SocialMedia.css'


export interface SocialMediaProps {
    url: string;
    icon: React.ReactNode;
    name: string;
}

export default function SocialMedia({ url, icon, name, }: SocialMediaProps) {
    return (
        <div className="social-links">
            <div className="social-btn flex-center" >
                {icon}
                <span className='!text-black !font-bold'><a className='!text-black !font-bold' target='_blank' href={url}>{name}</a></span>
            </div>
        </div>
    );
}