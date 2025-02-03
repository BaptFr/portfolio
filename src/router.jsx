import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { lazy } from "react";

const LandingPage = lazy(() => import('./pages/landingpage/Landingpage.jsx'));
const PresentationPage = lazy(() => import('./pages/presentationpage/Presentationpage'));
const ProjectsPage= lazy(() => import('./pages/projectspage/Projectspage'));
const ContactPage = lazy(() => import('./pages/contactpage/ContactPage'));
const ErrorPage = lazy(() => import('./pages/errorpage/Errorpage'));


export const router = createBrowserRouter([
    {
        path:'/portfolio/',
        element: <App />,
        children: [
            {
                index: true,
                element: <LandingPage />
            },
            {
                path:'presentation',
                element: <PresentationPage />
            },
            {
                path:'projects',
                element: <ProjectsPage />
            },
            {
                path:'contact',
                element: <ContactPage />
            },
            {
                path:'*',
                element: <ErrorPage />
            }
        ]
    },
]);