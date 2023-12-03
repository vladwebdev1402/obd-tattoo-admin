import React, { FC } from "react";
import st from "./ImageContainer.module.scss";
interface Props {
  img: string;
  className?: string;
  className_img?: string;
}
const ImageContainer: FC<Props> = ({
  img,
  className = "",
  className_img = "",
}) => {
  return (
    <div className={`${className}`}>
      <div className={`${st.container__img__wrapper} ${className_img}`}>
        <img src={img} alt="" />
      </div>
      <div className={st.container__info}>Текущее изображение</div>
    </div>
  );
};

export default ImageContainer;
