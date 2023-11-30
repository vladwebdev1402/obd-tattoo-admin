import Header from "@/components/Header/Header";
import SwitchTable from "@/components/SwitchTable/SwitchTable";
import { Outlet } from "react-router-dom";
import React from "react";

const Root = () => {
  return (
    <>
      <Header />
      <SwitchTable />
      <Outlet />
      <Header className="footer" />
    </>
  );
};

export default Root;
