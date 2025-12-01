import { Outlet } from "react-router";
import Header from "../shared/components/Header";
import BackGroundImage from "../shared/components/backGroundImage";

export default function LayoutMain() {
    return (
        <div className="w-full h-screen bg-primary">
            <BackGroundImage>
                <Header />
                <main className="flex-1 overflow-y-auto">
                    <Outlet />
                </main>
            </BackGroundImage>
        </div>
    )
}