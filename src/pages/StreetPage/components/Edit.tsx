import DropdownMenu from "@/UI/DropdownMenu/DropdownMenu";
import Input from "@/UI/input/Input";
import Modal from "@/UI/modal/Modal";
import IdNameStore from "@/store/IdNameStore";
import StreetStore from "@/store/StreetStore";
import IDropdownValue from "@/types/IDropdownValue";
import { ParseToDropdown } from "@/utils/ParseToDropdown";
import React, { FC, useState } from "react";
import st from "./st.module.scss";
interface Props {
  setOpen: (value: boolean) => void;
  current: string;
}
const Edit: FC<Props> = ({ setOpen, current }) => {
  const street = StreetStore.data.filter((s) => s._id === current)[0];
  const city2 = IdNameStore.data.filter((s) => s._id === street.city)[0];
  const [name, setName] = useState(street.name);
  const [city, setCity] = useState<IDropdownValue | null>({
    name: city2.name,
    value: city2._id,
  });
  const onEdit = () => {
    if (name && city) {
      StreetStore.edit({
        ...street,
        city: city.value,
        name: name,
      });
    }
  };

  return (
    <Modal onEdit={onEdit} setOpen={setOpen}>
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
    </Modal>
  );
};

export default Edit;
