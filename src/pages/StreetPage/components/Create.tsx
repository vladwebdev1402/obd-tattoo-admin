import DropdownMenu from "@/UI/DropdownMenu/DropdownMenu";
import Input from "@/UI/input/Input";
import CreateContainer from "@/components/CreateContainer/CreateContainer";
import IdNameStore from "@/store/IdNameStore";
import StreetStore from "@/store/StreetStore";
import IDropdownValue from "@/types/IDropdownValue";
import { ParseToDropdown } from "@/utils/ParseToDropdown";
import React, { useState } from "react";
import st from "./st.module.scss";
import { observer } from "mobx-react-lite";

const Create = observer(() => {
  const [name, setName] = useState("");
  const [city, setCity] = useState<IDropdownValue | null>(null);
  const onCreate = () => {
    if (name && city !== null) {
      StreetStore.create({ _id: "", city: city.value, name });
      setName("");
    }
  };
  return (
    <CreateContainer onCreate={onCreate}>
      <DropdownMenu
        placeholder={"Выберите город"}
        values={ParseToDropdown(IdNameStore.data)}
        setCurrent={setCity}
        current={city}
        title="city"
      />
      <Input
        className={st.create__input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
        value={name}
        title="name"
      />
    </CreateContainer>
  );
});

export default Create;
