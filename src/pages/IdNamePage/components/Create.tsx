import Input from "@/UI/input/Input";
import CreateContainer from "@/components/CreateContainer/CreateContainer";
import IdNameStore from "@/store/IdNameStore";
import React, { FC, useState } from "react";
import TemplateForm from "./TemplateForm";
interface Props {
  link: string;
}
const Create: FC<Props> = ({ link }) => {
  const [obj, setObj] = useState({
    _id: "",
    name: "",
  });

  const onCreate = () => {
    if (obj.name != "") {
      IdNameStore.create(link, obj);
      setObj({
        _id: "",
        name: "",
      });
    }
  };

  return (
    <CreateContainer onCreate={onCreate}>
      <TemplateForm submit={onCreate} obj={obj} setObj={setObj} />
    </CreateContainer>
  );
};

export default Create;
