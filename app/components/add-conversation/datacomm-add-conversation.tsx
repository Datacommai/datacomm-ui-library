import Image from "next/image";
import { Button } from "@/components/ui/button";

type DatacommAddConversationProp = {
  title: string;
  first_icon: string;
  second_icon: string;
  onClick?: () => void;
};

export const DatacommAddConversation: React.FC<DatacommAddConversationProp> = (
  props
) => {
  const { title, first_icon, second_icon, onClick } = props;

  // Utility to extract the file name without extension from the src
  const getIconName = (src: string) => {
    const parts = src.split("/"); // Split path by "/"
    const fileName = parts[parts.length - 1]; // Get the last part
    return fileName.split(".")[0]; // Remove file extension
  };

  return (
    <section className="flex items-center w-[374px] justify-between">
      <span className="flex gap-4">
        <Image
          src={first_icon}
          alt={getIconName(first_icon)}
          width={20}
          height={20}
        />
        <p className="text-[#241E26] font-bold">{title}</p>
      </span>
      <Button
        onClick={onClick}
        className="w-fit h-fit p-0 hover:bg-transparent bg-transparent border-none shadow-none"
      >
        <Image
          src={second_icon}
          alt={getIconName(second_icon)}
          width={26}
          height={26}
        />
      </Button>
    </section>
  );
};
