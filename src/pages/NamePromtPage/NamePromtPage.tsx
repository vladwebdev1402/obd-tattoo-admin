import st from "./NamePromtPage.module.scss";
import React, { FC, useEffect, useState } from "react";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Data from "./components/Data";
import NamePromtStore from "@/store/NamePromtStore";
import { observer } from "mobx-react-lite";
import SearchStore from "@/store/SearchStore/SearchStore";

interface Props {
  link: string;
}
const NamePromtPage: FC<Props> = observer(({ link }) => {
  const [current, setCurrent] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    NamePromtStore.getAll(link);
    SearchStore.setValue("");
  }, [link]);

  return (
    <section className={"container"}>
      <Create link={link} />

      <Data
        className={st.data}
        setOpen={setOpen}
        setCurrent={setCurrent}
        link={link}
      />
      {open && <Edit setOpen={setOpen} current={current} link={link} />}
    </section>
  );
});

export default NamePromtPage;
