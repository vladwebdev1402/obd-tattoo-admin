import CreateContainer from "@/components/CreateContainer/CreateContainer";
import { CheckItem, GenerateItemImage, IItemImage } from "@/types/IItem";
import React, { useState } from "react";
import TemplateForm from "./TemplateForm";
import ItemStore from "@/store/ItemStore/ItemStore";
import { useMessage } from "@/hooks/useMessage";

const Create = () => {
  const [item, setItem] = useState<IItemImage>(GenerateItemImage());

  const { func, message } = useMessage(
    () => CheckItem(item),
    async () => {
      const filename = await ItemStore.image(item.image);
      await ItemStore.create({ ...item, image: filename });
      setItem(GenerateItemImage());
    },
    "Новая коллекция успешно создана",
    "Заполните все обязательные поля, включая изображение"
  );

  return (
    <CreateContainer onCreate={func}>
      <TemplateForm obj={item} setObj={setItem} message={message} />
    </CreateContainer>
  );
};

export default Create;
