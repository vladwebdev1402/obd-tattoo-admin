import ContainerTemplateForm from "@/UI/ContainerTemplateForm/ContainerTemplateForm";
import Input from "@/UI/input/Input";
import IBrand from "@/types/IBrand";
import { ITemplateFormProps } from "@/types/Props";
import React, { FC } from "react";
interface Props extends ITemplateFormProps<IBrand> {}
const TemplateForm: FC<Props> = ({ obj, setObj, submit }) => {
  return (
    <ContainerTemplateForm onEvent={submit}>
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setObj({ ...obj, name: e.target.value })
        }
        value={obj.name}
        title="name"
      />
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setObj({ ...obj, image: e.target.value })
        }
        value={obj.image}
        title="image"
      />
    </ContainerTemplateForm>
  );
};

export default TemplateForm;
