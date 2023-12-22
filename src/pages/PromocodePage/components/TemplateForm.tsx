import ContainerTemplateForm from "@/UI/ContainerTemplateForm/ContainerTemplateForm";
import Input from "@/UI/input/Input";
import { IPromocodeImage } from "@/types/IPromocode";
import { ITemplateFormProps } from "@/types/Props";
import { StringIsNumber } from "@/utils/StringIsNumber";
import React, { FC } from "react";
import st from "./st.module.scss";
import ImageInput from "@/UI/input/image/ImageInput";
import ImageContainer from "@/UI/ImageContainer/ImageContainer";
import Textarea from "@/UI/textarea/Textarea";
import { ChangeImage } from "@/UI/input/image/ChangeImage";
import Message from "@/UI/Message/Message";
interface Props extends ITemplateFormProps<IPromocodeImage> {
  currImage?: string;
}

const TemplateForm: FC<Props> = ({
  currImage,
  obj,
  setObj,
  submit,
  message,
}) => {
  return (
    <ContainerTemplateForm onEvent={submit}>
      <div className={st.inputs_namePromoDiscount}>
        <Input
          title="name*"
          value={obj.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setObj({ ...obj, name: e.target.value })
          }
        />
        <Input
          title="promocode*"
          value={obj.promocode}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setObj({ ...obj, promocode: e.target.value })
          }
        />
        <Input
          title="discount*"
          value={obj.discount.toString()}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setObj({
              ...obj,
              discount: Number(
                StringIsNumber(obj.discount.toString(), e.target.value)
              ),
            })
          }
        />
      </div>

      <Textarea
        title="description*"
        value={obj.description}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setObj({ ...obj, description: e.target.value })
        }
      />

      <div className={st.images}>
        {currImage && (
          <ImageContainer img={currImage} className_img={st.image} />
        )}

        <ImageInput
          data={obj.image}
          onChange={ChangeImage(obj, setObj)}
          className={st.image}
        />
      </div>
      <Message>{message}</Message>
    </ContainerTemplateForm>
  );
};

export default TemplateForm;
