import BrandPage from "@/pages/BrandPage/BrandPage";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";
import IdNamePage from "@/pages/IdNamePage/IdNamePage";
import ItemPage from "@/pages/ItemPage/ItemPage";
import MainPage from "@/pages/MainPage/MainPage";
import NamePromtPage from "@/pages/NamePromtPage";
import PromocodePage from "@/pages/PromocodePage/PromocodePage";
import Root from "@/pages/Root/Root";
import ServicePage from "@/pages/ServicesPage/ServicePage";
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
      <Route path="brand" element={<BrandPage />} />
      <Route path="promocode" element={<PromocodePage />} />
      <Route path="service" element={<ServicePage />} />
      <Route path="item" element={<ItemPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
