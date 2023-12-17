import AuthRoot from "@/pages/AuthRoot/AuthRoot";
import BrandPage from "@/pages/BrandPage/BrandPage";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";
import IdNamePage from "@/pages/IdNamePage/IdNamePage";
import ItemPage from "@/pages/ItemPage/ItemPage";
import LoginPage from "@/pages/LoginPage/LoginPage";
import MainPage from "@/pages/MainPage/MainPage";
import NamePromtPage from "@/pages/NamePromtPage";
import PromocodePage from "@/pages/PromocodePage/PromocodePage";
import Root from "@/pages/Root/Root";
import ServicePage from "@/pages/ServicesPage/ServicePage";
import SignPage from "@/pages/SignPage/SignPage";
import StreetPage from "@/pages/StreetPage/StreetPage";
import AuthStore from "@/store/AuthStore/AuthStore";
import { observer } from "mobx-react-lite";
import st from "./AppRouter.module.scss";
import React, { useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import OrderPage from "@/pages/OrderPage/OrderPage";

const privateRouter = createBrowserRouter(
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
      <Route path="order" element={<OrderPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const publicRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AuthRoot />}>
      <Route index element={<LoginPage />} />
      <Route path="/signup" element={<SignPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const AppRouter = observer(() => {
  useEffect(() => {
    setTimeout(() => {
      AuthStore.checkAuth();
    }, 100);
  }, []);
  return AuthStore.isLoadingComplete ? (
    AuthStore.auth ? (
      <RouterProvider router={privateRouter} />
    ) : (
      <RouterProvider router={publicRouter} />
    )
  ) : (
    <div className={st.loader}></div>
  );
});

export default AppRouter;
