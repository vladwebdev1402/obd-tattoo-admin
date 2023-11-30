import React, { FC, useEffect } from "react";
import st from "./Modal.module.scss";
import ClipButton from "../button/ClipButton/ClipButton";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  setOpen: (open: boolean) => void;
  onEdit: () => void;
}
const Modal: FC<Props> = ({
  setOpen,
  onEdit,
  children,
  className = "",
  ...props
}) => {
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];

    body.className += "block-scroll";

    return () => {
      body.className = body.className.replace("block-scroll", "");
    };
  }, []);
  return (
    <div
      className={`${st.modal} ${className}`}
      {...props}
      onClick={() => setOpen(false)}
    >
      <div
        className={st.modal__body}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <div className={st.modal__heading}>Редактирование</div>
        {children}
        <ClipButton
          className={st.modal__save}
          onClick={() => {
            setOpen(false);
            onEdit();
          }}
          theme="dark"
        >
          Сохранить
        </ClipButton>
        <button
          className={st.modal__close}
          onClick={() => setOpen(false)}
        ></button>
      </div>
    </div>
  );
};

export default Modal;
