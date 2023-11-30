import React, { FC } from "react";
import styles from "./ClipButton.module.scss";
interface Props {
  theme: "dark" | "light";
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}
const ClipButton: FC<Props> = ({
  theme,
  children,
  onClick,
  className = "",
}) => {
  return (
    <div
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        onClick();
      }}
      className={` ${className} ${styles.btnWrapper} ${
        theme == "dark" ? styles.darkBtn : styles.lightBtn
      }`}
    >
      <button className={styles.btn}></button>
      <span className={styles.textBtn}>{children}</span>
    </div>
  );
};

export default ClipButton;
