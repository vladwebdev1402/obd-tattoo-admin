import CreateContainer from "@/components/CreateContainer/CreateContainer";
import { CheckItem, GenerateItemImage, IItemImage } from "@/types/IItem";
import React, { useState } from "react";
import TemplateForm from "./TemplateForm";
import ItemStore from "@/store/ItemStore/ItemStore";

const Create = () => {
  const [item, setItem] = useState<IItemImage>(GenerateItemImage());
  const onCreate = async () => {
    if (CheckItem(item)) {
      const filename = await ItemStore.image(item.image);
      await ItemStore.create({ ...item, image: filename });
      setItem(GenerateItemImage());
    }
  };
  return (
    <CreateContainer onCreate={onCreate}>
      <TemplateForm obj={item} setObj={setItem} />
    </CreateContainer>
  );
};

export default Create;
