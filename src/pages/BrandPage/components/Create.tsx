import CreateContainer from "@/components/CreateContainer/CreateContainer";
import BrandStore from "@/store/BrandStore/BrandStore";
import React, { useState } from "react";
import TemplateForm from "./TemplateForm";
import { useMessage } from "@/hooks/useMessage";

const Create = () => {
  const { func, message } = useMessage(
    () => {
      return (
        create.image.getAll.length > 0 &&
        !create.image.getAll("file").includes("undefined") &&
        Boolean(create.name)
      );
    },
    async () => {
      const filename = await BrandStore.image(create.image);
      await BrandStore.create({ ...create, image: filename });
      setCreate({ ...create, name: "", image: new FormData() });
    },
    "Новая коллекция успешно создана",
    "Заполните все обязательные поля, включая изображение"
  );

  const [create, setCreate] = useState({
    _id: "",
    image: new FormData(),
    name: "",
  });

  return (
    <CreateContainer onCreate={func}>
      <TemplateForm
        obj={create}
        setObj={setCreate}
        submit={func}
        message={message}
      />
    </CreateContainer>
  );
};

export default Create;
