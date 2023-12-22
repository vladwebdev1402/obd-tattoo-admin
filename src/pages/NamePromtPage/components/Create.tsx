import Input from "@/UI/input/Input";
import CreateContainer from "@/components/CreateContainer/CreateContainer";
import NamePromtStore from "@/store/NamePromtStore";
import React, { FC, useState } from "react";
import TemplateForm from "./TemplateForm";
import { useMessage } from "@/hooks/useMessage";

interface Props {
  link: string;
}

const Create: FC<Props> = ({ link }) => {
  const [create, setCreate] = useState({
    _id: "",
    name: "",
    promt: "",
  });

  const { func, message } = useMessage(
    () => create.name !== "" && create.promt !== "",
    async () => {
      NamePromtStore.create(link, create);
      setCreate({ ...create, name: "", promt: "" });
    },
    "Новая коллекция успешно создана",
    "Заполните все обязательные поля"
  );

  return (
    <CreateContainer onCreate={func}>
      <TemplateForm
        submit={func}
        obj={create}
        setObj={setCreate}
        message={message}
      />
    </CreateContainer>
  );
};

export default Create;
