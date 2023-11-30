import Input from "@/UI/input/Input";
import CreateContainer from "@/components/CreateContainer/CreateContainer";
import BrandStore from "@/store/BrandStore/BrandStore";
import React, { useState } from "react";

const Create = () => {
  const [create, setCreate] = useState({
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
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCreate({ ...create, name: e.target.value })
        }
        value={create.name}
        title="name"
      />
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCreate({ ...create, image: e.target.value })
        }
        value={create.image}
        title="image"
      />
    </CreateContainer>
  );
};

export default Create;
