import Image from "next/image";

type DatacommChatbotIconTypes = {
  icon: string;
};

export const DatacommChatbotIcon: React.FC<DatacommChatbotIconTypes> = (
  props
) => {
  const { icon } = props;
  const chatbotIconstyles = "w-[34px] h-[34px] rounded-full";

  return (
    <figure className={chatbotIconstyles}>
      <Image src={icon} alt="logo" width={34} height={34} />
    </figure>
  );
};
