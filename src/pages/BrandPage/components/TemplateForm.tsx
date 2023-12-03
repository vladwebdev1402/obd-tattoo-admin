import { apiUrl } from "@/API/url";
import ContainerTemplateForm from "@/UI/ContainerTemplateForm/ContainerTemplateForm";
import Input from "@/UI/input/Input";
import ImageInput from "@/UI/input/image/ImageInput";
import { IBrandImage } from "@/types/IBrand";
import st from "./st.module.scss";
import { ITemplateFormProps } from "@/types/Props";
import React, { FC } from "react";
import ImageContainer from "@/UI/ImageContainer/ImageContainer";
interface Props extends ITemplateFormProps<IBrandImage> {
  currImage?: string;
}

const TemplateForm: FC<Props> = ({ currImage = "", obj, setObj, submit }) => {
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = new FormData();
    if (e.target.files) {
      data.append("file", e.target.files[0]);
      setObj({ ...obj, image: data });
    } else setObj({ ...obj, image: data });
  };

  return (
    <ContainerTemplateForm onEvent={submit}>
      <div className={st.images}>
        {currImage && (
          <ImageContainer img={currImage} className_img={st.image__input} />
        )}

        <ImageInput
          data={obj.image}
          onChange={change}
          className={st.image__input}
        />
      </div>

      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setObj({ ...obj, name: e.target.value })
        }
        value={obj.name}
        title="name"
      />
    </ContainerTemplateForm>
  );
};

export default TemplateForm;
