import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DatacommContactButton } from "../contact-buttons/datacomm-contact-buttons";

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
      <section className="flex justify-between items-center">
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
            <h2 className="text-lg font-extrabold text-[#1D1F2C]">
              {fullname}
            </h2>
            <div className="flex gap-2 items-center">
              <span className="flex items-center gap-1">
                <p className="font-bold text-[#777980] text-xs">${money}</p>
              </span>
            </div>
          </div>
        </section>

        <span className="flex gap-3">
          <DatacommContactButton contactInfo="+1234567890" type="Phone" />
          <DatacommContactButton
            contactInfo="example@example.com"
            type="Email"
          />
          <DatacommContactButton contactInfo="+1234567890" type="Whatsapp" />
        </span>
      </section>

      {/* Optionally render tabs */}
      <Tabs>
        <TabsList className="flex space-x-4 justify-start bg-transparent">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="text-[#241E26] font-medium relative group shadow-none"
            >
              {/* Active state */}

              <div className="absolute bottom-[-10px] left-0 w-full h-[1px] group-data-[state=active]:bg-[#FF6680] transition-all"></div>

              <span className="group-data-[state=active]:text-[#FF6680] transition-colors">
                {tab.name}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
        <Separator className="mt-1.5" />

        {tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id}>
            {/* Add content here for each tab if needed */}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};
