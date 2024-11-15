import Image from "next/image";
import { Separator } from "@/components/ui/separator";

type DatacommUserInformationProps = {
  username: string;
  purchasedItemsCount: number;
  lifetimeValue: number;
};

export const DatacommUserInformation: React.FC<DatacommUserInformationProps> = (
  props
) => {
  const { username, purchasedItemsCount, lifetimeValue } = props;

  return (
    <section className="flex gap-2">
      <Image
        src="/assets/icons/user-icon.svg"
        alt="User Icon"
        width={52}
        height={52}
      />

      <div className="flex flex-col">
        <h2 className="text-lg font-extrabold text-[#1D1F2C]">{username}</h2>
        <div className="flex gap-2 items-center">
          <span className="flex items-center gap-1">
            <p className="text-[#777980] text-sm">Purchased:</p>
            <p className="font-bold text-[#777980] text-xs">
              {purchasedItemsCount} items
            </p>
          </span>
          <Separator className="w-[1px] h-[10px]" orientation="vertical" />
          <span className="flex items-center gap-1">
            <p className="text-[#777980] text-sm">Lifetime:</p>
            <p className="font-bold text-[#777980] text-xs">${lifetimeValue}</p>
          </span>
        </div>
      </div>
    </section>
  );
};
