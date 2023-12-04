import Input from "@/UI/input/Input";
import Modal from "@/UI/modal/Modal";
import IdNameStore from "@/store/IdNameStore";
import { observer } from "mobx-react-lite";
import React, { FC, useEffect, useState } from "react";
import TemplateForm from "./TemplateForm";

interface Props {
  link: string;
  setOpen: (value: boolean) => void;
  current: string;
}

const Edit: FC<Props> = observer(({ link, setOpen, current }) => {
  const curObj = IdNameStore.data.filter((data) => data._id === current)[0];

  const [obj, setObj] = useState({
    ...curObj,
  });

  const onEdit = () => {
    if (obj.name != "") {
      IdNameStore.edit(link, obj);
      setObj({
        _id: "",
        name: "",
      });
    }
  };
  return (
    <Modal setOpen={setOpen} onEdit={onEdit}>
      <TemplateForm setObj={setObj} obj={obj} submit={onEdit} />
    </Modal>
  );
});

export default Edit;
