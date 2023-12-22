import Modal from "@/UI/modal/Modal";
import IdNameStore from "@/store/IdNameStore";
import StreetStore from "@/store/StreetStore";
import React, { FC, useState, useMemo } from "react";
import TemplateForm from "./TemplateForm";
import IStreet from "@/types/IStreet";
import { useMessage } from "@/hooks/useMessage";
import { observer } from "mobx-react-lite";
interface Props {
  setOpen: (value: boolean) => void;
  current: string;
}
const Edit: FC<Props> = observer(({ setOpen, current }) => {
  const curStreet = useMemo(
    () => StreetStore.data.filter((s) => s._id === current)[0],
    [current]
  );
  const curCity = useMemo(
    () => IdNameStore.data.filter((s) => s._id === curStreet.city)[0],
    [curStreet]
  );

  const [street, setStreet] = useState<IStreet>({
    ...curStreet,
  });

  const [city, setCity] = useState({ name: curCity.name, value: curCity._id });

  const check = () => Boolean(street.name) && Boolean(city.value);

  const onEdit = async () => {
    await StreetStore.edit({
      ...street,
      city: city.value,
      name: street.name,
    });
    setOpen(false);
  };

  const { func, message } = useMessage(
    check,
    onEdit,
    "",
    "Заполните все обязательные поля"
  );

  return (
    <Modal onEdit={func} setOpen={setOpen}>
      <TemplateForm
        setCurrent={setCity}
        current={city}
        submit={func}
        setObj={setStreet}
        obj={street}
        message={message}
      />
    </Modal>
  );
});

export default Edit;
