import React, { FC } from "react";
import ClipButton from "../../UI/button/ClipButton/ClipButton";
import st from "./CreateContainer.module.scss";
import CategoryOperation from "@/UI/CategoryOperation/CategoryOperation";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  onCreate: () => void;
}
const CreateContainer: FC<Props> = ({
  onCreate,
  className = "",
  children,
  ...props
}) => {
  return (
    <CategoryOperation
      title={"Создать"}
      className={`${className} ${st.container}`}
      {...props}
    >
      {children}
      <ClipButton onClick={() => onCreate()} theme="dark" className={st.btn}>
        Создать
      </ClipButton>
    </CategoryOperation>
  );
};

export default CreateContainer;
