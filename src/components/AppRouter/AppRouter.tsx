import IdNamePage from "@/pages/IdNamePage/IdNamePage";
import MainPage from "@/pages/MainPage/MainPage";
import NamePromtPage from "@/pages/NamePromtPage";
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
      <Route path="city" element={<IdNamePage link={"city"} />} />
      <Route path="category" element={<IdNamePage link={"category"} />} />
      <Route path="status" element={<IdNamePage link={"status"} />} />
      <Route path="delivery" element={<NamePromtPage link={"delivery"} />} />
      <Route path="payment" element={<NamePromtPage link={"payment"} />} />
      <Route path="street" element={<StreetPage />} />
    </Route>
  )
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
