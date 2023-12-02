import Input from "@/UI/input/Input";
import CreateContainer from "@/components/CreateContainer/CreateContainer";
import IdNameStore from "@/store/IdNameStore";
import PromocodeStore from "@/store/PromocodeStore/PromocodeStore";
import { IPromocode } from "@/types/IPromocode";
import React, { useState } from "react";
import TemplateForm from "./TemplateForm";

const Create = () => {
  const [promocode, setPromocode] = useState<IPromocode>({
    _id: "",
    name: "",
    promocode: "",
    description: "",
    discount: 0,
    image: "IMAGE",
  });

  const onCreate = () => {
    if (
      promocode.name &&
      promocode.promocode &&
      promocode.description &&
      promocode.image &&
      promocode.discount > 0
    ) {
      PromocodeStore.create(promocode);
      setPromocode({
        _id: "",
        name: "",
        promocode: "",
        description: "",
        discount: 0,
        image: "IMAGE",
      });
    }
  };

  return (
    <CreateContainer onCreate={onCreate}>
      <TemplateForm submit={onCreate} setObj={setPromocode} obj={promocode} />
    </CreateContainer>
  );
};

export default Create;
