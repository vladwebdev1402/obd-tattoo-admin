import IdNameStore from "@/store/IdNameStore";
import StreetStore from "@/store/StreetStore";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import Create from "./components/Create";
import Data from "./components/Data";
import Edit from "./components/Edit";
import SearchStore from "@/store/SearchStore/SearchStore";
const StreetPage = observer(() => {
  const [open, setOpen] = useState(false);
  const [currentId, setcurrent] = useState("");
  useEffect(() => {
    StreetStore.getAll();
    IdNameStore.getAll("city");
    SearchStore.setValue("");
  }, []);

  return (
    <div className={`container`}>
      <Create />
      <Data setCurrent={setcurrent} setOpen={setOpen} />
      {open && <Edit setOpen={setOpen} current={currentId} />}
    </div>
  );
});

export default StreetPage;
