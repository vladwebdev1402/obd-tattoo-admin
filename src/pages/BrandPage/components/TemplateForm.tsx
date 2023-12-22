import ContainerTemplateForm from "@/UI/ContainerTemplateForm/ContainerTemplateForm";
import Input from "@/UI/input/Input";
import ImageInput from "@/UI/input/image/ImageInput";
import { IBrandImage } from "@/types/IBrand";
import st from "./st.module.scss";
import { ITemplateFormProps } from "@/types/Props";
import React, { FC } from "react";
import ImageContainer from "@/UI/ImageContainer/ImageContainer";
import { ChangeImage } from "@/UI/input/image/ChangeImage";
import Message from "@/UI/Message/Message";
interface Props extends ITemplateFormProps<IBrandImage> {
  currImage?: string;
  message?: string;
}

const TemplateForm: FC<Props> = ({
  currImage = "",
  obj,
  message = "",
  setObj,
  submit,
}) => {
  return (
    <ContainerTemplateForm onEvent={submit}>
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setObj({ ...obj, name: e.target.value })
        }
        value={obj.name}
        title="name*"
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
