import CityPage from "@/pages/CityPage/CityPage";
import MainPage from "@/pages/MainPage/MainPage";
import Root from "@/pages/Root/Root";
import StreetPage from "@/pages/StreetPage/StreetPage";
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path="city" element={<CityPage />} />
      <Route path="street" element={<StreetPage />} />
    </Route>
  )
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
