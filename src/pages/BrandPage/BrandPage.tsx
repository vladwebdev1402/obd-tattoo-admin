import React, { useEffect, useState } from "react";
import Create from "./components/Create";
import Data from "./components/Data";
import Edit from "./components/Edit";
import { observer } from "mobx-react-lite";
import BrandStore from "@/store/BrandStore/BrandStore";

const BrandPage = observer(() => {
  const [open, setOpen] = useState(false);
  const [currentId, setcurrent] = useState("");
  useEffect(() => {
    BrandStore.getAll();
  }, []);
  return (
    <section className={`container`}>
      {/* <Create /> */}
      {/* <Data /> */}
      <div>{BrandStore.isLoadingComplete && BrandStore.data[0].name}</div>
      {/* {open && <Edit />} */}
    </section>
  );
});

export default BrandPage;
