import React, { FC } from "react";
import styles from "./Checkbox.module.scss";

interface Props {
  title: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  className?: string;
}

const Checkbox: FC<Props> = ({
  title = "",
  onChange,
  checked,
  className = "",
}) => {
  return (
    <label className={`${styles.inputBox} ${className}`}>
      <input
        type="checkbox"
        className={`${styles.input} ${checked ? styles.checked : ""}`}
        checked={checked ? true : false}
        onChange={onChange}
      />

      <div className={styles.title}>{title}</div>
    </label>
  );
};

export default Checkbox;
