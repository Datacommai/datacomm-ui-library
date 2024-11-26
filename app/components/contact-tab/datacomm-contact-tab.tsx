"use client";
import { useState } from "react";
import { DatacommUserProfileIcon } from "../user-profile-icon/datacomm-user-profile-icon";
import { DatacommNotification } from "../notification/datacomm-notification";

type DatacommContactTabProps = {
  username: string;
  message: string;
  notificationCount: number;
  profileIcon: string;
};

export const DatacommContactTab: React.FC<DatacommContactTabProps> = (
  props
) => {
  const { username, message, notificationCount, profileIcon } = props;

  const [isActive, setIsActive] = useState(false);

  const handleTabClick = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <section
      onClick={handleTabClick}
      className={`flex gap-3 w-[354px] h-[84px] py-4 px-2 rounded-[10px] cursor-pointer ${
        isActive ? "bg-[#D3F4EF]" : "bg-white"
      }`}
    >
      <DatacommUserProfileIcon icon={profileIcon} />
      <section className="flex flex-col w-full gap-1">
        <span className="flex justify-between items-center">
          <h2 className="font-bold text-[#241E26]">{username}</h2>
          <p
            className={`text-sm ${
              isActive ? "font-normal" : "font-semibold"
            } text-[#241E26]`}
          >
            15 min
          </p>
        </span>
        <span className="flex justify-between items-center">
          <p
            className={`text-sm max-w-52 truncate flex-1 ${
              isActive ? "font-normal" : "font-semibold"
            } text-[#241E26]`}
          >
            {message}
          </p>
          {!isActive && <DatacommNotification counter={notificationCount} />}
        </span>
      </section>
    </section>
  );
};
