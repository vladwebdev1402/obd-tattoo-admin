import Input from "@/UI/input/Input";
import Modal from "@/UI/modal/Modal";
import IdNameStore from "@/store/IdNameStore";
import { observer } from "mobx-react-lite";
import React, { FC, useEffect, useState } from "react";
import TemplateForm from "./TemplateForm";
import { useMessage } from "@/hooks/useMessage";

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

  const { func, message } = useMessage(
    () => obj.name != "",
    () => {
      IdNameStore.edit(link, obj);
      setObj({
        _id: "",
        name: "",
      });
      setOpen(false);
    },
    "",
    "Заполните все обязательные поля"
  );

  return (
    <Modal setOpen={setOpen} onEdit={func}>
      <TemplateForm setObj={setObj} obj={obj} submit={func} message={message} />
    </Modal>
  );
});

export default Edit;
