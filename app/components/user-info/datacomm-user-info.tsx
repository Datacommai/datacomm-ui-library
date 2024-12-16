import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Tab = {
  name: string;
  id: string;
};

type DatacommUserInfoProps = {
  profileIcon: string;
  fullname: string;
  money: number;
  tabs: Tab[];
};

export const DatacommUserInfo: React.FC<DatacommUserInfoProps> = ({
  profileIcon,
  fullname,
  money,
  tabs,
}) => {
  return (
    <section className="flex flex-col gap-4">
      <section className="flex gap-2">
        <Avatar className="w-[50px] h-[50px]" data-testid="user-avatar">
          <AvatarImage
            src={profileIcon}
            data-testid="user-avatar-image"
            alt="user icon"
          />
          <AvatarFallback>avatar</AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <h2 className="text-lg font-extrabold text-[#1D1F2C]">{fullname}</h2>
          <div className="flex gap-2 items-center">
            <span className="flex items-center gap-1">
              <p className="font-bold text-[#777980] text-xs">${money}</p>
            </span>
          </div>
        </div>
      </section>

      {/* Optionally render tabs */}
      <Tabs>
        <TabsList className="flex space-x-4">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id}>
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id}>
            <Separator />
            {/* Add content here for each tab if needed */}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};
