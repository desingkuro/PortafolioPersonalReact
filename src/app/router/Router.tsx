import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import LayoutMain from "../layout/LayoutMain";
import Projects from "../pages/projects/Projects";
import DetailProject from "../pages/projects/DetailProject";
import Skills from "../pages/skills/Skills";
import Contact from "../pages/Contact/Contact";
import NotFoundPage from "../pages/notFound/NotFound";
import AboutPage from "../pages/about/About";


const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutMain />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/projects",
                element: <Projects />,
            },
            {
                path: "/projects/:id",
                element: <DetailProject />
            },
            {
                path: "/skills",
                element: <Skills />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/about",
                element: <AboutPage />
            },
            {
                path: "*",
                element: <NotFoundPage />
            }
        ]
    },
]);

export default router;
