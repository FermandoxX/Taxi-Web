import type { ReactNode } from "react";

export interface Links {
  linkLabel: string;
  linkTo: string;
}

export interface FormProps {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  children: ReactNode;
  className?: string;
  buttonLabel: string;
  buttonName: string;
  buttonClassName?: string;
  links?: Links[];
  linkClassName?: string;
  header?: string;
}
