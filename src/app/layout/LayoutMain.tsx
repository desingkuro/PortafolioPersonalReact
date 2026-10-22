import { useLayoutEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "../shared/components/Header";
import BackGroundImage from "../shared/components/backGroundImage";

export default function LayoutMain() {
    const mainRef = useRef<HTMLElement>(null);
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        const main = mainRef.current;
        if (!main) return;

        main.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [pathname]);

    return (
        <div className="w-full h-screen bg-primary">
            <BackGroundImage>
                <Header />
                <main
                    ref={mainRef}
                    className="flex-1 overflow-y-auto scroll-smooth"
                >
                    <Outlet />
                </main>
            </BackGroundImage>
        </div>
    )
}