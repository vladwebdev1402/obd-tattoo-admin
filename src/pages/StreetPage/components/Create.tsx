import CreateContainer from "@/components/CreateContainer/CreateContainer";
import StreetStore from "@/store/StreetStore";
import IDropdownValue from "@/types/IDropdownValue";
import React, { useState } from "react";
import st from "./st.module.scss";
import { observer } from "mobx-react-lite";
import TemplateForm from "./TemplateForm";

const Create = observer(() => {
  const [street, setStreet] = useState({
    _id: "",
    city: "",
    name: "",
  });
  const [city, setCity] = useState<IDropdownValue | null>(null);
  const onCreate = () => {
    if (street.name && city !== null) {
      StreetStore.create({ _id: "", city: city.value, name: street.name });
      setStreet({ ...street, name: "" });
    }
  };
  return (
    <CreateContainer onCreate={onCreate}>
      <TemplateForm
        setCurrent={setCity}
        current={city}
        submit={onCreate}
        setObj={setStreet}
        obj={street}
      />
    </CreateContainer>
  );
});

export default Create;
