import React, { useEffect, useState, FC } from "react";
import st from "./IdNamePage.module.scss";
import { observer } from "mobx-react-lite";
import SearchStore from "@/store/SearchStore/SearchStore";
import Input from "@/UI/input/Input";
import DataContainer from "@/UI/DataContainer/DataContainer";
import CreateContainer from "@/components/CreateContainer/CreateContainer";
import HeadDataContainer from "@/components/HeadDataContainer/HeadDataContainer";
import TableRow from "@/components/TableRow/TableRow";
import Modal from "@/UI/modal/Modal";
import IdNameStore from "@/store/IdNameStore";
import Create from "./components/Create";
import Data from "./components/Data";
import Edit from "./components/Edit";
interface Props {
  link: string;
}
const IdNamePage: FC<Props> = observer(({ link }) => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    IdNameStore.getAll(link);
    SearchStore.setValue("");
  }, [link]);

  return (
    <section className={`${st.city} container`}>
      <Create link={link} />

      <HeadDataContainer />

      <Data setOpen={setOpen} setCurrent={setCurrent} link={link} />
      {open && <Edit setOpen={setOpen} current={current} link={link} />}
    </section>
  );
});

export default IdNamePage;
