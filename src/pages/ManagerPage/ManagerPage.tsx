import HeadDataContainer from "@/components/HeadDataContainer/HeadDataContainer";
import ManagerStore from "@/store/ManagerStore/ManagerStore";
import { observer } from "mobx-react-lite";
import React, { useState, useEffect } from "react";
import Data from "./components/Data";
import Edit from "./components/Edit";

const ManagerPage = observer(() => {
  const [currentId, setCurrentId] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    ManagerStore.getAll();
  }, []);

  return (
    <section className={`container`}>
      <HeadDataContainer />
      <Data setOpen={setOpen} setCurrent={setCurrentId} />
      {open && <Edit setOpen={setOpen} current={currentId} />}
    </section>
  );
});

export default ManagerPage;
