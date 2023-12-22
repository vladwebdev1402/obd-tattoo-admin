import Input from "@/UI/input/Input";
import CreateContainer from "@/components/CreateContainer/CreateContainer";
import IdNameStore from "@/store/IdNameStore";
import React, { FC, useState } from "react";
import TemplateForm from "./TemplateForm";
import { useMessage } from "@/hooks/useMessage";
interface Props {
  link: string;
}
const Create: FC<Props> = ({ link }) => {
  const [obj, setObj] = useState({
    _id: "",
    name: "",
  });

  const { func, message } = useMessage(
    () => obj.name != "",
    () => {
      IdNameStore.create(link, obj);
      setObj({
        _id: "",
        name: "",
      });
    },
    "Новая коллекция успешно создана",
    "Заполните все обязательные поля"
  );

  return (
    <CreateContainer onCreate={func}>
      <TemplateForm submit={func} obj={obj} setObj={setObj} message={message} />
    </CreateContainer>
  );
};

export default Create;
