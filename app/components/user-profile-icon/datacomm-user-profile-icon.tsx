import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type DatacommUserProfileIconTypes = {
  icon: string;
};

export const DatacommUserProfileIcon: React.FC<DatacommUserProfileIconTypes> = (
  props
) => {
  const { icon } = props;

  return (
    <Avatar
      className="w-[52px] h-[52px] rounded-full"
      data-testid="user-avatar"
    >
      <AvatarImage src={icon} data-testid="user-avatar-image" alt="user icon" />
      <AvatarFallback>User</AvatarFallback>
    </Avatar>
  );
};
