import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  Sidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

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
    <section className="h-10  w-[260px]">
      <SidebarProvider className="w-full flex min-h-0 h-full">
        <SidebarFooter className="w-full flex p-0  items-start justify-start">
          <SidebarMenu className="w-full">
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton className="flex pl-3 justify-self-start justify-start gap-2 h-[40px] w-full hover:bg-white">
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
                <DropdownMenuContent side="top" className=" w-[260px] ">
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
    </section>
  );
};
