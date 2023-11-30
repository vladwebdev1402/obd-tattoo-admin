import Input from "@/UI/input/Input";
import CreateContainer from "@/components/CreateContainer/CreateContainer";
import IdNameStore from "@/store/IdNameStore";
import React, { FC, useState } from "react";
interface Props {
  link: string;
}
const Create: FC<Props> = ({ link }) => {
  const [name, setName] = useState("");

  const submitEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate();
  };

  const onCreate = () => {
    if (name != "") {
      IdNameStore.create(link, { name: name, _id: "" });
      setName("");
    }
  };

  return (
    <CreateContainer onCreate={onCreate}>
      <form onSubmit={submitEvent}>
        <Input
          title="name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
      </form>
    </CreateContainer>
  );
};

export default Create;
