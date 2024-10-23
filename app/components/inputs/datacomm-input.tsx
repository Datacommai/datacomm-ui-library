import { useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export enum InputTypes {
  FULLNAME,
  EMAIL,
  PASSWORD,
}

export enum InputIconTypes {
  NONE,
  USER,
  EMAIL,
  LOCK,
}

export type InputProps = {
  type: InputTypes;
  onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function DatacommInput(props: InputProps) {
  const { type, onInput } = props;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const inputContainerStyles = "relative w-[357px] h-[40px]";
  const inputStyles =
    "bg-transparent text-[#4A4C56] border border-[#D2D2D5] rounded-md w-full h-full pl-[30px] placeholder:text-[#D2D2D5]";

  const getInputAttributes = (type: InputTypes) => {
    switch (type) {
      case InputTypes.FULLNAME:
        return {
          placeholder: "Full Name",
          iconType: InputIconTypes.USER,
        };
      case InputTypes.EMAIL:
        return {
          placeholder: "Email address",
          iconType: InputIconTypes.EMAIL,
        };
      case InputTypes.PASSWORD:
        return {
          placeholder: "Password",
          iconType: InputIconTypes.LOCK,
        };
      default:
        return {
          placeholder: "Full Name",
          iconType: InputIconTypes.USER,
        };
    }
  };

  const { placeholder, iconType } = getInputAttributes(type);

  const renderIcon = () => {
    switch (iconType) {
      case InputIconTypes.USER:
        return (
          <Image
            src="/assets/icons/user-icon.svg"
            alt="User"
            width={14}
            height={14}
            className="absolute left-2 top-1/2 transform -translate-y-1/2"
          />
        );
      case InputIconTypes.EMAIL:
        return (
          <Image
            src="/assets/icons/email-icon.svg"
            alt="Email"
            width={14}
            height={14}
            className="absolute left-2 top-1/2 transform -translate-y-1/2"
          />
        );
      case InputIconTypes.LOCK:
        return (
          <>
            <Image
              src="/assets/icons/password-icon.svg"
              alt="Lock"
              width={14}
              height={14}
              className="absolute left-2 top-1/2 transform -translate-y-1/2"
            />
            <Image
              src="/assets/icons/eye-icon.svg"
              alt="Toggle Password Visibility"
              width={14}
              height={14}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            />
          </>
        );
      default:
        return (
          <Image
            src="/assets/icons/user-icon.svg"
            alt="User"
            width={14}
            height={14}
            className="absolute left-2 top-1/2 transform -translate-y-1/2"
          />
        );
    }
  };

  const inputType =
    type === InputTypes.EMAIL
      ? "email"
      : type === InputTypes.PASSWORD
      ? isPasswordVisible
        ? "text"
        : "password"
      : "text";

  return (
    <div className={inputContainerStyles}>
      {renderIcon()}
      <Input
        type={inputType}
        className={inputStyles}
        placeholder={placeholder}
        onInput={onInput}
      />
    </div>
  );
}
