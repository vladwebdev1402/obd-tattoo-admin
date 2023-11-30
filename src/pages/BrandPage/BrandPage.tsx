import React, { useEffect, useState } from "react";
import Create from "./components/Create";
import Data from "./components/Data";
import Edit from "./components/Edit";
import { observer } from "mobx-react-lite";
import BrandStore from "@/store/BrandStore/BrandStore";
import HeadDataContainer from "@/components/HeadDataContainer/HeadDataContainer";
import SearchStore from "@/store/SearchStore/SearchStore";

const BrandPage = observer(() => {
  const [open, setOpen] = useState(false);
  const [currentId, setCurrent] = useState("");
  useEffect(() => {
    BrandStore.getAll();
    SearchStore.setValue("");
  }, []);
  return (
    <section className={`container`}>
      <Create />
      <HeadDataContainer />
      <Data setCurrent={setCurrent} setOpen={setOpen} />
      {open && <Edit current={currentId} setOpen={setOpen} />}
    </section>
  );
});

export default BrandPage;
