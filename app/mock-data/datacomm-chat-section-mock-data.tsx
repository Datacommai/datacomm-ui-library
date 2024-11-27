import { useState } from "react";
import Image from "next/image";
import { DatacommContactTab } from "../components/contact-tab/datacomm-contact-tab";
import { DatacommAddConversation } from "../components/add-conversation/datacomm-add-conversation";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

type MockData = {
  id: number;
  username: string;
  message: string;
  notificationCount: number;
  profileIcon: string;
};

const mockData: MockData[] = [
  {
    id: 1,
    username: "John Doe",
    message: "Hello, this is a message",
    notificationCount: 3,
    profileIcon: "/assets/icons/user-profile-icon.svg",
  },
  {
    id: 2,
    username: "Jane Smith",
    message: "Can we schedule a meeting?",
    notificationCount: 1,
    profileIcon: "/assets/images/user-profile-icon-2.svg",
  },
  {
    id: 3,
    username: "Chris Johnson",
    message: "I sent you the documents.",
    notificationCount: 0,
    profileIcon: "/assets/images/user-profile-icon-3.svg",
  },
  {
    id: 4,
    username: "Emily Davis",
    message: "What’s the update on the project?",
    notificationCount: 5,
    profileIcon: "/assets/images/user-profile-icon-4.svg",
  },
  {
    id: 5,
    username: "Michael Brown",
    message: "Thanks for your help!",
    notificationCount: 2,
    profileIcon: "/assets/images/user-profile-icon-5.svg",
  },
  {
    id: 6,
    username: "Sophia Martinez",
    message: "Looking forward to your reply.",
    notificationCount: 0,
    profileIcon: "/assets/images/user-profile-icon-6.svg",
  },
  {
    id: 7,
    username: "Darwin Nunez",
    message: "I need your help asap!",
    notificationCount: 7,
    profileIcon: "/assets/images/user-profile-icon-7.svg",
  },
];

export const DatacommChatSectionMockData: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="grid grid-cols-1 justify-center items-center h-[862px] border-[1.5px] px-2 py-10 gap-5">
      <span>
        <DatacommAddConversation
          title="Conversation"
          first_icon="/assets/icons/message-icon.svg"
          second_icon="/assets/icons/add-more-icon.svg"
        />
        <Separator className="w-[394px] h-[1px]" />
      </span>
      <section className="w-full flex justify-center">
        <div className="relative w-[345px]  flex items-center justify-center">
          <Input
            className="rounded-[50px] w-full py-3 px-4 gap-2 border-spacing-1 shadow-none border-[#E9E9EA] pl-10 placeholder:font-light" // Add padding to make room for the icon
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
        >
          <DatacommContactTab
            username={contact.username}
            message={contact.message}
            notificationCount={contact.notificationCount}
            profileIcon={contact.profileIcon}
          />
          <Separator className="w-[350px] bg-[#D3F4EF] h-[1px]" />
        </div>
      ))}
    </div>
  );
};

export default DatacommChatSectionMockData;
