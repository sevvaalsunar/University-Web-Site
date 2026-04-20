import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Faculty from "./pages/Faculty";
import Curriculum from "./pages/Curriculum";
import Projects from "./pages/Projects";
import Research from "./pages/Research";
import Admissions from "./pages/Admissions";
import News from "./pages/News";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "faculty", Component: Faculty },
      { path: "curriculum", Component: Curriculum },
      { path: "projects", Component: Projects },
      { path: "research", Component: Research },
      { path: "admissions", Component: Admissions },
      { path: "news", Component: News },
      { path: "contact", Component: Contact },
    ],
  },
]);