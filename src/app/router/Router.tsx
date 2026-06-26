import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import LayoutMain from "../layout/LayoutMain";

const Home = lazy(() => import("../pages/home/Home"));
const Projects = lazy(() => import("../pages/projects/Projects"));
const DetailProject = lazy(() => import("../pages/projects/DetailProject"));
const Skills = lazy(() => import("../pages/skills/Skills"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const AboutPage = lazy(() => import("../pages/about/About"));
const NotFoundPage = lazy(() => import("../pages/notFound/NotFound"));

function PageLoader() {
    return (
        <div className="w-full h-full flex items-center justify-center !py-20">
            <p className="text-white/50 text-lg">Cargando...</p>
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutMain />,
        children: [
            {
                path: "/",
                element: <Suspense fallback={<PageLoader />}><Home /></Suspense>
            },
            {
                path: "/projects",
                element: <Suspense fallback={<PageLoader />}><Projects /></Suspense>,
            },
            {
                path: "/projects/:id",
                element: <Suspense fallback={<PageLoader />}><DetailProject /></Suspense>
            },
            {
                path: "/skills",
                element: <Suspense fallback={<PageLoader />}><Skills /></Suspense>
            },
            {
                path: "/contact",
                element: <Suspense fallback={<PageLoader />}><Contact /></Suspense>
            },
            {
                path: "/about",
                element: <Suspense fallback={<PageLoader />}><AboutPage /></Suspense>
            },
            {
                path: "*",
                element: <Suspense fallback={<PageLoader />}><NotFoundPage /></Suspense>
            }
        ]
    },
]);

export default router;
