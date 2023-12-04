import ContainerTemplateForm from "@/UI/ContainerTemplateForm/ContainerTemplateForm";
import Input from "@/UI/input/Input";
import IIdName from "@/types/IIdName";
import { ITemplateFormProps } from "@/types/Props";
import React, { FC } from "react";
interface Props extends ITemplateFormProps<IIdName> {}
const TemplateForm: FC<Props> = ({ obj, setObj, submit }) => {
  return (
    <ContainerTemplateForm onEvent={submit}>
      <Input
        title="name*"
        value={obj.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setObj({ ...obj, name: e.target.value })
        }
      />
    </ContainerTemplateForm>
  );
};

export default TemplateForm;
