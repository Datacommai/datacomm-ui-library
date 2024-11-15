import Image from "next/image";

type DatacommChatbotIconTypes = {
  icon: string;
};

export const DatacommChatbotIcon: React.FC<DatacommChatbotIconTypes> = (
  props
) => {
  const { icon } = props;

  return (
    <figure className="w-[30px] h-[30px] rounded-full">
      <Image src={icon} alt="logo" width={30} height={30} />
    </figure>
  );
};
