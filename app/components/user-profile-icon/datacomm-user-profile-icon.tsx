import Image from "next/image";

type DatacommUserProfileIconTypes = {
  icon: string;
};

export const DatacommUserProfileIcon: React.FC<DatacommUserProfileIconTypes> = (
  props
) => {
  const { icon } = props;

  return (
    <figure className="w-[52px] h-[52px] rounded-full">
      <Image src={icon} alt="user icon" width={52} height={52} />
    </figure>
  );
};
