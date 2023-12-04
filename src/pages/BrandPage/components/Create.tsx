import CreateContainer from "@/components/CreateContainer/CreateContainer";
import BrandStore from "@/store/BrandStore/BrandStore";
import React, { useState } from "react";
import TemplateForm from "./TemplateForm";

const Create = () => {
  const [create, setCreate] = useState({
    _id: "",
    image: new FormData(),
    name: "",
  });

  const onCreate = async () => {
    if (
      create.image.getAll.length > 0 &&
      !create.image.getAll("file").includes("undefined") &&
      create.name
    ) {
      const filename = await BrandStore.image(create.image);
      await BrandStore.create({ ...create, image: filename });
      setCreate({ ...create, name: "", image: new FormData() });
    }
  };

  return (
    <CreateContainer onCreate={onCreate}>
      <TemplateForm obj={create} setObj={setCreate} submit={onCreate} />
    </CreateContainer>
  );
};

export default Create;
