import Input from "@/UI/input/Input";
import CreateContainer from "@/components/CreateContainer/CreateContainer";
import NamePromtStore from "@/store/NamePromtStore";
import React, { FC, useState } from "react";

interface Props {
  link: string;
}

const Create: FC<Props> = ({ link }) => {
  const [create, setCreate] = useState({
    name: "",
    promt: "",
  });

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate();
  };
  const onCreate = () => {
    if (create.name !== "" && create.promt !== "") {
      NamePromtStore.create(link, {
        _id: "",
        name: create.name,
        promt: create.promt,
      });
      setCreate({ name: "", promt: "" });
    }
  };
  return (
    <CreateContainer onCreate={onCreate}>
      <form onSubmit={formSubmit}>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCreate({ ...create, name: e.target.value })
          }
          value={create.name}
          title="name"
        />
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCreate({ ...create, promt: e.target.value })
          }
          value={create.promt}
          title="promt"
        />
      </form>
    </CreateContainer>
  );
};

export default Create;
