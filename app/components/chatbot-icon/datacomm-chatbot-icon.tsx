import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type DatacommChatbotIconTypes = {
  icon: string;
};

export const DatacommChatbotIcon: React.FC<DatacommChatbotIconTypes> = (
  props
) => {
  const { icon } = props;

  return (
    <Avatar className="w-[30px] h-[30px] rounded-full" data-testid="bot-avatar">
      <AvatarImage src={icon} data-testid="bot-avatar-image" alt="bot icon" />
      <AvatarFallback>Bot</AvatarFallback>
    </Avatar>
  );
};
