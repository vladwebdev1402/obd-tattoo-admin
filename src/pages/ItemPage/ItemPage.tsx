import React, { useState, useEffect } from "react";
import Create from "./components/Create";
import Data from "./components/Data";
import { observer } from "mobx-react-lite";
import HeadDataContainer from "@/components/HeadDataContainer/HeadDataContainer";
import ItemStore from "@/store/ItemStore/ItemStore";
import Edit from "./components/Edit";
import BrandStore from "@/store/BrandStore/BrandStore";
import IdNameStore from "@/store/IdNameStore";
import Report from "./components/Report";

const ItemPage = observer(() => {
  const [open, setOpen] = useState(false);
  const [currentid, setCurrentId] = useState("");

  useEffect(() => {
    ItemStore.getAll({ limit: 500 });
    BrandStore.getAll();
    IdNameStore.getAll("category");
  }, []);

  return (
    <section className={`container`}>
      <Create />
      <Report />
      <HeadDataContainer />
      <Data setOpen={setOpen} setCurrent={setCurrentId} />
      {open && <Edit setOpen={setOpen} current={currentid} />}
    </section>
  );
});

export default ItemPage;
