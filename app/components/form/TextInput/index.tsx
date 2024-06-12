import React, { ReactElement } from "react";
import styles from "./../form.module.css";

export interface Props {
  id: string;
  label: string;
  type: any;
  placeholder?: string;
  hasError: boolean;
  errorMessage: string;
  value: any;
}
export default function TextInput({
  id,
  value = null,
  label,
  placeholder,
  errorMessage,
  hasError,
}: Props): ReactElement {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        className={`${styles.defaultStyle} ${hasError && styles.errorStyle}`}
        placeholder={placeholder}
        value={value}
      />
      {hasError && <p className="text-xs text-danger">{errorMessage}</p>}
    </div>
  );
}
