import React, { useState, useEffect } from "react";
import Create from "./components/Create";
import Data from "./components/Data";
import { observer } from "mobx-react-lite";
import HeadDataContainer from "@/components/HeadDataContainer/HeadDataContainer";
import ItemStore from "@/store/ItemStore/ItemStore";
import Edit from "./components/Edit";

const ItemPage = observer(() => {
  const [open, setOpen] = useState(false);
  const [currentid, setCurrentId] = useState("");

  useEffect(() => {
    ItemStore.getAll();
  }, []);

  return (
    <section className={`container`}>
      <Create />
      <HeadDataContainer />
      <Data setOpen={setOpen} setCurrent={setCurrentId} />
      {open && <Edit setOpen={setOpen} current={currentid} />}
    </section>
  );
});

export default ItemPage;
