import type { ChangeEvent, JSX } from "react";
import type { UseFormRegister } from "react-hook-form";

export interface InputFieldProps {
  icon?: JSX.Element;
  iconClassName?: string;
  type?: string;
  name: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  register?: UseFormRegister<any>;
  error?: any;
}
