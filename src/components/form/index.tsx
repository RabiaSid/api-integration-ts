import React from "react";
import Button from "../button";
import InputField from "../input-field";

type FormProps = {
  valueName: any;
  valueEmail: any;
  valueBody: any;
  onChangeName?: ((...args: any[]) => any) | undefined;
  onChangeEmail?: ((...args: any[]) => any) | undefined;
  onChangeBody?: ((...args: any[]) => any) | undefined;
};

export default function Form(props: FormProps) {
  const { valueName, valueEmail, valueBody, onChangeName, onChangeEmail, onChangeBody } = props;

  return (
    <>
      <InputField label="Name" value={valueName} onChange={onChangeName} />
      <InputField label="Email" value={valueEmail} onChange={onChangeEmail} />
      <InputField label="Body" value={valueBody} onChange={onChangeBody} />
    </>
  );
}
