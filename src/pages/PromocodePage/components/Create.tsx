import Input from "@/UI/input/Input";
import CreateContainer from "@/components/CreateContainer/CreateContainer";
import IdNameStore from "@/store/IdNameStore";
import PromocodeStore from "@/store/PromocodeStore/PromocodeStore";
import { IPromocode, IPromocodeImage } from "@/types/IPromocode";
import React, { useState } from "react";
import TemplateForm from "./TemplateForm";
import { CheckImage } from "@/utils/CheckImage";

const Create = () => {
  const [promocode, setPromocode] = useState<IPromocodeImage>({
    _id: "",
    name: "",
    promocode: "",
    description: "",
    discount: 0,
    image: new FormData(),
  });

  const onCreate = async () => {
    if (
      promocode.name &&
      promocode.promocode &&
      promocode.description &&
      CheckImage(promocode.image) &&
      promocode.discount > 0
    ) {
      const filename = await PromocodeStore.image(promocode.image);
      PromocodeStore.create({ ...promocode, image: filename });
      setPromocode({
        _id: "",
        name: "",
        promocode: "",
        description: "",
        discount: 0,
        image: new FormData(),
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
