"use client";

import { DatacommUserProfileIcon } from "../user-profile-icon/datacomm-user-profile-icon";
import { DatacommNotification } from "../notification/datacomm-notification";

type DatacommContactTabProps = {
  username: string;
  message: string;
  notificationCount: number;
  profileIcon: string;
  isSelected: boolean;
};

export const DatacommContactTab: React.FC<DatacommContactTabProps> = ({
  username,
  message,
  notificationCount,
  profileIcon,
  isSelected,
}) => {
  return (
    <section
      className={`flex gap-3 w-[354px] h-[84px] py-4 px-2 rounded-[10px] cursor-pointer ${
        isSelected ? "bg-[#D3F4EF]" : "bg-white"
      }`}
      aria-label="Contact Tab"
      role="section"
    >
      <DatacommUserProfileIcon icon={profileIcon} />
      <section className="flex flex-col w-full gap-1">
        <span className="flex justify-between items-center">
          <h2 className="font-bold text-[#241E26]">{username}</h2>
          <p
            className={`text-sm ${
              isSelected ? "font-normal" : "font-semibold"
            } text-[#241E26]`}
          >
            15 min
          </p>
        </span>
        <span className="flex justify-between items-center">
          <p
            className={`text-sm max-w-52 truncate flex-1 ${
              isSelected ? "font-normal" : "font-semibold"
            } text-[#241E26]`}
          >
            {message}
          </p>
          {!isSelected && <DatacommNotification counter={notificationCount} />}
        </span>
      </section>
    </section>
  );
};
