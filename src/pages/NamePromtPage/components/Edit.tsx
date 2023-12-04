import Modal from "@/UI/modal/Modal";
import NamePromtStore from "@/store/NamePromtStore";
import React, { FC, useState } from "react";
import TemplateForm from "./TemplateForm";
interface Props {
  link: string;
  setOpen: (value: boolean) => void;
  current: string;
}

const Edit: FC<Props> = ({ link, setOpen, current }) => {
  const obj = NamePromtStore.data.filter((d) => d._id === current)[0];

  const [editObj, setEditObj] = useState({
    ...obj,
  });

  const onEdit = async () => {
    if (editObj.name && editObj.promt) {
      await NamePromtStore.edit(link, {
        _id: obj._id,
        name: editObj.name,
        promt: editObj.promt,
      });
    }
  };
  return (
    <Modal onEdit={onEdit} setOpen={setOpen}>
      <TemplateForm submit={onEdit} obj={editObj} setObj={setEditObj} />
    </Modal>
  );
};

export default Edit;
