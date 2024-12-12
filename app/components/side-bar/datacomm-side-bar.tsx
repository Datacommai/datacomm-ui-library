import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { DatacommNotification } from "../notification/datacomm-notification";
import { DatacommAccountPreview } from "../account-perview/datacomm-account-perview";

type DatacommSidebarArgs = {
  logo: string;
  topItems: DatacommSidebarItem[];
  bottomItems: DatacommSidebarItem[];
  accountPreviewProps: {
    profileIcon: string;
    fullname: string;
    jobDescription: string;
    dropdownItems: DropdownItem[];
  };
};

type DatacommSidebarItem = {
  title: string;
  leftIcon: string;
  onClick?: () => void;
  notificationCount?: number;
  url?: string;
};

type DropdownItem = {
  name: string;
  id: string;
  leftIcon?: string;
  rightElement?: React.ReactNode;
};

export const DatacommSideBar: React.FC<DatacommSidebarArgs> = ({
  logo,
  topItems,
  bottomItems,
  accountPreviewProps,
}) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState(false);

  const handleItemClick = (title: string, onClick?: () => void) => {
    setActiveItem(title);
    if (onClick) onClick();
  };

  return (
    <SidebarProvider>
      <Sidebar
        collapsible="icon"
        variant="sidebar"
        className="w-[280px] h-full"
      >
        <SidebarHeader
          className={`flex flex-row justify-between items-center ${
            !collapsed ? "px-4" : "px-2"
          }`}
        >
          <Image src={logo} alt="logo" width={50} height={50} />
          <SidebarTrigger
            className="ml-2"
            onClick={() => setCollapsed(!collapsed)}
            data-testid="sidebar-trigger"
          />
        </SidebarHeader>

        <SidebarContent className="flex flex-col justify-between">
          {/* Top Items */}
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="flex-col flex gap-[10px]">
                {topItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      className={`items-center flex h-10 px-5 py-0 rounded-[10px] hover:bg-white ${
                        activeItem === item.title
                          ? "bg-white border border-[#A5A5AB]"
                          : ""
                      }`}
                      asChild
                      onClick={() => handleItemClick(item.title, item.onClick)}
                      data-testid={`menu-button-${item.title}`}
                    >
                      <Link
                        href={item.url || "#"}
                        className="flex items-center w-full"
                      >
                        <Image
                          src={item.leftIcon}
                          alt={`${item.title}-icon`}
                          width={16}
                          height={16}
                        />
                        {!collapsed && (
                          <span data-testid="menu-title">{item.title}</span>
                        )}
                        {!collapsed && item.notificationCount && (
                          <DatacommNotification
                            counter={item.notificationCount}
                          />
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Bottom Items */}
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="flex-col flex gap-[10px]">
                {bottomItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      className={`items-center flex h-10 px-5 py-0 rounded-[10px] hover:bg-white ${
                        activeItem === item.title
                          ? "bg-white border border-[#A5A5AB]"
                          : ""
                      }`}
                      asChild
                      onClick={() => handleItemClick(item.title, item.onClick)}
                      data-testid={`menu-button-${item.title}`}
                    >
                      <Link
                        href={item.url || "#"}
                        className="flex items-center w-full"
                      >
                        <Image
                          src={item.leftIcon}
                          alt={`${item.title}-icon`}
                          width={16}
                          height={16}
                        />
                        {!collapsed && (
                          <span data-testid="menu-title">{item.title}</span>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
                <DatacommAccountPreview {...accountPreviewProps} />
              </SidebarMenu>

              <div className="mt-4"></div>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
};
