import ContainerTemplateForm from "@/UI/ContainerTemplateForm/ContainerTemplateForm";
import Input from "@/UI/input/Input";
import INamePrompt from "@/types/INamePrompt";
import { ITemplateFormProps } from "@/types/Props";
import React, { FC } from "react";
interface Props extends ITemplateFormProps<INamePrompt> {}
const TemplateForm: FC<Props> = ({ obj, setObj, submit }) => {
  return (
    <ContainerTemplateForm onEvent={submit}>
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setObj({ ...obj, name: e.target.value })
        }
        value={obj.name}
        title="name*"
      />
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setObj({ ...obj, promt: e.target.value })
        }
        value={obj.promt}
        title="promt*"
      />
    </ContainerTemplateForm>
  );
};

export default TemplateForm;
