import background from '../../../assets/img/background.webp'

export default function BackGroundImage({children}: {children: React.ReactNode}) {
    return (
        <div className="h-full w-full relative">
            {<img src={background} alt="background" className="h-full w-full object-cover blur-xs" />}
            <div className="absolute inset-0 flex flex-col">
                {children}
            </div>
        </div>
    )
}