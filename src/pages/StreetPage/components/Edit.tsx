import DropdownMenu from "@/UI/DropdownMenu/DropdownMenu";
import Input from "@/UI/input/Input";
import Modal from "@/UI/modal/Modal";
import IdNameStore from "@/store/IdNameStore";
import StreetStore from "@/store/StreetStore";
import { ParseToDropdown } from "@/utils/ParseToDropdown";
import React, { FC, useState } from "react";
import st from "./st.module.scss";
import TemplateForm from "./TemplateForm";
import IStreet from "@/types/IStreet";
interface Props {
  setOpen: (value: boolean) => void;
  current: string;
}
const Edit: FC<Props> = ({ setOpen, current }) => {
  const curStreet = StreetStore.data.filter((s) => s._id === current)[0];
  const curCity = IdNameStore.data.filter((s) => s._id === curStreet.city)[0];

  const [street, setStreet] = useState<IStreet>({
    ...curStreet,
  });
  const [city, setCity] = useState({ name: curCity.name, value: curCity._id });

  const onEdit = () => {
    if (street.name && city) {
      StreetStore.edit({
        ...street,
        city: city.value,
        name: street.name,
      });
    }
  };

  return (
    <Modal onEdit={onEdit} setOpen={setOpen}>
      <TemplateForm
        setCurrent={setCity}
        current={city}
        submit={onEdit}
        setObj={setStreet}
        obj={street}
      />
    </Modal>
  );
};

export default Edit;
