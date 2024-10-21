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
  iconType: InputIconTypes;
  placeholder: string;
  onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function DatacommInput(props: InputProps) {
  const { type, iconType, placeholder, onInput } = props;

  const inputContainerStyles = "relative w-[357px] h-[40px]";
  const inputStyles =
    "bg-transparent text-[#4A4C56] border border-[#D2D2D5] rounded-md w-full h-full pl-[30px] placeholder:text-[#D2D2D5]";

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
          <Image
            src="/assets/icons/password-icon.svg"
            alt="Lock"
            width={14}
            height={14}
            className="absolute left-2 top-1/2 transform -translate-y-1/2"
          />
        );
      default:
        return null;
    }
  };

  const inputType =
    type === InputTypes.EMAIL
      ? "email"
      : type === InputTypes.PASSWORD
      ? "password"
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
