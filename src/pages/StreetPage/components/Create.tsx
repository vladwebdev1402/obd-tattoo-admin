import CreateContainer from "@/components/CreateContainer/CreateContainer";
import StreetStore from "@/store/StreetStore";
import IDropdownValue from "@/types/IDropdownValue";
import React, { useState, useCallback } from "react";
import { observer } from "mobx-react-lite";
import TemplateForm from "./TemplateForm";
import { useMessage } from "@/hooks/useMessage";

const Create = observer(() => {
  const [street, setStreet] = useState({
    _id: "",
    city: "",
    name: "",
  });
  const [city, setCity] = useState<IDropdownValue | null>(null);

  const onCreate = useCallback(() => {
    StreetStore.create({ _id: "", city: city!.value, name: street.name });
    setStreet({ ...street, name: "" });
  }, [street, city]);

  const { func, message } = useMessage(
    () => street.name != "" && city !== null,
    onCreate,
    "Новая коллекция успешно создана",
    "Заполните все обязательные поля"
  );

  return (
    <CreateContainer onCreate={func}>
      <TemplateForm
        setCurrent={setCity}
        current={city}
        submit={func}
        setObj={setStreet}
        obj={street}
        message={message}
      />
    </CreateContainer>
  );
});

export default Create;
