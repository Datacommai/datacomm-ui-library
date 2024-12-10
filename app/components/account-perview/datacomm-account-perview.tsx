import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";
import { DatacommUserProfileIcon } from "../user-profile-icon/datacomm-user-profile-icon";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";

type DropdownItem = {
  name: string;
  id: string;
  leftIcon?: string;
  rightElement?: React.ReactNode;
};

type DatacommAccountPreviewProps = {
  profileIcon: string;
  fullname: string;
  jobDescription: string;
  dropdownItems: DropdownItem[];
};

export const DatacommAccountPreview: React.FC<DatacommAccountPreviewProps> = ({
  profileIcon,
  fullname,
  jobDescription,
  dropdownItems,
}) => {
  return (
    <SidebarProvider>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="flex gap-2 h-[40px]">
                  <Avatar
                    className="w-[40px] h-[40px] rounded-full"
                    data-testid="user-avatar"
                  >
                    <AvatarImage
                      src={profileIcon}
                      data-testid="user-avatar-image"
                      alt="user icon"
                    />
                  </Avatar>
                  <span>
                    <h2 className="font-semibold text-sm">{fullname}</h2>
                    <p className="font-medium text-xs">{jobDescription}</p>
                  </span>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" className=" w-[260px] p-5">
                {dropdownItems.map((item) => (
                  <DropdownMenuItem className="h-10" key={item.id}>
                    <div className="flex w-full justify-between">
                      <div className="flex gap-2">
                        {item.leftIcon && (
                          <Image
                            src={item.leftIcon}
                            alt={`${item.name}-icon`}
                            width={16}
                            height={16}
                          />
                        )}

                        <span>{item.name}</span>
                      </div>
                      {item.rightElement && <span>{item.rightElement}</span>}
                    </div>
                  </DropdownMenuItem>
                ))}

                <section className="flex gap-2 pl-2 mt-2">
                  <Avatar
                    className="w-10 h-10 rounded-full"
                    data-testid="user-avatar"
                  >
                    <AvatarImage
                      src={profileIcon}
                      data-testid="user-avatar-image"
                      alt="user icon"
                    />
                  </Avatar>
                  <span>
                    <h2 className="font-semibold text-sm">{fullname}</h2>
                    <p className="font-medium text-xs">{jobDescription}</p>
                  </span>
                </section>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </SidebarProvider>
  );
};
