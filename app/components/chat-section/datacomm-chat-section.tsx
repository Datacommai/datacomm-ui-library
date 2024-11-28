import { useState } from "react";
import Image from "next/image";

import { DatacommAddConversation } from "../add-conversation/datacomm-add-conversation";
import { DatacommContactTab } from "../contact-tab/datacomm-contact-tab";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { mockData } from "@/app/mock-data/datacomm-chat-section-args";

export const DatacommChatSection: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedChatId, setSelectedChatId] = useState<number | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleChatSelect = (id: number) => {
    setSelectedChatId(id === selectedChatId ? null : id);
  };

  return (
    <div className="grid grid-cols-1 justify-center items-center h-fit border-[1.5px] px-2 py-10 gap-5">
      <span>
        <DatacommAddConversation
          title="Conversation"
          first_icon="/assets/icons/message-icon.svg"
          second_icon="/assets/icons/add-more-icon.svg"
        />
        <Separator className="w-[394px] h-[1px]" />
      </span>
      <section className="w-full flex justify-center">
        <div className="relative w-[345px] flex items-center justify-center">
          <Input
            className="rounded-[50px] w-full py-3 px-4 gap-2 border-spacing-1 shadow-none border-[#E9E9EA] pl-10 placeholder:font-light"
            onChange={handleInputChange}
            value={searchValue}
            type="text"
            placeholder="Search"
          />
          <Image
            src="/assets/icons/search-icon.svg"
            alt="Search icon"
            className="absolute top-2.5 left-3"
            width={16}
            height={16}
          />
        </div>
      </section>

      {mockData.map((contact) => (
        <div
          className="grid grid-col justify-center items-center"
          key={contact.id}
          onClick={() => handleChatSelect(contact.id)}
        >
          <DatacommContactTab
            username={contact.username}
            message={contact.message}
            notificationCount={contact.notificationCount}
            profileIcon={contact.profileIcon}
            isSelected={selectedChatId === contact.id}
          />
          <Separator className="w-[350px] bg-[#D3F4EF] h-[1px]" />
        </div>
      ))}
    </div>
  );
};

export default DatacommChatSection;
