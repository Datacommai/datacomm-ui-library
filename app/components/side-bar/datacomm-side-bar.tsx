import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { DatacommNotification } from "../notification/datacomm-notification";

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

type DatacommSidebarArgs = {
  logo: string;
  topItems: DatacommSidebarItem[];
  bottomItems: DatacommSidebarItem[];
};

type DatacommSidebarItem = {
  title: string;
  leftIcon: LucideIcon;
  onClick?: () => void;
  notificationCount?: number;
  url?: string;
};

const topItems: DatacommSidebarItem[] = [
  {
    title: "Conversations",
    url: "#",
    leftIcon: Home,
    notificationCount: 7,
    onClick: () => console.log("Conversations clicked"),
  },
  {
    title: "Clients",
    url: "#",
    leftIcon: Inbox,
    onClick: () => console.log("Clients clicked"),
  },
  {
    title: "Properties",
    url: "#",
    leftIcon: Calendar,
    onClick: () => console.log("Properties clicked"),
  },
  {
    title: "Tasks",
    url: "#",
    leftIcon: Search,
    onClick: () => console.log("Tasks clicked"),
  },
  {
    title: "To-Do Lists",
    url: "#",
    leftIcon: Settings,
    onClick: () => console.log("To-Do Lists clicked"),
  },
];

const bottomItems: DatacommSidebarItem[] = [
  {
    title: "Settings",
    url: "#",
    leftIcon: Settings,
    onClick: () => console.log("Settings clicked"),
  },
  {
    title: "Help",
    url: "#",
    leftIcon: Search,
    onClick: () => console.log("Help clicked"),
  },
];

export const DatacommSideBar: React.FC<DatacommSidebarArgs> = ({
  logo,
  topItems,
  bottomItems,
}) => {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" variant="sidebar">
        {/* this is the button that makes it collapse but it is appering within the
        sidebar. I am assumning it is because of the the fact that the sidebarprovider is not used as intended in the files. */}

        {/* <div className="flex justify-center bg-gray">
          <SidebarTrigger />
        </div> */}
        <SidebarHeader className="flex justify-between">
          <Image src={logo} alt="logo" width={50} height={50} />
        </SidebarHeader>
        <SidebarContent className="flex flex-col justify-between">
          {/* Top Items */}
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {topItems.map((item) => (
                  <SidebarMenuItem
                    className="items-center flex"
                    key={item.title}
                  >
                    <SidebarMenuButton asChild>
                      <a href={item.url} onClick={item.onClick}>
                        <item.leftIcon className="h-4 w-4" />
                        <span>{item.title}</span>
                        {item.notificationCount && (
                          <DatacommNotification
                            counter={item.notificationCount}
                          />
                        )}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Bottom Items */}
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {bottomItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url} onClick={item.onClick}>
                        <item.leftIcon className="mr-2 h-4 w-4" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                    {item.notificationCount && (
                      <DatacommNotification counter={item.notificationCount} />
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
};
