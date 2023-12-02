import Input from "@/UI/input/Input";
import CreateContainer from "@/components/CreateContainer/CreateContainer";
import NamePromtStore from "@/store/NamePromtStore";
import React, { FC, useState } from "react";
import TemplateForm from "./TemplateForm";

interface Props {
  link: string;
}

const Create: FC<Props> = ({ link }) => {
  const [create, setCreate] = useState({
    _id: "",
    name: "",
    promt: "",
  });

  const onCreate = () => {
    if (create.name !== "" && create.promt !== "") {
      NamePromtStore.create(link, create);
      setCreate({ ...create, name: "", promt: "" });
    }
  };
  return (
    <CreateContainer onCreate={onCreate}>
      <TemplateForm submit={onCreate} obj={create} setObj={setCreate} />
    </CreateContainer>
  );
};

export default Create;
