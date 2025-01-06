import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import ProjectDetails1 from './Pages/ProjectDetails/ProjectDetails1';
import ProjectDetails3 from './Pages/ProjectDetails/ProjectDetails3';
import ProjectDetails2 from './Pages/ProjectDetails/ProjectDetails2';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "project1",
    element: <ProjectDetails1></ProjectDetails1>
  },
  {
    path: "project2",
    element: <ProjectDetails2></ProjectDetails2>
  },
  {
    path: "project3",
    element: <ProjectDetails3></ProjectDetails3>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
