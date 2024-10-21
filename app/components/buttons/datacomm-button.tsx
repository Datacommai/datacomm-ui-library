import { Button } from "@/components/ui/button";
import Image from "next/image";

export enum ButtonTypes {
  PRIMARY,
  SECONDARY,
}

export enum ButtonIconTypes {
  NONE,
  PASSKEY,
  GOOGLE,
}

export type ButtonProps = {
  type: ButtonTypes;
  title: string;
  iconType: ButtonIconTypes;
  onClick?: () => void;
};

export function DatacommButton(props: ButtonProps) {
  const { type, title, iconType, onClick } = props;

  const styles = () => {
    switch (type) {
      case ButtonTypes.PRIMARY:
        return "bg-[#6AB9BE] rounded-md text-white w-[357px] h-[47px]";
      case ButtonTypes.SECONDARY:
        return "bg-transparent text-[#4A4C56] border border-[#D2D2D5] rounded-md w-[357px] h-[47px]";
      default:
        return "bg-[#6AB9BE] rounded-md text-white w-[357px] h-[47px]";
    }
  };

  const renderIcon = () => {
    switch (iconType) {
      case ButtonIconTypes.PASSKEY:
        return (
          <Image
            src={"/assets/icons/passkey-icon.svg"}
            alt="Passkey"
            width={18}
            height={18}
            className="mr-2"
          />
        );
      case ButtonIconTypes.GOOGLE:
        return (
          <Image
            src={"/assets/icons/google-icon.svg"}
            alt="Google"
            width={18}
            height={18}
            className="mr-2"
          />
        );
      default:
        return null;
    }
  };

  return (
    <Button
      onClick={onClick}
      className={`${styles()} capitalize flex items-center`}
    >
      {renderIcon()}
      {title}
    </Button>
  );
}
