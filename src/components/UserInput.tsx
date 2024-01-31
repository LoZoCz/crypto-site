// import { ChangeEvent } from "react";

type UserInputProps = {
  type: "text" | "password" | "email" | "number";
  addClasses?: string[];
  label?: string;
  value?: string | number;
  name?: string;
  placeholder: string;
  error?: boolean;
  disabled?: boolean;
  id?: string;
  //   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const UserInput = ({
  type,
  placeholder = "",
  addClasses = [],
  ...props
}: UserInputProps) => {
  return (
    <input
      {...props}
      type={type}
      placeholder={placeholder}
      className={`userInput ${addClasses.join(" ")}`}
    />
  );
};

export default UserInput;
