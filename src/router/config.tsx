import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import PropertiesPage from "../pages/properties/page";
import PropertyDetailPage from "../pages/properties-detail/page";
import RoomsPage from "../pages/rooms/page";
import GalleryPage from "../pages/gallery/page";
import AboutPage from "../pages/about/page";
import ContactPage from "../pages/contact/page";
import BlogPage from "../pages/blog/page";
import BlogDetailPage from "../pages/blog/detail/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/properties",
    element: <PropertiesPage />,
  },
  {
    path: "/properties/:id",
    element: <PropertyDetailPage />,
  },
  {
    path: "/rooms",
    element: <RoomsPage />,
  },
  {
    path: "/gallery",
    element: <GalleryPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/blog/:slug",
    element: <BlogDetailPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
