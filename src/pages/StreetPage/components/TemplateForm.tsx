import ContainerTemplateForm from "@/UI/ContainerTemplateForm/ContainerTemplateForm";
import DropdownMenu from "@/UI/DropdownMenu/DropdownMenu";
import Input from "@/UI/input/Input";
import IdNameStore from "@/store/IdNameStore";
import IStreet from "@/types/IStreet";
import { ITemplateFormProps } from "@/types/Props";
import { ParseToDropdown } from "@/utils/ParseToDropdown";
import React, { FC } from "react";
import { observer } from "mobx-react-lite";
interface Props extends ITemplateFormProps<IStreet> {}
const TemplateForm: FC<Props> = observer(
  ({ obj, setObj, submit, current = null, setCurrent = () => {} }) => {
    return (
      <ContainerTemplateForm onEvent={submit}>
        <DropdownMenu
          placeholder={"Выберите город"}
          inputPlaceholder="Поиск города"
          values={ParseToDropdown(IdNameStore.data)}
          setCurrent={setCurrent}
          current={current}
          title="city"
        />
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setObj({ ...obj, name: e.target.value })
          }
          value={obj.name}
          title="name"
        />
      </ContainerTemplateForm>
    );
  }
);

export default TemplateForm;
