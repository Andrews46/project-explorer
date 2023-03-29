import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";
import Activities from "./pages/activities";
import ActivityId from "./pages/activities/id";
import City from "./pages/City";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="activities" element={<Activities />} />
      <Route path="activities/:id" element={<ActivityId />} />
      <Route path="city/:id" element={<City />} />
    </Route>
  )
);

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
