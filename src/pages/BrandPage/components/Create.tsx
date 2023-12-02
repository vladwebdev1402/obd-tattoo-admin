import Input from "@/UI/input/Input";
import CreateContainer from "@/components/CreateContainer/CreateContainer";
import BrandStore from "@/store/BrandStore/BrandStore";
import React, { useState } from "react";
import TemplateForm from "./TemplateForm";

const Create = () => {
  const [create, setCreate] = useState({
    _id: "",
    image: "IMAGE",
    name: "",
  });

  const onCreate = () => {
    if (create.image && create.name) {
      BrandStore.create({ _id: "", image: create.image, name: create.name });
      setCreate({ ...create, name: "" });
    }
  };

  return (
    <CreateContainer onCreate={onCreate}>
      <TemplateForm submit={onCreate} setObj={setCreate} obj={create} />
    </CreateContainer>
  );
};

export default Create;
