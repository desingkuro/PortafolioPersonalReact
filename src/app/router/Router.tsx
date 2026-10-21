import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import LayoutMain from "../layout/LayoutMain";
import PageLoader from "../shared/components/PageLoader";

const Home = lazy(() => import("../pages/home/Home"));
const Projects = lazy(() => import("../pages/projects/Projects"));
const DetailProject = lazy(() => import("../pages/projects/DetailProject"));
const Skills = lazy(() => import("../pages/skills/Skills"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const AboutPage = lazy(() => import("../pages/about/About"));
const NotFoundPage = lazy(() => import("../pages/notFound/NotFound"));

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
