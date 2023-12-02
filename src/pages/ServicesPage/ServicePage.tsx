import React, { useEffect, useState } from "react";
import Create from "./components/Create";
import HeadDataContainer from "@/components/HeadDataContainer/HeadDataContainer";
import { observer } from "mobx-react-lite";
import Data from "./components/Data";
import ServiceStore from "@/store/ServiceStore/ServiceStore";
import Edit from "./components/Edit";

const ServicePage = observer(() => {
  const [currentId, setCurrentId] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    ServiceStore.getAll();
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

export default ServicePage;
