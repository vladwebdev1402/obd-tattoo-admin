import Modal from "@/UI/modal/Modal";
import NamePromtStore from "@/store/NamePromtStore";
import React, { FC, useState } from "react";
import TemplateForm from "./TemplateForm";
import { useMessage } from "@/hooks/useMessage";
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

  const { func, message } = useMessage(
    () => editObj.name !== "" && editObj.promt !== "",
    async () => {
      await NamePromtStore.edit(link, {
        _id: obj._id,
        name: editObj.name,
        promt: editObj.promt,
      });
      setOpen(false);
    },
    "",
    "Заполните все обязательные поля"
  );

  return (
    <Modal onEdit={func} setOpen={setOpen}>
      <TemplateForm
        submit={func}
        obj={editObj}
        setObj={setEditObj}
        message={message}
      />
    </Modal>
  );
};

export default Edit;
