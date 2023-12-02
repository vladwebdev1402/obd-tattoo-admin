import PromocodeStore from "@/store/PromocodeStore/PromocodeStore";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import Create from "./components/Create";
import Data from "./components/Data";
import HeadDataContainer from "@/components/HeadDataContainer/HeadDataContainer";
import Edit from "./components/Edit";

const PromocodePage = observer(() => {
  const [currentId, setCurrentId] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    PromocodeStore.getAll();
  }, []);

  return (
    <section className={`container`}>
      <Create />
      <HeadDataContainer />
      <Data setOpen={setOpen} setCurrent={setCurrentId} />
      {open && <Edit setOpen={setOpen} current={currentId} />}
    </section>
  );
});

export default PromocodePage;
