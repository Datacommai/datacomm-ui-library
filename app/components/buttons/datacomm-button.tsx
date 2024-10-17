import { Button } from "@/components/ui/button";

export enum ButtonTypes {
  PRIMARY,
  SECONDARY,
}

export type ButtonProps = {
  type: ButtonTypes;
  title: string;
  onClick?: () => void;
};

export function DatacommButton(props: ButtonProps) {
  const { type, title, onClick } = props;

  const styles = () => {
    switch (type as ButtonTypes) {
      case ButtonTypes.PRIMARY:
        return "bg-[#6AB9BE] rounded-md text-white w-[357px] h-[47px]";

      default:
        return "bg-white text-[#4A4C56] border border-[#D2D2D5] rounded-md w-[357px] h-[47px]";
    }
  };

  return (
    <Button onClick={onClick} className={`${styles()} capitalize`}>
      {title}
    </Button>
  );
}
